"use client";

import Image from "next/image";
import React from "react";

import { useEffect, useState } from "react";

export default function AltHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 container m-auto mt-3 w-[calc(100%-1.5rem)] rounded-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-black/20 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container flex w-full justify-center px-4 py-3 md:px-10">
        {/* Left side - Logo */}
        <Image
          src="/Emblem_Negative.webp"
          alt="logo"
          width={40}
          height={40}
          className="shrink-0 md:h-[50px] md:w-[50px]"
        />
      </div>
    </div>
  );
}
