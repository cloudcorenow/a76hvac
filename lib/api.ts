const WORKER_URL = process.env.NEXT_PUBLIC_WORKER_URL ?? '';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service: string;
  property?: string;
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
