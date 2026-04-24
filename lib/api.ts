const WORKER_URL = process.env.NEXT_PUBLIC_WORKER_URL ?? '';

export interface ContactPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  zip_code?: string;
  property?: string;
  service: string;
  system_age?: string;
  building_size?: string;
  timeline?: string;
  hoa?: string;
  preferred_time?: string;
  message?: string;
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  const res = await fetch(`${WORKER_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({})) as { error?: string };
    throw new Error(body.error ?? 'Request failed');
  }
}
