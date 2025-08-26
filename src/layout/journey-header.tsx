"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { title } from "process";
import React from "react";

import { useEffect, useState } from "react";

export default function JourneyHeader() {
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

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
      <div className="container flex w-full justify-between px-4 py-3 md:px-10">
        {/* Left side - Logo */}
        <Image
          src="/Emblem_Negative.webp"
          alt="logo"
          width={40}
          height={40}
          className="shrink-0 md:h-[50px] md:w-[50px]"
        />

        {/* Right side - socials, email, button */}
        <div className="flex flex-row items-center gap-2 md:gap-6">
          {/* Contact (Hidden on mobile) */}
          <div className="text-md hidden font-light text-white/80 xl:block">
            Get in touch: email@example.com
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => router.push("/")}
            className="cursor-pointer rounded-lg px-3 py-3 font-sans text-xs font-light transition-transform duration-300 hover:scale-105 md:px-5 md:py-5 md:text-sm"
          >
            <span className="hidden sm:inline">Reserve A Strategy Call</span>
            <span className="sm:hidden">Contact</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
