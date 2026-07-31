export interface QuotePayload {
  name: string;
  phone: string;
  email: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  workType: string;
  description: string;
  contactMethod: string;
  // Honeypot — real customers never fill this in.
  companyWebsite: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value);
}

/** Reads and normalizes the expected fields out of an unknown JSON body. */
export function parseQuotePayload(body: unknown): QuotePayload {
  const record = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  const str = (key: string) => (typeof record[key] === "string" ? (record[key] as string).trim() : "");
  return {
    name: str("name"),
    phone: str("phone"),
    email: str("email"),
    vehicleYear: str("vehicleYear"),
    vehicleMake: str("vehicleMake"),
    vehicleModel: str("vehicleModel"),
    workType: str("workType"),
    description: str("description"),
    contactMethod: str("contactMethod") || "Either",
    companyWebsite: str("companyWebsite"),
  };
}

/** Returns a validation error message, or null if the payload is valid. */
export function validateQuotePayload(payload: QuotePayload): string | null {
  if (!payload.name) return "Please enter your name.";
  if (!payload.phone && !payload.email) return "Please provide a phone number or an email address.";
  if (payload.email && !isValidEmail(payload.email)) return "Please enter a valid email address.";
  if (!payload.vehicleYear || !payload.vehicleMake || !payload.vehicleModel) {
    return "Please provide the vehicle year, make, and model.";
  }
  if (!payload.workType) return "Please let us know the type of upholstery work you need.";
  if (!payload.description) return "Please add a short description of the project.";
  return null;
}
