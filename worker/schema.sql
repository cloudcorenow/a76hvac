CREATE TABLE IF NOT EXISTS contact_submissions (
  id                 INTEGER PRIMARY KEY AUTOINCREMENT,
  name               TEXT NOT NULL,
  email              TEXT NOT NULL,
  phone              TEXT DEFAULT '',
  service            TEXT NOT NULL,
  property           TEXT DEFAULT '',
  property_address   TEXT DEFAULT '',
  city               TEXT DEFAULT '',
  zip_code           TEXT DEFAULT '',
  current_system_age TEXT DEFAULT '',
  home_size          TEXT DEFAULT '',
  service_timeline   TEXT DEFAULT '',
  preferred_time     TEXT DEFAULT '',
  message            TEXT DEFAULT '',
  status             TEXT DEFAULT 'new',
  created_at         TEXT DEFAULT (datetime('now'))
);

-- Additive migrations for existing databases (safe no-ops if columns already exist)
-- Run these one at a time with: wrangler d1 execute a76db --command "ALTER TABLE ..."
--   ALTER TABLE contact_submissions ADD COLUMN property_address TEXT DEFAULT '';
--   ALTER TABLE contact_submissions ADD COLUMN city TEXT DEFAULT '';
--   ALTER TABLE contact_submissions ADD COLUMN zip_code TEXT DEFAULT '';
--   ALTER TABLE contact_submissions ADD COLUMN current_system_age TEXT DEFAULT '';
--   ALTER TABLE contact_submissions ADD COLUMN home_size TEXT DEFAULT '';
--   ALTER TABLE contact_submissions ADD COLUMN service_timeline TEXT DEFAULT '';
