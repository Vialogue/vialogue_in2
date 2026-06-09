"use client";

import { useEffect, useState } from "react";

interface PageLoaderProps {
  fout: boolean;
}

export default function PageLoader({ fout = false }: PageLoaderProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
   
    if(fout) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFadeOut(true);
    }
  }, [fout]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm transition-opacity duration-700 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-14 h-14 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
}