"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Hero() {
  // Removed unused hasResults state
  const [destination, setDestination] = useState("/explore");
  const [buttonText, setButtonText] = useState("Get Your Free Worksheet");

  useEffect(() => {
    const storedResults = localStorage.getItem("surveyResults");
    const hasStoredResults = !!storedResults;
    // No longer setting hasResults as it's not used
    setDestination(hasStoredResults ? "/results" : "/explore");
    setButtonText(
      hasStoredResults ? "View Your Results" : "Get Your Free Worksheet",
    );
  }, []);

  return (
    <div>
      <div className="relative mb-4 inline-flex items-center rounded-full bg-white/5 px-3 py-1 backdrop-blur-sm">
        <div className="absolute top-0 right-1 left-1 h-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="relative z-10 text-xs font-light text-white/90 sm:text-sm">
          ✨ Verseva | Fractional Teams That Accelerate Growth
        </span>
      </div>

      <h1 className="relative px-4 font-sans text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="italic">Elite</span>{" "}
        <span className="font-bold">Talent</span>. <br />
        <span className="italic">Engineered</span>{" "}
        <span className="font-bold">Impact</span>
      </h1>

      <p className="m-auto mt-4 max-w-xl px-4 text-sm text-white/80 sm:text-base">
        Fractional teams that accelerate your growth. We connect you with elite
        Asian talent for fractional teams, leadership, and specialized
        recruitment that delivers measurable results for your global business.
      </p>

      <div className="flex flex-col justify-center gap-3 px-4 pt-8 font-sans sm:flex-row">
        <Link href={destination} prefetch={false}>
          <Button className="w-full cursor-pointer rounded-full px-6 py-4 font-light hover:scale-105 sm:w-auto sm:px-7 sm:py-6">
            {buttonText}
          </Button>
        </Link>

        <Link
          href="https://verseva.notion.site/26a35affee8380d1b9f5dbd485ed32a0?pvs=105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full cursor-pointer rounded-full bg-white px-6 py-4 font-light text-black hover:scale-105 hover:bg-white/90 sm:w-auto sm:px-7 sm:py-6">
            Join The Team
          </Button>
        </Link>
      </div>
    </div>
  );
}
