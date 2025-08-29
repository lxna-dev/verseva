"use client";

import dynamic from "next/dynamic";

const DynamicIframe = dynamic(
  () =>
    Promise.resolve(() => (
      <iframe
        src="https://calendly.com/verseva/discovery"
        className="h-[800px] w-full rounded-2xl border-0"
        allowFullScreen
        loading="lazy"
      />
    )),
  { ssr: false },
);

export default function BookWithUs() {
  return (
    <section id="book-with-us" className="relative scroll-mt-32 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
          <DynamicIframe />
        </div>
      </div>
    </section>
  );
}
