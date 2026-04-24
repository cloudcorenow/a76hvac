/*
  # Extend contact_submissions with quote-request fields

  1. Modified Tables
    - `contact_submissions`
      - Add `address` (text) - Street address
      - Add `city` (text) - City
      - Add `zip_code` (text) - ZIP/postal code
      - Add `system_age` (text) - Current HVAC system age bracket
      - Add `building_size` (text) - Approximate home/building size
      - Add `timeline` (text) - Service timeline preference

  2. Security
    - No changes to existing RLS policies; table remains insert-only for anon.
*/

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contact_submissions' AND column_name='address') THEN
    ALTER TABLE contact_submissions ADD COLUMN address text DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contact_submissions' AND column_name='city') THEN
    ALTER TABLE contact_submissions ADD COLUMN city text DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contact_submissions' AND column_name='zip_code') THEN
    ALTER TABLE contact_submissions ADD COLUMN zip_code text DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contact_submissions' AND column_name='system_age') THEN
    ALTER TABLE contact_submissions ADD COLUMN system_age text DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contact_submissions' AND column_name='building_size') THEN
    ALTER TABLE contact_submissions ADD COLUMN building_size text DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contact_submissions' AND column_name='timeline') THEN
    ALTER TABLE contact_submissions ADD COLUMN timeline text DEFAULT '';
  END IF;
END $$;
