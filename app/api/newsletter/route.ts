import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { FIELD_LIMITS, MAX_BODY_BYTES } from "@/lib/quote-options";

const supabaseUrl = process.env.SUPABASE_URL;
// Server-side inserts must use the secret key. The publishable (anon) key is
// blocked by row-level security on the leads table.
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!supabaseUrl || !supabaseSecretKey) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 500 }
    );
  }

  const rawBody = await request.text();
  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(rawBody) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || typeof body.email !== "string") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // eslint-disable-next-line no-control-regex
  const email = body.email.replace(/[\u0000-\u001F\u007F]/g, "").trim();
  if (!email || email.length > FIELD_LIMITS.email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseSecretKey, {
    auth: { persistSession: false },
  });

  // Application-level upsert: opt_in = true marks a newsletter subscriber, so we
  // dedupe on email among opted-in rows rather than adding a unique constraint
  // to the shared leads table (which would break quote inserts).
  const { data: existing, error: lookupError } = await supabase
    .from("leads")
    .select("id")
    .eq("email", email)
    .eq("opt_in", true)
    .limit(1)
    .maybeSingle();

  if (lookupError) {
    console.error("Failed to look up newsletter signup:", lookupError);
    return NextResponse.json({ error: "Unable to save signup." }, { status: 500 });
  }

  if (existing) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const { error } = await supabase.from("leads").insert({
    email,
    opt_in: true,
  });

  if (error) {
    console.error("Failed to insert newsletter signup:", error);
    return NextResponse.json(
      { error: "Unable to save signup." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
