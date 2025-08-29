"use client";

import InView from "@/animations/inview";
import { Button } from "@/components/ui/button";
import BookWithUs from "@/layout/bookwithus";
import CaseStudy from "@/layout/case-study";
import Header from "@/layout/header";
import Hero from "@/layout/hero";
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

      <div id="case-studies" className="">
        <InView>
          <CaseStudy />
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
