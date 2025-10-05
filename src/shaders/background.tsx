"use client";

import type React from "react";
import { memo, useState, useEffect } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

const ShaderBackground = memo(function ShaderBackground({
  children,
}: ShaderBackgroundProps) {
  // Track if we're on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Set up the gradient style for mobile
  const gradientStyle = {
    background:
      "linear-gradient(135deg, #000000 0%, #1a0000 50%, #350505 100%)",
  };

  // Check if we're on mobile when component mounts
  useEffect(() => {
    // Create media query to detect mobile devices
    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

    // Set initial value
    setIsMobile(mobileMediaQuery.matches);

    // Update when screen size changes
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Add listener for screen size changes
    mobileMediaQuery.addEventListener("change", handleMediaChange);

    // Clean up
    return () => {
      mobileMediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
        {/* SVG Filters - Always present but lightweight */}
        <svg className="absolute inset-0 h-0 w-0">
          <defs>
            <filter
              id="glass-effect"
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
            >
              <feTurbulence
                baseFrequency="0.002"
                numOctaves="1"
                result="noise"
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.1" />
            </filter>
          </defs>
        </svg>

        {isMobile ? (
          // Mobile: Static gradient background
          <>
            <div
              className="absolute inset-0 h-full w-full"
              style={gradientStyle}
            />
            <div className="absolute inset-0 h-full w-full bg-[url('/noise-pattern.png')] bg-repeat opacity-20"></div>
          </>
        ) : (
          // Desktop: WebGL shader background
          <>
            <MeshGradient
              className="absolute inset-0 h-full w-full"
              colors={["#000000", "#ff3c38", "#353535", "#1a0000"]}
              speed={0.08}
            />
            <MeshGradient
              className="absolute inset-0 h-full w-full opacity-15"
              colors={["#000000", "#303030", "#ff3c38"]}
              speed={0.04}
            />
          </>
        )}
      </div>

      <div className="relative z-0 min-h-screen">{children}</div>
    </>
  );
});

export default ShaderBackground;
