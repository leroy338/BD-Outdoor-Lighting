import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// Triggered by a Postgres webhook (AFTER INSERT on public.leads). Posts a
// formatted notification to Slack via an incoming webhook.
//
// Required secret:  SLACK_WEBHOOK_URL
// Optional secret:  WEBHOOK_SECRET  (if set, requests must send a matching
//                   `x-webhook-secret` header — recommended for security)

interface LeadRecord {
  id?: number;
  created_at?: string;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  type?: string | null;
  timeframe?: string | null;
  description?: string | null;
  status?: string | null;
  opt_in?: boolean | null;
  quote_form?: boolean | null;
}

interface WebhookPayload {
  type?: string;
  table?: string;
  schema?: string;
  record?: LeadRecord;
}

function buildSlackMessage(record: LeadRecord): Record<string, unknown> {
  const fullName = [record.first_name, record.last_name]
    .filter(Boolean)
    .join(" ")
    .trim();

  // A lead with opt_in and no quote details is a newsletter signup.
  const isNewsletter = record.opt_in === true && !record.quote_form && !record.type;
  const heading = isNewsletter
    ? ":email: New newsletter signup"
    : ":seedling: New quote request";

  const fields: { type: string; text: string }[] = [];
  const addField = (label: string, value?: string | null) => {
    if (value && String(value).trim()) {
      fields.push({ type: "mrkdwn", text: `*${label}:*\n${value}` });
    }
  };

  if (!isNewsletter) {
    addField("Name", fullName || "—");
    addField("Email", record.email);
    addField("Phone", record.phone_number);
    addField("Project Type", record.type);
    addField("Timeline", record.timeframe);
  } else {
    addField("Email", record.email);
  }

  const blocks: Record<string, unknown>[] = [
    {
      type: "header",
      text: { type: "plain_text", text: heading, emoji: true },
    },
  ];

  if (fields.length > 0) {
    blocks.push({ type: "section", fields });
  }

  if (!isNewsletter && record.description && record.description.trim()) {
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: `*Details:*\n${record.description}` },
    });
  }

  return {
    text: isNewsletter
      ? `New newsletter signup: ${record.email ?? "unknown"}`
      : `New quote request from ${fullName || record.email || "unknown"}`,
    blocks,
  };
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const expectedSecret = Deno.env.get("WEBHOOK_SECRET");
  if (expectedSecret && req.headers.get("x-webhook-secret") !== expectedSecret) {
    return new Response("Unauthorized", { status: 401 });
  }

  const slackWebhookUrl = Deno.env.get("SLACK_WEBHOOK_URL");
  if (!slackWebhookUrl) {
    console.error("SLACK_WEBHOOK_URL is not configured.");
    return new Response("Webhook not configured", { status: 500 });
  }

  let payload: WebhookPayload;
  try {
    payload = (await req.json()) as WebhookPayload;
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  const record = payload.record;
  if (!record) {
    return new Response("No record in payload", { status: 400 });
  }

  const slackResponse = await fetch(slackWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildSlackMessage(record)),
  });

  if (!slackResponse.ok) {
    const detail = await slackResponse.text();
    console.error("Slack webhook failed:", slackResponse.status, detail);
    return new Response("Failed to notify Slack", { status: 502 });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
