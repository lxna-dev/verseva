"use client";

import { Suspense, lazy } from "react";
import InView from "@/animations/inview";
// Critical path imports - immediate load
import Header from "@/layout/header";
import Hero from "@/layout/hero";
import ShaderBackground from "@/shaders/background";
import Newsletter from "@/layout/newsletter";

// Lazy load below-the-fold components
const Services = lazy(() => import("@/layout/services"));
const AboutUs = lazy(() => import("@/layout/aboutus"));
const BookWithUs = lazy(() => import("@/layout/bookwithus"));

// Loading fallbacks for suspense
const SectionFallback = () => (
  <div className="flex h-64 w-full items-center justify-center p-12">
    <div className="h-12 w-12 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
  </div>
);

export default function Home() {
  return (
    <ShaderBackground>
      <div
        id="top"
        className="container m-auto flex flex-col items-center justify-center px-4"
      >
        <Header />

        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <InView>
            <Hero />
          </InView>
        </div>
      </div>

      <div id="services">
        <Suspense fallback={<SectionFallback />}>
          <InView>
            <Services />
          </InView>
        </Suspense>
      </div>

      {/* Case Study section temporarily hidden */}

      <div id="about-us">
        <Suspense fallback={<SectionFallback />}>
          <InView>
            <AboutUs />
          </InView>
        </Suspense>
      </div>

      {/* Insights section temporarily hidden */}

      {/* <div id="book-with-us">
        <Suspense fallback={<SectionFallback />}>
          <InView>
            <BookWithUs />
          </InView>
        </Suspense>
      </div> */}

      <div id="newsletter">
        <Suspense fallback={<SectionFallback />}>
          <InView>
            <Newsletter />
          </InView>
        </Suspense>
      </div>
    </ShaderBackground>
  );
}
