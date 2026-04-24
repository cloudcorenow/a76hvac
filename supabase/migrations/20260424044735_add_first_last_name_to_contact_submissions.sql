/*
  # Split contact name into first_name and last_name

  1. Changes
    - `contact_submissions`
      - Add `first_name` (text, default '') — captured from the Contact form's "First Name" field.
      - Add `last_name`  (text, default '') — captured from the Contact form's "Last Name" field.
    - The existing `name` column is preserved and will continue to receive the
      concatenation of first + last name from the application layer. This keeps
      historical rows untouched and avoids any destructive schema change.

  2. Security
    - No RLS policy changes required; existing policies continue to apply.

  3. Notes
    1. Columns are added idempotently using an `IF NOT EXISTS` guard.
    2. Defaults are empty strings so inserts that omit these columns succeed.
    3. No data is dropped or rewritten.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'first_name'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN first_name text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'last_name'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN last_name text DEFAULT '';
  END IF;
END $$;
