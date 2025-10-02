import { Youtube, Instagram, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";

const Socials = [
  {
    name: "YouTube",
    href: "#",
    icon: Youtube,
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    name: "Discord",
    href: "#",
    icon: MessageCircle,
  },
];

const Links = [
  { title: "Back to Top", href: "#top" },
  { title: "Services", href: "#services" },
  { title: "About Us", href: "#about-us" },
  { title: "Insights", href: "#insights" },
  { title: "Contact", href: "#book-with-us" },
];

export default function FooterSection() {
  return (
    <section className="relative mt-20">
      {/* Main Footer Content */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center">
                <Image
                  src="/Emblem_Negative.webp"
                  alt="logo"
                  width={40}
                  height={40}
                />
                <span className="ml-3 text-xl font-bold text-white">
                  VERSEVA
                </span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/70">
                We connect you with elite talent for lean teams, leadership, and
                specialized recruitment that delivers measurable results for
                your global business.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Navigation</h3>
              <ul className="space-y-3">
                {Links.map(({ href, title }) => (
                  <li key={title}>
                    <a
                      href={href}
                      className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
              <div className="flex space-x-4">
                {Socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/20"
                  >
                    <Icon className="h-5 w-5 text-white/70 transition-colors duration-300 group-hover:text-red-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 bg-black/30 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-white/50">
              © 2025 Verseva. All rights reserved.
            </p>
            <div className="mt-2 flex space-x-6 md:mt-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
