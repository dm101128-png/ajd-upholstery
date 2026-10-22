/**
 * Central place for AJD Upholstery's business details.
 *
 * Fields marked PLACEHOLDER are not yet confirmed anywhere in this
 * repository. Replace them with real values before relying on them —
 * search this file for "PLACEHOLDER" to find every one.
 */
export const businessInfo = {
  name: "AJD Upholstery",
  tagline: "Quality automotive upholstery",
  phone: "214-489-1200",
  // PLACEHOLDER: shop address not found in the repo.
  address: null as string | null,
  // PLACEHOLDER: no social links found in the repo.
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
  },
  experienceYears: "10+",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-story", label: "Our Story" },
  { href: "/our-work", label: "Our Work" },
  { href: "/katzkin", label: "Katzkin" },
  { href: "/quote", label: "Get a Quote" },
];
