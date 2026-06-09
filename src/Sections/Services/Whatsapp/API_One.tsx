import React, { useEffect, useRef, useState } from "react";

const API_One: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`py-0 md:pt-16 bg-gray-100 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Tag line */}
      {/* <div className="flex gap-2 text-md font-medium text-[#8C41F5] items-center mb-4 justify-center">
        <div className="h-[0.5px] w-10 bg-[#8C41F5]"></div>
        PLATFORM
        <div className="h-[0.5px] w-10 bg-[#8C41F5]"></div>
      </div> */}

          <h1 className="text-4xl font-medium heading-two text-center">
            Unified WhatsApp Messaging Platform Built to Scale Businesses
          </h1>

      {/* Content Section */}
      <div className="grid px-0 sm:px-40 py-16 grid-cols-1 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="flex justify-space">
          <img
            src="/services/wapp/api_one.png"
            alt="API Infrastructure"
            className="w-full max-w-md h-auto object-contain rounded-lg transform transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="rounded-xl transition-all duration-300">
          <br />
          <p className="text-gray-700 paragraph text-xl p-10 sm:text-2xl leading-7 sm:leading-relaxed text-justify">
            Vialogue is not just an API—it’s a complete WhatsApp engagement platform that helps businesses manage messaging end-to-end. From official WhatsApp onboarding, template creation, and message automation, to two-way support, analytics, and role-based access, Vialogue gives you everything you need to run high-performing WhatsApp communication from one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default API_One;