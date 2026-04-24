export interface Env {
  DB: D1Database;
  ENVIRONMENT?: string;
  ALLOWED_ORIGIN?: string;
}

interface IncomingRequestCf extends Request {
  cf?: { country?: string; asn?: number; colo?: string };
}

function corsHeaders(env: Env) {
  return {
    'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN ?? '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

function json(data: unknown, status: number, env: Env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(env), 'Content-Type': 'application/json' },
  });
}

function resolveCountry(request: IncomingRequestCf): string | undefined {
  return request.cf?.country ?? request.headers.get('cf-ipcountry') ?? undefined;
}

function isAllowedCountry(country: string | undefined, env: Env): boolean {
  if (country === 'US') return true;
  if (!country && env.ENVIRONMENT !== 'production') return true;
  return false;
}

export default {
  async fetch(request: IncomingRequestCf, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }

    const url = new URL(request.url);
    if (url.pathname !== '/contact' || request.method !== 'POST') {
      return json({ error: 'Not found' }, 404, env);
    }

    const country = resolveCountry(request);
    if (!isAllowedCountry(country, env)) {
      return json(
        { error: 'Contact submissions are limited to the United States.', country: country ?? 'unknown' },
        403,
        env,
      );
    }

    let body: Record<string, string>;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400, env);
    }

    const {
      name, email, phone, service, property,
      address, city, zip_code, system_age, building_size,
      timeline, hoa, message,
    } = body;

    if (!name || !email || !service) {
      return json({ error: 'Missing required fields: name, email, service' }, 400, env);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: 'Invalid email address' }, 400, env);
    }
    if (name.length > 200 || email.length > 320 || (message ?? '').length > 5000) {
      return json({ error: 'Field too long' }, 400, env);
    }

    try {
      await env.DB.prepare(
        `INSERT INTO contact_submissions
         (name, email, phone, service, property, address, city, zip_code,
          system_age, building_size, timeline, hoa, message,
          submitter_country, submitter_ip, status, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', datetime('now'))`
      )
        .bind(
          name, email, phone ?? '', service, property ?? '',
          address ?? '', city ?? '', zip_code ?? '',
          system_age ?? '', building_size ?? '', timeline ?? '', hoa ?? '', message ?? '',
          country ?? '', request.headers.get('cf-connecting-ip') ?? '',
        )
        .run();

      return json({ success: true }, 200, env);
    } catch (err) {
      console.error('D1 insert error:', err);
      return json({ error: 'Database error' }, 500, env);
    }
  },
};
