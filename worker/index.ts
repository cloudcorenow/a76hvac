export interface Env {
  DB: D1Database;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (url.pathname === '/contact' && request.method === 'POST') {
      let body: Record<string, string>;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'Invalid JSON' }, 400);
      }

      const {
        first_name,
        last_name,
        email,
        phone,
        address,
        city,
        zip_code,
        property,
        service,
        system_age,
        building_size,
        timeline,
        hoa,
        preferred_time,
        message,
      } = body;

      if (!first_name || !last_name || !email || !service) {
        return json({ error: 'Missing required fields: first_name, last_name, email, service' }, 400);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return json({ error: 'Invalid email address' }, 400);
      }

      const fullName = `${first_name} ${last_name}`.trim();
      const submitterIp = request.headers.get('CF-Connecting-IP') ?? '';
      const submitterCountry = request.headers.get('CF-IPCountry') ?? '';

      try {
        await env.DB.prepare(
          `INSERT INTO contact_submissions (
            first_name, last_name, name, email, phone,
            address, city, zip_code, property, service,
            system_age, building_size, timeline, hoa,
            preferred_time, message, submitter_country, submitter_ip
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        )
          .bind(
            first_name,
            last_name,
            fullName,
            email,
            phone ?? '',
            address ?? '',
            city ?? '',
            zip_code ?? '',
            property ?? '',
            service,
            system_age ?? '',
            building_size ?? '',
            timeline ?? '',
            hoa ?? '',
            preferred_time ?? '',
            message ?? '',
            submitterCountry,
            submitterIp
          )
          .run();

        return json({ success: true });
      } catch (err) {
        console.error('D1 insert error:', err);
        return json({ error: 'Database error' }, 500);
      }
    }

    return json({ error: 'Not found' }, 404);
  },
};
