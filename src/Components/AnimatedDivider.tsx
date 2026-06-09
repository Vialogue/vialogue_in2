"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedDividerProps {
  height?: number;
  color?: string;
  className?: string;
}

const AnimatedDivider: React.FC<AnimatedDividerProps> = ({
  height = 1,
  color = "#8B5CF6", // violet
  className = "",
}) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
          once: true, // animate only once
        },
      }
    );
  }, []);

  return (
    <div className={`sm:w-[300px] w-full overflow-hidden ${className}`}>
      <div
        ref={lineRef}
        style={{
          height,
          backgroundColor: color,
        }}
        className="w-full rounded-full"
      />
    </div>
  );
};

export default AnimatedDivider;