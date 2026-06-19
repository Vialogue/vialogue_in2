"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ScrollToTop() {
  const router = useRouter();
  const pathname = router.asPath;

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