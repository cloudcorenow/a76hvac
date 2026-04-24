/*
  # Add HOA field to contact_submissions

  1. Modified Tables
    - `contact_submissions`
      - Add `hoa` (text) - Whether the property is governed by a Homeowners Association ('Yes' or 'No')

  2. Security
    - No changes to existing RLS policies.
*/

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contact_submissions' AND column_name='hoa') THEN
    ALTER TABLE contact_submissions ADD COLUMN hoa text DEFAULT '';
  END IF;
END $$;
