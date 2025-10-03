import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VERSEVA | Your Personal Brand Profile Results",
  description:
    "View your personalized brand profile results based on your worksheet responses. Get tailored recommendations and next steps for your brand journey.",
  keywords: [
    "brand profile",
    "personalized results",
    "brand assessment",
    "personal branding",
    "brand strategy",
    "brand growth",
  ],
  authors: [{ name: "VERSEVA" }],
  creator: "VERSEVA",
  openGraph: {
    title: "VERSEVA | Your Personal Brand Profile Results",
    description:
      "Access your personalized brand assessment results and tailored recommendations to grow your personal brand.",
    url: "https://verseva.com/results",
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
    title: "Your Personal Brand Profile Results",
    description:
      "Access your personalized brand assessment results and tailored recommendations to grow your personal brand.",
    images: ["https://verseva.com/Emblem_Negative.webp"],
    creator: "@verseva",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default metadata;
