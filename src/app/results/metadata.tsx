import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verseva | Your Personal Brand Profile Results",
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
  authors: [{ name: "Verseva" }],
  creator: "Verseva",
  openGraph: {
    title: "Verseva | Your Personal Brand Profile Results",
    description:
      "Access your personalized brand assessment results and tailored recommendations to grow your personal brand.",
    url: "https://verseva.com/results",
    siteName: "Verseva",
    images: [
      {
        url: "/worksheet/page1.webp",
        width: 1200,
        height: 630,
        alt: "Personal Brand Profile Results by Verseva",
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
    images: ["/worksheet/page1.webp"],
    creator: "@verseva",
  },
  robots: {
    index: false, // Don't index results page since it's personalized
    follow: true,
    nocache: true,
  },
};

export default metadata;
