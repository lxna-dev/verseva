"use client";

import type React from "react";

import { memo } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

const ShaderBackground = memo(function ShaderBackground({
  children,
}: ShaderBackgroundProps) {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
        {/* Simplified SVG Filters - Always present but lightweight */}
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

        {/* Background Shaders - Reduced complexity for better performance */}
        <MeshGradient
          className="absolute inset-0 h-full w-full"
          colors={["#000000", "#ff3c38", "#353535", "#1a0000"]}
          speed={0.08}
        />
        {/* Second shader always present but with very low opacity to maintain consistency */}
        <MeshGradient
          className="absolute inset-0 h-full w-full opacity-15"
          colors={["#000000", "#303030", "#ff3c38"]}
          speed={0.04}
        />
      </div>

      <div className="relative z-0 min-h-screen">{children}</div>
    </>
  );
});

export default ShaderBackground;
