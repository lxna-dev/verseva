"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    const routesToPrefetch = ["/", "/journey", "/results", "/explore"];

    routesToPrefetch.forEach((route) => {
      router.prefetch(route);
    });
  }, [router]);

  return null;
}
