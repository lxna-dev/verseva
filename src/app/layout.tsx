import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";

// Lazy load components that aren't needed for initial render
const ClientProviders = dynamic(() => import("@/provider/client-providers"));

// Lazy load footer which appears below the fold
const FooterSection = dynamic(() => import("@/layout/footer"), {
  loading: () => <div className="h-24 w-full bg-black/20"></div>,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verseva | Elite Talent & Fractional Leadership",
  description:
    "Connect with elite Asian talent through our flexible Lean Teams, leadership, and recruitment services. Accelerate your business growth with specialized expertise that delivers measurable results globally.",
  keywords: [
    "Lean Teams",
    "Asian talent",
    "recruitment",
    "augmentation",
    "fractional leadership",
    "remote teams",
    "business growth",
    "specialized talent",
    "outsourcing",
  ],
  authors: [{ name: "Verseva" }],
  creator: "Verseva",
  publisher: "Verseva",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://verseva.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Verseva | Elite Talent & Fractional Leadership",
    description:
      "Connect with elite Asian talent through our flexible Lean Teams, leadership, and recruitment services that deliver measurable results.",
    url: "https://verseva.com",
    siteName: "Verseva",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Emblem_Negative.webp",
        width: 1200,
        height: 630,
        alt: "Verseva - Accelerate your growth with elite Asian talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verseva | Elite Talent & Fractional Leadership",
    description:
      "Accelerate your growth with elite Asian talent through flexible Lean Teams and specialized expertise.",
    images: ["/Emblem_Negative.webp"],
    creator: "@verseva",
  },
  verification: {
    google: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} max-w-full overflow-x-hidden antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
        <Toaster />
        <FooterSection />
      </body>
    </html>
  );
}
