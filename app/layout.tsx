import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const description =
  "Hardik Pampaniya is a Software Engineer and Full-Stack Developer building modern web applications and backend solutions with React, Java, and Spring Boot.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hardik Pampaniya — Software Engineer & Full-Stack Developer",
  description,
  keywords: [
    "Hardik Pampaniya",
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Java Developer",
    "Spring Boot",
  ],
  openGraph: {
    title: "Hardik Pampaniya — Software Engineer",
    description,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Hardik Pampaniya — Software Engineer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
