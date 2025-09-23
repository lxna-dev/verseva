"use client";

import React from "react";
import RoutePrefetcher from "./route-prefetcher";

interface ClientProvidersProps {
  children: React.ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      <RoutePrefetcher />
      {children}
    </>
  );
}
