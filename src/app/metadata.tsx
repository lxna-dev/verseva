import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VERSEVA | Elite Talent & Fractional Teams",
  description:
    "Accelerate your business growth with elite talent. Our fractional teams, leadership, and recruitment services deliver measurable results for global companies.",
  keywords: [
    "fractional teams",
    "talent solutions",
    "recruitment services",
    "business growth strategy",
    "fractional leadership",
    "remote teams",
    "talent augmentation",
    "specialized expertise",
    "strategy call booking",
    "explore talent solutions",
    "worksheet",
    "consulting services",
  ],
  authors: [{ name: "VERSEVA" }],
  creator: "VERSEVA",
  publisher: "VERSEVA",
  openGraph: {
    title: "VERSEVA | Elite Talent & Fractional Teams",
    description:
      "Accelerate your growth with elite talent through flexible fractional teams that deliver measurable results globally.",
    url: "https://verseva.com",
    siteName: "VERSEVA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://verseva.com/Emblem_Negative.webp",
        width: 1200,
        height: 630,
        alt: "VERSEVA - Elite Talent. Engineered Impact.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VERSEVA | Elite Talent. Engineered Impact.",
    description:
      "Get Your Free Worksheet | Book Strategy Call | Explore Talent Solutions | Accelerate your business with fractional teams.",
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
    canonical: "https://verseva.com",
    languages: {
      "en-US": "https://verseva.com",
    },
  },
  other: {
    "google-site-verification": "verification-code",
    "application-name": "VERSEVA",
    // Main links for SEO
    "main-explore-link": "https://verseva.com/explore",
    "main-book-call-link": "https://verseva.com/book-with-us",
    "main-journey-link": "https://verseva.com/journey",
    // JSON-LD structured data for better search results
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "VERSEVA",
      url: "https://verseva.com",
      logo: "https://verseva.com/Emblem_Negative.webp",
      sameAs: ["https://twitter.com/verseva"],
      potentialAction: [
        {
          "@type": "ViewAction",
          name: "Get Your Free Worksheet",
          target: "https://verseva.com/explore",
          url: "https://verseva.com/explore",
        },
        {
          "@type": "ViewAction",
          name: "Book Strategy Call",
          target: "https://verseva.com/book-with-us",
          url: "https://verseva.com/book-with-us",
        },
      ],
    }),
  },
  applicationName: "VERSEVA",
  referrer: "origin-when-cross-origin",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default metadata;
