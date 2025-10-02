import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VERSEVA | Complete Your Personal Brand Worksheet",
  description:
    "Complete your personal brand worksheet to gain clarity, understand your audience, and develop a strategic approach to your brand.",
  keywords: [
    "personal branding",
    "brand worksheet",
    "brand strategy",
    "audience clarity",
    "messaging",
    "brand vision",
  ],
  authors: [{ name: "VERSEVA" }],
  creator: "VERSEVA",
  openGraph: {
    title: "VERSEVA | Complete Your Personal Brand Worksheet",
    description:
      "Answer a few strategic questions to gain clarity for your brand and receive your personalized brand worksheet.",
    url: "https://verseva.com/journey",
    siteName: "VERSEVA",
    images: [
      {
        url: "https://verseva.com/Emblem_Negative.webp",
        width: 1200,
        height: 630,
        alt: "VERSEVA - Elite Talent. Engineered Impact.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Your Personal Brand Worksheet",
    description:
      "Answer a few strategic questions to gain clarity for your brand and receive your personalized worksheet.",
    images: ["https://verseva.com/Emblem_Negative.webp"],
    creator: "@verseva",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default metadata;
