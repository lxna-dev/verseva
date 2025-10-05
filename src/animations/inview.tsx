"use client";

import { useRef, useEffect, useState } from "react";

type InViewProps = {
  children: React.ReactNode;
};

export default function InView({ children }: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Skip animation during initial load for better performance
    // This helps reduce Time to Interactive and Total Blocking Time
    setIsVisible(true);

    // Initialize intersection observer for subsequent scrolling
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: "0px 0px -25% 0px", threshold: 0.1 },
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(50px)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
