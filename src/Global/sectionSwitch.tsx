'use client';

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const links = [
  { id: "overview", label: "Overview" },
  { id: "platform", label: "Platform" },
  { id: "api-infra", label: "API Infra" },
  { id: "features", label: "Features" },
];

const SectionSwitcher = () => {
  const [active, setActive] = useState("overview");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".nav-link", {
        opacity: 0,
        y: 20,
        x: -20,
      });

      gsap.to(".nav-link", {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        100; // custom offset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setActive(id);
    }
  };

  return (
    <div
      ref={containerRef}
      className="grid sm:grid-cols-4 md:grid-cols-4 grid-cols-4 mb-0 justify-around gap-8 text-slate-800 font-semibold m-auto w-fit"
    >
      {links.map((item) => (
        <button
          key={item.id}
          onClick={() => handleScroll(item.id)}
          className={`nav-link relative pb-1.5 transition duration-300 cursor-pointer text-sm ${
            active === item.id ? "text-[#884CED]" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          {item.label}

          {active === item.id && (
            <span className="absolute left-0 bottom-0 h-[2.5px] w-full bg-[#884CED] rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
};

export default SectionSwitcher;