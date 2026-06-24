import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { ToastProvider } from "@/lib/toast-context";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://bdoutdoorlighting.com";
const SITE_NAME = "BD Outdoor Lighting";
const SITE_DESCRIPTION =
  "Landscaping, hardscaping, deck construction, and garden design in Kernersville, NC and the surrounding Triad — including Winston-Salem and High Point. We build the outdoor spaces you've always wanted.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Outdoor Lighting Design & Installation`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "landscaping",
    "hardscaping",
    "deck construction",
    "garden design",
    "garden building",
    "pressure washing",
    "lawn care",
    "patio installation",
    "retaining walls",
    "BD Outdoor Lighting",
    "landscaping Kernersville NC",
    "landscaping Winston-Salem NC",
    "landscaping High Point NC",
    "Triad landscaping",
    "Kernersville lawn care",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Outdoor Lighting Design & Installation`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/non-text-logo.png",
        width: 2000,
        height: 2000,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Outdoor Lighting Design & Installation`,
    description: SITE_DESCRIPTION,
    images: ["/non-text-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
