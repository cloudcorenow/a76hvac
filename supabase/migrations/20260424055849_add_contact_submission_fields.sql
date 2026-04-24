/*
  # Add new fields to contact_submissions

  1. New Columns (all additive, nullable with safe defaults — no data loss)
    - `property_address` (text) - Street address of the property
    - `city` (text) - City
    - `zip_code` (text) - ZIP/postal code
    - `current_system_age` (text) - Age of existing HVAC system
    - `home_size` (text) - Approximate home/building size
    - `service_timeline` (text) - When service is needed

  2. Notes
    - All columns use IF NOT EXISTS guards so the migration is idempotent
    - Existing rows get empty-string defaults, preserving all historic data
    - RLS already enabled on the table; no policy changes required
*/

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'property_address') THEN
    ALTER TABLE contact_submissions ADD COLUMN property_address text DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'city') THEN
    ALTER TABLE contact_submissions ADD COLUMN city text DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'zip_code') THEN
    ALTER TABLE contact_submissions ADD COLUMN zip_code text DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'current_system_age') THEN
    ALTER TABLE contact_submissions ADD COLUMN current_system_age text DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'home_size') THEN
    ALTER TABLE contact_submissions ADD COLUMN home_size text DEFAULT '';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'service_timeline') THEN
    ALTER TABLE contact_submissions ADD COLUMN service_timeline text DEFAULT '';
  END IF;
END $$;
