/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Full name of submitter
      - `email` (text) - Email address
      - `phone` (text, nullable) - Phone number
      - `service` (text) - Service type requested
      - `property` (text, nullable) - Property type
      - `preferred_time` (text, nullable) - Preferred contact time
      - `message` (text, nullable) - Additional message
      - `status` (text) - Status: 'new', 'contacted', 'closed'
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Public INSERT policy (anyone can submit a contact form)
    - No SELECT/UPDATE/DELETE for public (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service text NOT NULL,
  property text DEFAULT '',
  preferred_time text DEFAULT '',
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
