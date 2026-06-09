import React, { useEffect, useRef, useState } from "react";

const Compliances: React.FC = () => {
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
    <section
      ref={ref}
      className={`px-4 sm:px-40 py-16 bg-[#F8FAFF] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="">
        
        {/* Top Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold heading-two text-gray-900">
            Compliances
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto paragraph text-base sm:text-lg">
            Secure, regulation-ready messaging infrastructure designed for modern enterprise communication.
          </p>
        </div>

        {/* Main Two Section Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl">
              <img
                src="/services/sms/compliances.png"
                alt="Compliances"
                className="rounded-2xl h-[320px] max-h-[500px] sm:h-[500px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white shadow-lg rounded-3xl p-8 sm:p-10 md:p-12 border border-gray-100">
            <ul className="space-y-7 text-gray-700">
              
              <li>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Spam Risk & Content Validation
                </h3>
                <p className="paragraph text-base sm:text-lg leading-relaxed">
                  Pre-send checks identify spam keywords, content risks, and template mismatches before delivery.
                </p>
              </li>

              <li>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Compliance-Ready Messaging
                </h3>
                <p className="paragraph text-base sm:text-lg leading-relaxed">
                  Automatic DND filtering, template verification, and regulatory checks ensure worry-free campaigns.
                </p>
              </li>

              <li>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Enterprise Security & Control
                </h3>
                <p className="paragraph text-base sm:text-lg leading-relaxed">
                  Role-based access, audit trails, and advanced data protection for enterprise-grade operations.
                </p>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Compliances;