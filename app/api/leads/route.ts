import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import {
  FIELD_LIMITS,
  MAX_BODY_BYTES,
  PROJECT_TYPES,
  TIMELINES,
} from "@/lib/quote-options";

const supabaseUrl = process.env.SUPABASE_URL;
// Server-side inserts must use the secret key. The publishable (anon) key is
// blocked by row-level security on the leads table.
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

// Matches the vast majority of real-world addresses without being clever.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Phone numbers may contain digits, spaces, and the usual separators only.
const PHONE_PATTERN = /^[+()\-.\s\d]+$/;

const badRequest = (error: string) =>
  NextResponse.json({ error }, { status: 400 });

// Trims, rejects non-strings, strips control characters (incl. null bytes),
// and enforces a maximum length.
function cleanString(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  // eslint-disable-next-line no-control-regex
  const trimmed = value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
  if (trimmed.length === 0 || trimmed.length > max) return null;
  return trimmed;
}

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
    return badRequest("Invalid request body.");
  }

  if (typeof body !== "object" || body === null) {
    return badRequest("Invalid request body.");
  }

  const firstName = cleanString(body.firstName, FIELD_LIMITS.firstName);
  const lastName = cleanString(body.lastName, FIELD_LIMITS.lastName);
  const email = cleanString(body.email, FIELD_LIMITS.email);
  const phone = cleanString(body.phone, FIELD_LIMITS.phone);
  const purpose = cleanString(body.purpose, FIELD_LIMITS.purpose);
  const projectType = cleanString(body.projectType, 200);
  const timeline = cleanString(body.timeline, 100);
  // Optional field: absent/empty is allowed, but if present it must be valid.
  const additionalRequirements =
    body.additionalRequirements === undefined ||
    body.additionalRequirements === null ||
    body.additionalRequirements === ""
      ? ""
      : cleanString(body.additionalRequirements, FIELD_LIMITS.additionalRequirements);

  if (!firstName || !lastName || !email || !phone || !projectType || !purpose || !timeline) {
    return badRequest("Missing or invalid required fields.");
  }

  if (additionalRequirements === null) {
    return badRequest("Additional notes are invalid.");
  }

  if (!EMAIL_PATTERN.test(email)) {
    return badRequest("Please provide a valid email address.");
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (!PHONE_PATTERN.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    return badRequest("Please provide a valid phone number.");
  }

  // Whitelist: project type and timeline must be exact options we offer. This
  // is the strongest defense against tampered values.
  if (!(PROJECT_TYPES as readonly string[]).includes(projectType)) {
    return badRequest("Invalid project type.");
  }
  if (!(TIMELINES as readonly string[]).includes(timeline)) {
    return badRequest("Invalid timeline.");
  }

  const description = additionalRequirements
    ? `${purpose}\n\nAdditional notes: ${additionalRequirements}`
    : purpose;

  const supabase = createClient(supabaseUrl, supabaseSecretKey, {
    auth: { persistSession: false },
  });
  const { error } = await supabase.from("leads").insert({
    first_name: firstName,
    last_name: lastName,
    email,
    type: projectType,
    timeframe: timeline,
    budget: null,
    description,
    phone_number: phone,
    quote_form: true,
  });

  if (error) {
    console.error("Failed to insert lead:", error);
    return NextResponse.json(
      { error: "Unable to save lead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
