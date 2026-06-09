'use client';

import React from "react";
import { MessageSquare, Phone, Radio, Send } from "lucide-react";

const features = [
  {
    key: "sms",
    title: "SMS",
    description:
      "Send instant, reliable text messages at scale for OTPs, alerts, and promotions.",
    icon: Send,
    gradient: "from-blue-200 via-blue-100 to-blue-50",
    button: "bg-blue-500 hover:bg-blue-600",
    img: "/sms.jpg"
  },
  {
    key: "whatsapp",
    title: "WhatsApp",
    description:
      "Engage customers with interactive two-way messaging using official APIs.",
    icon: MessageSquare,
    gradient: "from-green-200 via-green-100 to-green-50",
    button: "bg-green-500 hover:bg-green-600",
    img: "/whatsapp.png"
  },
  {
    key: "rcs",
    title: "RCS",
    description:
      "Deliver rich app-like messaging experiences with images and carousels.",
    icon: Radio,
    gradient: "from-purple-200 via-purple-100 to-purple-50",
    button: "bg-purple-500 hover:bg-purple-600",
    img: "/rcs.jpg"
  },
  {
    key: "voice",
    title: "Voice",
    description:
      "Automate personalized voice calls and scalable IVR systems.",
    icon: Phone,
    gradient: "from-pink-200 via-pink-100 to-pink-50",
    button: "bg-pink-500 hover:bg-pink-600",
    img: "/voice.png"
  },
];

const MessagingServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-medium text-gray-900 mb-4">
          Experience Vialogue&apos;s Services
        </h2>
        <p className="text-gray-600 mb-14">
          Through Live Demos
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className={`rounded-2xl p-6 bg-gradient-to-br ${item.gradient} shadow-md hover:shadow-xl transition-all duration-300`}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-gray-800" />
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="mb-4 rounded-xl overflow-hidden bg-white shadow">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Button */}
                <button
                  className={`w-full py-2 text-white rounded-lg transition ${item.button}`}
                >
                  Explore
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MessagingServicesSection;