import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const list = [
  {
    title: "AI Chatbot Support",
    description:
      "Automate customer conversations using an AI chatbot that instantly answers FAQs, provides support, qualifies leads, and shares product/service details on WhatsApp—available 24/7.",
    img: "/services/wapp/cwc/img1.png",
  },
  {
    title: "Live Agent Support (Human Assistance)",
    description:
      "Enable customers to connect with real agents using a shared WhatsApp team inbox—manage escalations, resolve complex queries, and improve satisfaction with personalized support.",
    img: "/services/wapp/cwc/img2.png",
  },
  {
    title: "Promotions & Marketing Botss",
    description:
      "Run compliant WhatsApp campaigns for offers, product launches, festival announcements, and customer engagement updates.",
    img: "/services/wapp/cwc/img3.png",
  },
  {
    title: "Transactional Notifications",
    description:
      "Automate alerts for order updates, payment confirmations, delivery notifications, appointment reminders, invoices, and service alerts.",
    img: "/services/wapp/cwc/img4.png",
  },
  {
    title: "Lead Generation & Sales Conversation",
    description:
      "Capture and convert leads using WhatsApp follow-ups, product catalogs, quick replies, and interactive CTA buttons.",
    img: "/services/wapp/cwc/img5.png",
  },
  {
    title: "Feedback & Surveys",
    description:
      "Collect ratings and customer feedback using WhatsApp surveys to improve service quality and overall satisfaction.",
    img: "/services/wapp/cwc/img6.png",
  },
];

const CWC: React.FC = () => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Auto switch logic
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    startAutoSwitch();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoSwitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % list.length);
    }, 3000); // change every 3 seconds
  };

  const stopAutoSwitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleClick = (index: number) => {
    setActive(index);
    startAutoSwitch(); // restart timer after click
  };

  return (
    <div
      ref={ref}
      className={`px-6 md:px-20 py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-medium heading-two mb-10 text-center">
        Real Business Use Cases for WhatsApp Business API
      </h1>

      <div
        className="grid md:grid-cols-2 gap-10 items-start bg-[#FFF3F3] p-1 md:p-10 rounded-xl"
        onMouseEnter={stopAutoSwitch}
        onMouseLeave={startAutoSwitch}
      >
        {/* Left List */}
        <div className="bg-gray-100 h-full rounded-xl shadow p-4 space-y-4">
          {list.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`p-4 cursor-pointer transition-all ${
                active === index
                  ? "bg-[#D9BEFF] rounded-lg"
                  : "hover:bg-gray-200"
              }`}
            >
              <h2 className="text-xl font-medium">{item.title}</h2>
            </div>
          ))}
        </div>

        {/* Right Content (Auto Changes) */}
        <div className="rounded-xl p-3 md:p-0">
          <h1 className="text-2xl font-medium">
            {list[active].title}
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            {list[active].description}
          </p>

          <Image
            src={list[active].img}
            alt={list[active].title}
            className="mt-6 w-full object-contain rounded-lg"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default CWC;