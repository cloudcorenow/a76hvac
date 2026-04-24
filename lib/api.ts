import { supabase } from './supabase';

export interface ContactPayload {
  first_name: string;
  last_name: string;
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

export class GeoBlockedError extends Error {
  constructor(message = 'Contact submissions are limited to the United States.') {
    super(message);
    this.name = 'GeoBlockedError';
  }
}

async function submitViaWorker(url: string, payload: ContactPayload): Promise<void> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (res.status === 403) {
    const data = await res.json().catch(() => ({}));
    throw new GeoBlockedError(data?.error);
  }
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data?.error ?? `Request failed (${res.status})`);
  }
}

async function submitViaSupabase(payload: ContactPayload): Promise<void> {
  const { error } = await supabase.from('contact_submissions').insert({
    first_name: payload.first_name,
    last_name: payload.last_name,
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

export async function submitContact(payload: ContactPayload): Promise<void> {
  const workerUrl = process.env.NEXT_PUBLIC_WORKER_URL;
  if (workerUrl) {
    return submitViaWorker(`${workerUrl.replace(/\/$/, '')}/contact`, payload);
  }
  return submitViaSupabase(payload);
}
