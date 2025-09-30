import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verseva | Complete Your Personal Brand Worksheet",
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
  authors: [{ name: "Verseva" }],
  creator: "Verseva",
  openGraph: {
    title: "Verseva | Complete Your Personal Brand Worksheet",
    description:
      "Answer a few strategic questions to gain clarity for your brand and receive your personalized brand worksheet.",
    url: "https://verseva.com/journey",
    siteName: "Verseva",
    images: [
      {
        url: "/worksheet/page1.webp",
        width: 1200,
        height: 630,
        alt: "Personal Brand Worksheet by Verseva",
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
    images: ["/worksheet/page1.webp"],
    creator: "@verseva",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default metadata;
