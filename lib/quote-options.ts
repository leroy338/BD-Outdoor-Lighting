// Shared between the client form and the /api/leads route so the server can
// validate submissions against the exact same allowed values the UI offers.

export const PROJECT_TYPES = [
  "Lawn Maintenance (Mowing & Edging)",
  "Lawn Restoration & Sod Installation",
  "Seasonal Cleanup (Spring / Fall)",
  "Hardscaping (Patio, Walkway, Retaining Wall)",
  "Deck Construction",
  "Garden Design & Installation",
  "Fertilization & Weed Control",
  "Consultation",
  "Other / Not Sure Yet",
] as const;

export const TIMELINES = [
  "ASAP (Within 1 week)",
  "1-2 weeks",
  "2-4 weeks",
  "1-3 months",
  "3+ months",
  "Flexible",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type Timeline = (typeof TIMELINES)[number];

// Maximum accepted lengths per field. Enforced server-side to cap payload size
// and reject abusive input; mirrored on the client as input maxLength hints.
export const FIELD_LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 30,
  purpose: 2000,
  additionalRequirements: 2000,
} as const;

// Hard ceiling on the raw request body so an attacker can't stream a huge
// payload before per-field checks run.
export const MAX_BODY_BYTES = 16 * 1024;
