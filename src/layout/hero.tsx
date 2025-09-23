"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [hasResults, setHasResults] = useState(false);
  const [destination, setDestination] = useState("/explore");
  const [buttonText, setButtonText] = useState("Get Your Free Worksheet");

  useEffect(() => {
    const storedResults = localStorage.getItem("surveyResults");
    const hasStoredResults = !!storedResults;
    setHasResults(hasStoredResults);
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
          ✨ Verseva | Strategic Business Consulting
        </span>
      </div>

      <h1 className="relative px-4 font-sans text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Enter The <br />
        <span className="instrument font-medium italic">Next Stage</span>
      </h1>

      <p className="m-auto mt-4 max-w-xl px-4 text-sm text-white/80 sm:text-base">
        Expert business consulting that turns your vision into measurable
        results. We provide strategic planning, operational optimization, and
        growth acceleration services to scale your business faster.
      </p>

      <div className="flex flex-col justify-center gap-3 px-4 pt-8 font-sans sm:flex-row">
        <Link href={destination} prefetch={false}>
          <Button className="w-full cursor-pointer rounded-full px-6 py-4 font-light hover:scale-105 sm:w-auto sm:px-7 sm:py-6">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
