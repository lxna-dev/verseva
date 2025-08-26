"use client";

import { Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CaseStudy() {
  return (
    <section id="case-study" className="overflow-hidden px-4 py-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video/Image Side */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent backdrop-blur-sm">
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="/professional-business-consultant-in-modern-office-.png"
                  alt="Case Study Video"
                  className="h-full w-full object-cover opacity-80"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 group-hover:bg-black/20">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500 shadow-2xl shadow-red-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-500/70">
                    <Play
                      className="ml-1 h-8 w-8 text-white"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Video Info */}
              <div className="bg-gradient-to-r from-red-500/5 to-transparent p-6">
                <div className="mb-2 flex items-center gap-3">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-red-500" />
                  <span className="text-sm font-medium text-red-400">
                    Case Study
                  </span>
                </div>
                <h3 className="font-semibold text-white">
                  Personal Brand System Design
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  How we built a scalable brand framework
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-red-500/10 blur-xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-red-600/5 blur-2xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Quote Icon */}
            <div className="relative">
              <Quote className="absolute -top-4 -left-2 h-16 w-16 text-red-500/30" />
              <div className="pl-12">
                <span className="text-sm font-medium tracking-wider text-red-400 uppercase">
                  Success Story
                </span>
              </div>
            </div>

            {/* Main Quote */}
            <div className="space-y-6">
              <h2 className="text-4xl leading-tight font-bold text-white lg:text-5xl">
                Before helping anyone else, we spent months designing a{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  personal brand system
                </span>{" "}
                that could scale sustainably, even without hype.
              </h2>

              <p className="text-lg leading-relaxed text-gray-300">
                This case study reveals the exact framework we developed
                internally before taking on any clients.
              </p>
            </div>

            {/* Stats
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">$2M+</div>
                <div className="text-sm text-gray-400">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">18 Months</div>
                <div className="text-sm text-gray-400">Development Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">Zero</div>
                <div className="text-sm text-gray-400">Paid Advertising</div>
              </div>
            </div> */}

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                className="text-md cursor-pointer rounded-full p-6 font-sans font-light"
                variant="default"
              >
                View Complete Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
