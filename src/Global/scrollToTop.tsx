"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    requestAnimationFrame(() => {
      const navElement = document.getElementById("nav");
      if (navElement) {
        navElement.scrollIntoView();
      }
    });
  }, [pathname]);

  return null;
}