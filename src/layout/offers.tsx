"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  FileText,
  Users,
  Zap,
  Target,
  Rocket,
} from "lucide-react";
import { useRouter } from "next/navigation";

const offers = [
  {
    id: "system-kit",
    title: "System Kit",
    subtitle: "Downsell/One-Time Payment",
    description:
      "Essential tools and processes to get you started with proven systems and implementation guidance.",
    features: [
      { icon: FileText, text: "Notion Template" },
      { icon: CheckCircle, text: "Standard Operating Procedures (SOPs)" },
      { icon: Zap, text: "Implementation Process (Video)" },
      { icon: Users, text: "Access to Group Call" },
    ],
    fulfillment: "5 Days Fulfillment",
    guarantee: "Refundable",
    variant: "default" as const,
    popular: false,
  },
  {
    id: "attraction-offer",
    title: "Attraction Offer",
    subtitle: "45 Days Fulfillment",
    description:
      "Comprehensive business development with personal branding and dedicated coaching support.",
    features: [
      { icon: Target, text: "Business Development & Systems" },
      { icon: Rocket, text: "Content Engine + Personal Brand Clarity" },
      { icon: Users, text: "1:1 Coaching Sessions" },
    ],
    fulfillment: "45 Days Fulfillment",
    guarantee: "Free service until it works",
    variant: "default" as const,
    popular: true,
  },
  {
    id: "core-offer",
    title: "Core Offer",
    subtitle: "90 Days Fulfillment",
    description:
      "Complete business transformation with dedicated team support and full content execution.",
    features: [
      { icon: Target, text: "Everything in Attraction Offer" },
      { icon: Users, text: "Team Setup & Deployment" },
      { icon: Zap, text: "Dedicated Success Concierge" },
      { icon: Rocket, text: "Content Execution" },
    ],
    fulfillment: "90 Days Fulfillment",
    guarantee: "Full service guarantee",
    variant: "default" as const,
    popular: false,
  },
];

export default function Offers() {
  const router = useRouter();

  return (
    <section className="px-4 py-16 font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance text-white md:text-4xl">
            Our Service Tiers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-pretty text-slate-100">
            Choose the perfect solution for your business growth journey. From
            essential tools to complete transformation.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className={`transition-all duration-300 hover:shadow-lg ${
                offer.popular ? "ring-primary scale-105 shadow-lg ring-2" : ""
              }`}
            >
              {offer.popular && (
                <Badge className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 transform">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="pb-4 text-center">
                <CardTitle className="text-foreground text-xl font-bold">
                  {offer.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-black">
                  {offer.subtitle}
                </CardDescription>
                <p className="mt-2 text-sm text-pretty text-black">
                  {offer.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <div className="space-y-3">
                  {offer.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <feature.icon className="mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-foreground text-sm">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Fulfillment & Guarantee */}
                <div className="border-border space-y-2 border-t pt-4 text-black">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-xs">{offer.fulfillment}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-xs">{offer.guarantee}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant={offer.variant}
                  className="mt-6 w-full cursor-pointer"
                  size="lg"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-white">
            Not sure which option is right for you?
          </p>
          <Button
            variant="outline"
            className="cursor-pointer"
            size="lg"
            onClick={() => router.push("/")}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
