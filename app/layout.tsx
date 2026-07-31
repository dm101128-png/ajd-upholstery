import type { Metadata } from "next";
import { headers } from "next/headers";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "AJD Upholstery | Automotive Upholstery, Built to Last";
  const description = "Professional automotive upholstery, restoration, repair, and custom interior work in the Dallas–Fort Worth area.";

  return {
    metadataBase,
    title,
    description,
    openGraph: { title, description, type: "website", images: [{ url: "/ajd-logo.jpg", width: 1254, height: 1254, alt: "AJD Upholstery logo" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/ajd-logo.jpg"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
