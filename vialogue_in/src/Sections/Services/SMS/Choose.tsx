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
      className={`relative py-16 sm:py-16 bg-contain sm:left bg-purple-100 bg-[-1040%] bg-no-repeat transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: "url(/services/sms/choose.png)",
      }}
    >

      {/* Content */}
      <div className="relative px-4 md:px-40 sm:py-16">
        <div className="max-w-2xl sm:max-w-xl backdrop-blur-md rounded-2xl p-0">
          <h1 className="text-2xl text-center sm:text-left heading-two md:text-4xl font-medium mb-10">
                      Why Choose Vialogue SMS APIs?
                    </h1>
          <p className="paragraph md:text-2xl text-gray-700 leading-relaxed">
            Vialogue SMS APIs enable enterprises and startups to integrate SMS
            messaging effortlessly into their applications, platforms, and
            workflows. Whether you are delivering time-sensitive OTPs, customer
            notifications, or large-scale campaigns, our infrastructure guarantees
            reliability, low latency, and regulatory compliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
