import React, { useEffect, useRef, useState } from "react";

const Why: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative h-fit py-10 mb-0 sm:bg-contain sm:h-140 bg-purple-100 sm:bg-right bg-[-1000%] bg-no-repeat transition-all duration-700 flex items-center ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: "url(./imgs/etc/2/my_bg.jpg)",
      }}
    >
      {/* Content */}
      <div className="relative px-4 md:px-40 py-6 md:py-16 sm:w-2/3">
        <div className="max-w-2xl backdrop-blur-md rounded-2xl">
          <h1 className="text-2xl text-center sm:text-left  md:text-3xl font-semibold mb-10">
            Why Integrations Matter
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Disconnected tools create: - manual work, delayed responses, data
            mismatch, poor customer experiences With Vialogue integrations,
            everything becomes unified.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
