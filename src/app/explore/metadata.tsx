import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VERSEVA | Personal Brand Worksheet - Gain Clarity for Your Brand",
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
  authors: [{ name: "VERSEVA" }],
  creator: "VERSEVA",
  openGraph: {
    title: "VERSEVA | Personal Brand Worksheet - Gain Clarity for Your Brand",
    description:
      "This free worksheet helps you define your vision, understand your audience, and sharpen your messaging so your brand grows with purpose.",
    url: "https://verseva.com/explore",
    siteName: "VERSEVA",
    images: [
      {
        url: "https://verseva.com/Emblem_Negative.webp",
        width: 1200,
        height: 630,
        alt: "Verseva - Elite Talent. Engineered Impact.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Personal Brand Worksheet by VERSEVA",
    description:
      "Define your vision, understand your audience, and sharpen your messaging.",
    images: ["https://verseva.com/Emblem_Negative.webp"],
    creator: "@verseva",
  },
};

export default metadata;
