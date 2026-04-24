import { supabase } from './supabase';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service: string;
  property?: string;
  address?: string;
  city?: string;
  zip_code?: string;
  system_age?: string;
  building_size?: string;
  timeline?: string;
  hoa?: string;
  message?: string;
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  const { error } = await supabase.from('contact_submissions').insert({
    name: payload.name,
    email: payload.email,
    phone: payload.phone ?? '',
    service: payload.service,
    property: payload.property ?? '',
    address: payload.address ?? '',
    city: payload.city ?? '',
    zip_code: payload.zip_code ?? '',
    system_age: payload.system_age ?? '',
    building_size: payload.building_size ?? '',
    timeline: payload.timeline ?? '',
    hoa: payload.hoa ?? '',
    message: payload.message ?? '',
  });
  if (error) throw new Error(error.message);
}