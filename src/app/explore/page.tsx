"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AltHeader from "@/layout/alt-header";
import ShaderBackground from "@/shaders/background";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Explore() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Check if form is valid (both fields filled and email format correct)
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);
    const isValidName = formData.full_name.trim().length > 0;

    setIsValid(isValidName && isValidEmail);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!isValid) return;

    // Save to localStorage
    localStorage.setItem("userFormData", JSON.stringify(formData));

    // Set submitted state for visual feedback
    setSubmitted(true);

    // Redirect to journey page
    setTimeout(() => {
      router.push("/journey");
    }, 500);
  };

  return (
    <div className="container m-auto w-full justify-center font-sans">
      <ShaderBackground>
        <AltHeader />
        <div className="container m-auto flex w-full items-center justify-center align-middle">
          <div className="w-full">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
              <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  {/* Left Content */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h1 className="text-foreground text-4xl leading-tight font-bold text-balance sm:text-5xl lg:text-6xl">
                        Before you build a business, start with clarity.
                      </h1>
                      <p className="text-foreground mb-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
                        This free Personal Brand Worksheet helps you define your
                        vision, understand your audience, and sharpen your
                        messaging so your brand grows with purpose.
                      </p>

                      {/* Form */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="full_name"
                            className="font-bold text-white"
                          >
                            Full Name
                          </Label>
                          <Input
                            id="full_name"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="border-white/10 bg-white/20 text-white placeholder:text-white/50"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="font-bold text-white"
                          >
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            className="border-white/10 bg-white/20 text-white placeholder:text-white/50"
                          />
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Button
                          size="lg"
                          onClick={handleSubmit}
                          disabled={!isValid || submitted}
                          className={`bg-primary text-primary-foreground w-full rounded-xl !px-12 py-6 text-lg font-semibold transition-all duration-300 md:w-auto ${!isValid ? "cursor-not-allowed opacity-50" : "hover:bg-primary/90 hover:scale-105"} ${submitted ? "bg-green-600" : ""}`}
                        >
                          {submitted ? (
                            <>
                              <CheckCircle className="mr-2 h-5 w-5" />
                              Redirecting...
                            </>
                          ) : (
                            <>
                              Get Your Free Worksheet
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </div>

                      <div className="mt-3 flex items-center text-xs text-white/60">
                        <CheckCircle className="mr-1.5 h-3.5 w-3.5 text-white" />
                        <span>
                          We respect your privacy and will never spam you
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex h-[600px] w-full items-center justify-center">
                    <div className="relative h-[480px] w-[380px] perspective-[1200px]">
                      {/* Left/Back Card */}
                      <div className="absolute top-0 left-0 z-10 h-full w-full translate-x-[-45px] translate-y-[-20px] rotate-[-8deg] transform">
                        <div className="overflow-hidden rounded-lg">
                          <div className="relative h-full w-full overflow-hidden">
                            <Image
                              src="/worksheet/page2.webp"
                              alt="Worksheet Page 2"
                              width={500}
                              height={647}
                              className="blur-[1.5px] brightness-95 contrast-95 filter transition-all duration-300"
                              style={{ objectFit: "cover" }}
                            />
                            <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]"></div>
                          </div>
                        </div>
                      </div>

                      {/* Middle/Front Card (Featured) */}
                      <div className="absolute top-0 left-0 z-30 h-full w-full transform">
                        <div
                          className="h-full w-full overflow-hidden rounded-lg shadow-xl"
                          style={{ aspectRatio: "8.5/11" }}
                        >
                          <div className="relative h-full w-full">
                            <Image
                              src="/worksheet/page1.webp"
                              alt="Worksheet Page 1"
                              width={500}
                              height={647}
                              className="blur-[0.5px] brightness-105 contrast-105 filter transition-all duration-300"
                              style={{ objectFit: "cover" }}
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                          </div>
                        </div>
                        <div className="bg-primary/20 absolute inset-0 -z-10 rounded-lg blur-md"></div>
                      </div>

                      {/* Right/Back Card */}
                      <div className="absolute top-0 left-0 z-20 h-full w-full translate-x-[45px] translate-y-[-20px] rotate-[8deg] transform">
                        <div
                          className="h-full w-full overflow-hidden rounded-lg"
                          style={{ aspectRatio: "8.5/11" }}
                        >
                          <div className="relative h-full w-full">
                            <Image
                              src="/worksheet/page3.webp"
                              alt="Worksheet Page 3"
                              width={500}
                              height={647}
                              className="blur-[1.5px] brightness-95 contrast-95 filter transition-all duration-300"
                              style={{ objectFit: "cover" }}
                            />
                            <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/20 absolute -top-16 right-16 h-40 w-40 rounded-full blur-xl"></div>
                    <div className="bg-accent/20 absolute -bottom-12 left-8 h-48 w-48 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div></div>
            </section>

            {/* Section 3 - What's Inside */}
            <section className="my-24 bg-black/40 py-20 backdrop-blur-sm">
              <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 max-w-4xl text-center">
                  <h2 className="mb-6 bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                    What&apos;s Inside
                  </h2>
                  <p className="mb-8 text-lg text-white/80">
                    Everything you need to transform your expertise into a
                    powerful brand
                  </p>
                </div>

                <div className="mx-auto max-w-5xl">
                  <p className="mb-8 text-center text-xl font-medium text-white">
                    With this worksheet, you&apos;ll:
                  </p>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex items-start rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                      <div className="bg-primary/20 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                        <span className="text-lg font-semibold">1</span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-white">
                          Find your North Star
                        </h3>
                        <p className="text-white/80">
                          Define the mission and message behind your brand.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                      <div className="bg-primary/20 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                        <span className="text-lg font-semibold">2</span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-white">
                          Get audience clarity
                        </h3>
                        <p className="text-white/80">
                          Uncover their real problems, myths, and what truly
                          moves them.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                      <div className="bg-primary/20 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                        <span className="text-lg font-semibold">3</span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-white">
                          Sharpen your voice
                        </h3>
                        <p className="text-white/80">
                          Choose the tone, energy, and narrative your brand
                          carries.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                      <div className="bg-primary/20 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                        <span className="text-lg font-semibold">4</span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-white">
                          Build your skill stack
                        </h3>
                        <p className="text-white/80">
                          Identify the habits and systems that multiply your
                          execution.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:col-span-2">
                      <div className="bg-primary/20 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                        <span className="text-lg font-semibold">5</span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-white">
                          Turn insights into action
                        </h3>
                        <p className="text-white/80">
                          Use AI-powered prompts for content and systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 - Who It's For */}
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                  <div className="flex flex-wrap items-center">
                    <div className="md:w-2/5">
                      <div className="relative mb-6">
                        <div className="p-8 text-center">
                          <h3 className="mb-4 text-3xl font-bold text-white">
                            Who It&apos;s For
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 md:w-3/5">
                      <p className="text-xl font-medium text-white">
                        This is for you if:
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/20 mt-1 rounded-full p-1">
                            <svg
                              className="text-primary h-3 w-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                            </svg>
                          </div>
                          <p className="text-white/80">
                            You&apos;re a consultant, coach, or professional
                            ready to step into a brand.
                          </p>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/20 mt-1 rounded-full p-1">
                            <svg
                              className="text-primary h-3 w-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                            </svg>
                          </div>
                          <p className="text-white/80">
                            You want to turn skill into a business but feel
                            unclear where to start.
                          </p>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/20 mt-1 rounded-full p-1">
                            <svg
                              className="text-primary h-3 w-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                            </svg>
                          </div>
                          <p className="text-white/80">
                            You know your expertise is valuable but need help
                            packaging it.
                          </p>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/20 mt-1 rounded-full p-1">
                            <svg
                              className="text-primary h-3 w-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                            </svg>
                          </div>
                          <p className="text-white/80">
                            You want to show up online with consistency and
                            confidence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 - Why It Matters */}
            <section className="my-10 py-20">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                  <div className="relative">
                    <div className="bg-primary/10 absolute -top-10 -left-10 h-40 w-40 rounded-full blur-3xl"></div>
                    <div className="bg-accent/10 absolute -right-10 -bottom-10 h-40 w-40 rounded-full blur-3xl"></div>

                    <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                      <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
                        Why It Matters
                      </h2>

                      <p className="mb-8 text-lg leading-relaxed text-white/80">
                        Most professionals fail to make the leap into business
                        because they skip the inner work. They try to &quot;just
                        post more content&quot; or &quot;sell more offers&quot;
                        without clarity. This worksheet is the step that
                        prevents wasted effort — and sets you up to scale with
                        purpose.
                      </p>

                      <div className="mt-8 border-t border-white/10 pt-8">
                        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                          <div className="flex items-center space-x-2">
                            <div className="h-4 w-4 rounded-full bg-green-500"></div>
                            <span className="text-white/90">
                              From confusion to clarity
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="bg-primary h-4 w-4 rounded-full"></div>
                            <span className="text-white/90">
                              From random to strategic
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="bg-accent h-4 w-4 rounded-full"></div>
                            <span className="text-white/90">
                              From struggle to system
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 text-center">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full !px-8 py-6 text-lg font-semibold"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Download Free Worksheet
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </ShaderBackground>
    </div>
  );
}
