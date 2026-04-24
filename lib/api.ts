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

export async function submitContact(payload: ContactPayload): Promise<void> {
  const workerUrl = process.env.NEXT_PUBLIC_WORKER_URL;
  if (!workerUrl) {
    throw new Error('NEXT_PUBLIC_WORKER_URL is not configured.');
  }

  const res = await fetch(`${workerUrl.replace(/\/$/, '')}/contact`, {
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
