import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verseva | Personal Brand Worksheet - Gain Clarity for Your Brand",
  description:
    "Free Personal Brand Worksheet that helps you define your vision, understand your audience, and sharpen your messaging so your brand grows with purpose.",
  keywords: [
    "personal branding",
    "brand worksheet",
    "brand clarity",
    "personal brand",
    "brand vision",
    "audience clarity",
    "business growth",
  ],
  authors: [{ name: "Verseva" }],
  creator: "Verseva",
  openGraph: {
    title: "Verseva | Personal Brand Worksheet - Gain Clarity for Your Brand",
    description:
      "This free worksheet helps you define your vision, understand your audience, and sharpen your messaging so your brand grows with purpose.",
    url: "https://verseva.com/explore",
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
    title: "Free Personal Brand Worksheet by Verseva",
    description:
      "Define your vision, understand your audience, and sharpen your messaging.",
    images: ["/worksheet/page1.webp"],
    creator: "@verseva",
  },
};

export default metadata;
