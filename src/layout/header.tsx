"use client";

import { Button } from "@/components/ui/button";
import DiscordAltIcon from "@/icons/Discord";
import TwitterXIcon from "@/icons/X";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { title } from "process";
import React from "react";

import { useEffect, useState } from "react";

const Links = [
  { title: "Back to Top", href: "#top" },
  { title: "Services", href: "#services" },
  { title: "Case Study", href: "#case-study" },
  { title: "Contact", href: "#book-with-us" },
];

const Socials = [
  {
    title: "Twitter",
    icon: <TwitterXIcon />,
    href: "https://x.com/xhunnanthony",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/xhunnanthony",
  },
  {
    title: "Discord",
    icon: <DiscordAltIcon />,
    href: "https://discord.com/invite/qv9KgMzhMN",
  },
  {
    title: "Youtube",
    icon: <Youtube />,
    href: "https://www.youtube.com/@xhunn",
  },
];

export default function Header() {
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
      className={`fixed top-0 right-0 left-0 z-50 box-border px-3 py-3 transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-black/20 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="">
        <div className="container mx-auto flex justify-between px-4 py-3 md:px-10">
          {/* Left side - Logo */}
          <Image
            src="/Emblem_Negative.webp"
            alt="logo"
            width={40}
            height={40}
            className="shrink-0 md:h-[50px] md:w-[50px]"
          />

          {/* Center - Links (Hidden on mobile) */}
          <div className="hidden flex-row items-center gap-6 rounded-full font-sans lg:flex">
            {Links.map((item) => (
              <div
                key={item.title}
                onClick={() => {
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="rounded-full px-3 py-1 text-sm font-light text-white/80 transition-all duration-200 hover:cursor-pointer hover:bg-white/10 hover:text-white"
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Right side - socials, email, button */}
          <div className="flex flex-row items-center gap-2 md:gap-6">
            {/* Socials (Hidden on mobile) */}
            <div className="hidden flex-row gap-3 font-sans md:flex">
              {Socials.map((item) => (
                <div
                  key={item.title}
                  className="rounded-full px-3 py-2 text-sm font-light text-white/80 transition-all duration-200 hover:cursor-pointer hover:bg-white/10 hover:text-white"
                  onClick={() => {
                    window.open(item.href, "_blank");
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>

            {/* Contact (Hidden on mobile) */}
            <div className="text-md hidden font-light text-white/80 xl:block">
              Get in touch: hello@verseva.com
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => {
                document.getElementById("book-with-us")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              className="cursor-pointer rounded-lg px-3 py-3 font-sans text-xs font-light transition-transform duration-300 hover:scale-105 md:px-5 md:py-5 md:text-sm"
            >
              <span className="hidden sm:inline">Reserve A Strategy Call</span>
              <span className="sm:hidden">Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
