'use client';
export const dynamic = "force-static";

import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import CubeBackground from "@/Components/CubeBackground";
import Image from "next/image";

const services = [
  { title: "SMS", icon: "sms", href: "/login/sms" },
  { title: "WhatsApp", icon: "wp", href: "/login/whatsapp" },
  { title: "RCS", icon: "rcs", href: "/login/rcs" },
  { title: "Voice", icon: "voice", href: "/login/voice" },
];

const LoginPage: React.FC = () => {
  return (
    <div className="relative grid w-full min-h-screen bg-white overflow-hidden">
      <CubeBackground />

      {/* light overlay */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-10 px-4 sm:px-10 lg:px-20 py-10 lg:py-0">

        {/* LEFT CONTENT */}
        <div className="w-full max-w-xl text-center lg:text-left space-y-5">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/imgs/logo2.svg"
              width={160}
              height={40}
              alt="Logo"
              className="mb-6"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium leading-tight">
            Welcome <br className="hidden sm:block" /> Back
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto lg:mx-0">
            Choose the communication channel you want to access and continue
            your journey with us.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 pt-3">
            <Image src="/imgs/fb_icon.png" width={100} height={100} alt="img" className="w-8 h-8" />
            <Image src="/imgs/insta.png" width={100} height={100} alt="img" className="w-8 h-8" />
            <Image src="/imgs/li.png" width={100} height={100} alt="img" className="w-8 h-8" />
            <Image src="/imgs/x.png" width={100} height={100} alt="img" className="w-8 h-8" />
          </div>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="w-full max-w-md bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-medium text-center mb-1">
            Login
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 text-center mb-5">
            Select a service to continue
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => window.open(service.href)}
                className="
                  group flex flex-col items-center justify-center gap-2
                  rounded-xl bg-white border border-gray-200
                  py-5 sm:p-6
                  transition-all duration-300
                  hover:border-[#5D3FD3]
                  hover:bg-[#5D3FD3]/10
                  hover:-translate-y-0.5
                  hover:shadow-md
                  active:scale-95
                "
              >
                <Image
                  src={`/imgs/${service.icon}.png`}
                  width={60}
                  height={60}
                  alt={service.title}
                  className="transition-transform group-hover:scale-110"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#5D3FD3]">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          <p className="text-[11px] sm:text-xs text-center text-gray-500 mt-5">
            Secure access • Enterprise grade messaging
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
