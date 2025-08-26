"use client";

import InView from "@/animations/inview";
import { Button } from "@/components/ui/button";
import BookWithUs from "@/layout/bookwithus";
import CaseStudy from "@/layout/case-study";
import Header from "@/layout/header";
import Services from "@/layout/services";
import ShaderBackground from "@/shaders/background";
import Image from "next/image";
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

        <div className="-mt-8 flex h-screen flex-col items-center justify-center text-center md:-mt-16">
          <InView>
            {/* Glass badge */}
            <div className="relative mb-4 inline-flex items-center rounded-full bg-white/5 px-3 py-1 backdrop-blur-sm">
              <div className="absolute top-0 right-1 left-1 h-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative z-10 text-xs font-light text-white/90 sm:text-sm">
                ✨ Verseva | Strategic Business Consulting
              </span>
            </div>

            {/* Hero Section */}

            <h1 className="relative px-4 font-sans text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="instrument font-medium italic">Transform </span>
              Your Business. <br />
              Accelerate Growth.
            </h1>

            <p className="m-auto mt-4 max-w-xl px-4 text-sm text-white/80 sm:text-base">
              {/* Turn your ideas into a growth engine through strategy, content,
              and execution.  */}
              Expert business consulting that turns your vision into measurable
              results. We provide strategic planning, operational optimization,
              and growth acceleration services to scale your business faster.
            </p>

            <div className="flex flex-col justify-center gap-3 px-4 pt-8 font-sans sm:flex-row">
              <Button
                onClick={() => router.push("/journey")}
                className="w-full cursor-pointer rounded-full px-6 py-4 font-light hover:scale-105 sm:w-auto sm:px-7 sm:py-6"
              >
                Start Your Journey
              </Button>
            </div>
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
