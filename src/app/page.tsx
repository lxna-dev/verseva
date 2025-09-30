"use client";

import InView from "@/animations/inview";
import { Button } from "@/components/ui/button";
import AboutUs from "@/layout/aboutus";
import BookWithUs from "@/layout/bookwithus";
// Case Study temporarily hidden as requested
// import CaseStudy from "@/layout/case-study";
import Header from "@/layout/header";
import Hero from "@/layout/hero";
import Insights from "@/layout/insights";
import Services from "@/layout/services";
import ShaderBackground from "@/shaders/background";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
        <InView>
          <Services />
        </InView>
      </div>

      {/* Case Study section temporarily hidden
      <div id="case-studies" className="">
        <InView>
          <CaseStudy />
        </InView>
      </div>
      */}

      <div id="about-us">
        <InView>
          <AboutUs />
        </InView>
      </div>

      <div id="insights">
        <InView>
          <Insights />
        </InView>
      </div>

      <div id="book-with-us">
        <InView>
          <BookWithUs />
        </InView>
      </div>
    </ShaderBackground>
  );
}
