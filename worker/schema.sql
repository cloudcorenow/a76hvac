-- ============================================================================
-- Allegiance 76 HVAC — Cloudflare D1 Schema
-- ============================================================================
-- Mirrors the Supabase `contact_submissions` table field-for-field, plus two
-- Worker-only columns (`submitter_country`, `submitter_ip`) captured from the
-- Cloudflare edge for abuse review.
--
-- Apply with:
--   wrangler d1 execute allegiance76-hvac --file=worker/schema.sql --remote
-- ============================================================================

CREATE TABLE IF NOT EXISTS contact_submissions (
  id                INTEGER PRIMARY KEY AUTOINCREMENT,

  -- Contact identity
  first_name        TEXT NOT NULL,
  last_name         TEXT NOT NULL,
  name              TEXT NOT NULL DEFAULT '',        -- concatenation, kept for Supabase parity
  email             TEXT NOT NULL,
  phone             TEXT NOT NULL DEFAULT '',

  -- Property location
  address           TEXT NOT NULL DEFAULT '',
  city              TEXT NOT NULL DEFAULT '',
  zip_code          TEXT NOT NULL DEFAULT '',
  property          TEXT NOT NULL DEFAULT '',

  -- Service request
  service           TEXT NOT NULL,
  system_age        TEXT NOT NULL DEFAULT '',
  building_size     TEXT NOT NULL DEFAULT '',
  timeline          TEXT NOT NULL DEFAULT '',
  hoa               TEXT NOT NULL DEFAULT '',
  preferred_time    TEXT NOT NULL DEFAULT '',
  message           TEXT NOT NULL DEFAULT '',

  -- Edge metadata (Worker-only)
  submitter_country TEXT NOT NULL DEFAULT '',
  submitter_ip      TEXT NOT NULL DEFAULT '',

  -- Workflow
  status            TEXT NOT NULL DEFAULT 'new'
                    CHECK (status IN ('new', 'contacted', 'quoted', 'won', 'lost', 'spam')),
  created_at        TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at        TEXT NOT NULL DEFAULT (datetime('now')),

  -- Integrity
  CHECK (length(first_name) BETWEEN 1 AND 100),
  CHECK (length(last_name)  BETWEEN 1 AND 100),
  CHECK (length(email)      BETWEEN 3 AND 320),
  CHECK (email LIKE '%_@_%._%'),
  CHECK (length(message)    <= 5000)
);

CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_status     ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_email      ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_zip_code   ON contact_submissions(zip_code);
CREATE INDEX IF NOT EXISTS idx_contact_service    ON contact_submissions(service);
CREATE INDEX IF NOT EXISTS idx_contact_last_name  ON contact_submissions(last_name);

-- Maintain updated_at on row updates
CREATE TRIGGER IF NOT EXISTS trg_contact_submissions_updated_at
AFTER UPDATE ON contact_submissions
FOR EACH ROW
BEGIN
  UPDATE contact_submissions
     SET updated_at = datetime('now')
   WHERE id = NEW.id;
END;

-- ============================================================================
-- Rate limiting (per-IP) — used by the Worker to throttle submissions.
-- Lightweight counter table; prune old rows periodically.
-- ============================================================================

CREATE TABLE IF NOT EXISTS rate_limit_hits (
  ip           TEXT NOT NULL,
  window_start TEXT NOT NULL,
  hits         INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (ip, window_start)
);

CREATE INDEX IF NOT EXISTS idx_rate_limit_window ON rate_limit_hits(window_start);
