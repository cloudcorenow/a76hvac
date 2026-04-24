CREATE TABLE IF NOT EXISTS contact_submissions (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT DEFAULT '',
  service    TEXT NOT NULL,
  property   TEXT DEFAULT '',
  preferred_time TEXT DEFAULT '',
  message    TEXT DEFAULT '',
  status     TEXT DEFAULT 'new',
  created_at TEXT DEFAULT (datetime('now'))
);
