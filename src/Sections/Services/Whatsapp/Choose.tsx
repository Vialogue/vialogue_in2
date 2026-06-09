import React, { useEffect, useRef, useState } from "react";

const Choose: React.FC = () => {
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
      className={`relative bg-no-repeat bg-[-1000%] sm:bg-left transition-all duration-700 bg-[#DEDEF4] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: "url(/services/wapp/banner_one.png)",
        backgroundSize: "70%",
      }}
    >

      {/* Content */}
      <div className="relative px-4 md:px-40 py-20 sm:py-28">
        <div className="ml-auto max-w-2xl rounded-2xl">
          <h1 className="text-2xl sm:ml-30 md:text-4xl heading-two font-medium mb-10">
            Why Choose Vialogue WhatsApp Business API?
          </h1>
          <p className="text-lg sm:ml-30 md:text-2xl paragraph text-gray-700 leading-relaxed">
            Vialogue brings together template management, messaging flows, AI chatbot automation, live agent conversations, analytics, and compliance into one unified WhatsApp Business API platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
