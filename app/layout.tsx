import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "AJD Upholstery | Furniture Renewed by Hand";
  const description = "Furniture upholstery, repair, and restoration with more than a decade of hands-on experience.";

  return {
    metadataBase,
    title,
    description,
    openGraph: { title, description, type: "website", images: [{ url: "/ajd-logo-source.jpg", width: 592, height: 1056, alt: "Custom AJD Upholstery logo" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/ajd-logo-source.jpg"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
