import { supabase } from './supabase';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service: string;
  property?: string;
  property_address?: string;
  city?: string;
  zip_code?: string;
  current_system_age?: string;
  home_size?: string;
  service_timeline?: string;
  preferred_time?: string;
  message?: string;
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  const { error } = await supabase.from('contact_submissions').insert(payload);
  if (error) {
    throw new Error(error.message);
  }
}
