CREATE TABLE IF NOT EXISTS contact_submissions (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  name            TEXT NOT NULL,
  email           TEXT NOT NULL,
  phone           TEXT DEFAULT '',
  service         TEXT NOT NULL,
  property        TEXT DEFAULT '',
  address         TEXT DEFAULT '',
  city            TEXT DEFAULT '',
  zip_code        TEXT DEFAULT '',
  system_age      TEXT DEFAULT '',
  building_size   TEXT DEFAULT '',
  timeline        TEXT DEFAULT '',
  hoa             TEXT DEFAULT '',
  message         TEXT DEFAULT '',
  submitter_country TEXT DEFAULT '',
  submitter_ip    TEXT DEFAULT '',
  status          TEXT DEFAULT 'new',
  created_at      TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
