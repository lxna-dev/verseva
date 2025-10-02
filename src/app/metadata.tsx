import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VERSEVA | Elite Talent & Fractional Teams",
  description:
    "Accelerate your business growth with elite talent. Our fractional teams, leadership, and recruitment services deliver measurable results for global companies.",
  keywords: [
    "fractional teams",
    "talent",
    "recruitment",
    "business growth",
    "fractional leadership",
    "remote teams",
    "talent augmentation",
    "specialized expertise",
  ],
  authors: [{ name: "Verseva" }],
  creator: "Verseva",
  publisher: "Verseva",
  openGraph: {
    title: "VERSEVA | Elite Talent & Fractional Teams",
    description:
      "Accelerate your growth with elite talent through flexible fractional teams that deliver measurable results globally.",
    url: "https://verseva.com",
    siteName: "Verseva",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://verseva.com/Emblem_Negative.webp",
        width: 1200,
        height: 630,
        alt: "Verseva - Elite Talent. Engineered Impact.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VERSEVA | Elite Talent. Engineered Impact.",
    description:
      "Accelerate your growth with elite talent through flexible fractional teams and specialized recruitment.",
    images: ["https://verseva.com/Emblem_Negative.webp"],
    creator: "@verseva",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "google-site-verification": "verification-code",
  },
  applicationName: "Verseva",
  referrer: "origin-when-cross-origin",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default metadata;
