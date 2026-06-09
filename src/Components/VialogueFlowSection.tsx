'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  MessageSquare,
  MessageCircle,
  Radio,
  Phone,
} from "lucide-react";

const DURATION = 3;

const channels = [
  {
    id: "sms",
    label: "SMS",
    icon: MessageSquare,
    color: "text-blue-500",
    title: "Instant SMS Alerts",
    desc: "Send OTPs, alerts, and transactional messages instantly worldwide.",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    color: "text-green-500",
    title: "WhatsApp Business Messaging",
    desc: "Engage customers using rich WhatsApp templates and automation.",
  },
  {
    id: "rcs",
    label: "RCS",
    icon: Radio,
    color: "text-orange-500",
    title: "Rich Communication (RCS)",
    desc: "Deliver interactive cards, buttons and branded messages.",
  },
  {
    id: "voice",
    label: "Voice",
    icon: Phone,
    color: "text-purple-500",
    title: "Voice API",
    desc: "Automated voice calls, reminders and IVR(Interactive Voice Response) systems.",
  },
];

const VialogueFlowCompact = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const [typedText, setTypedText] = useState("");

  const exampleText = `⚡ Example interaction for ${channels[active].label}`;

  /* ===== CONTENT ANIMATION ===== */
  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }
    );

    if (iconRefs.current[active]) {
      gsap.fromTo(
        iconRefs.current[active],
        { scale: 0.9 },
        { scale: 1.1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [active]);

  /* ===== AUTO SLIDE + TIMER ===== */
  useEffect(() => {
    if (paused) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setActive((prev) => (prev + 1) % channels.length);
      },
    });

    tl.fromTo(
      progressRef.current,
      { width: "0%" },
      { width: "100%", duration: DURATION, ease: "linear" }
    );

    return () => {
      tl.kill();
      gsap.set(progressRef.current, { width: "0%" });
    };
  }, [active, paused]);

  /* ===== TYPING ANIMATION ===== */
  useEffect(() => {
    setTypedText("");

    let i = 0;

    const interval = setInterval(() => {
      setTypedText(exampleText.slice(0, i + 1));
      i++;

      if (i === exampleText.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="px-2 py-5 overflow-hidden sm:py-16 sm:px-10 bg-[#f7f7fb]">
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative max-w-6xl mx-auto rounded-[28px] bg-white shadow-xl overflow-hidden"
      >

        {/* PROGRESS BAR */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gray-200">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-indigo-500 via-green-500 to-indigo-500"
            style={{ width: "0%" }}
          />
        </div>

        {/* CONTENT */}
        <div className="p-8 flex flex-col items-center gap-10 min-h-[400px] sm:min-h-[350px]">

          {/* ICONS */}
          <div className="flex gap-4">
            {channels.map((ch, i) => {
              const Icon = ch.icon;
              const isActive = i === active;

              return (
                <button
                  key={ch.id}
                  ref={(el) => {
                    if (el) iconRefs.current[i] = el;
                  }}
                  onClick={() => setActive(i)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300
                    ${
                      isActive
                        ? "bg-white shadow-lg scale-110"
                        : "bg-white/70 hover:scale-105"
                    }`}
                >
                  <Icon className={ch.color} size={22} />
                </button>
              );
            })}
          </div>

          {/* MAIN CONTENT */}
          <div
            ref={contentRef}
            key={channels[active].id}
            className="w-full max-w-xl"
          >
            <span className="text-sm text-gray-400 uppercase tracking-wide">
              {channels[active].label}
            </span>

            <h3 className="text-xl font-medium mt-1 mb-2">
              {channels[active].title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {channels[active].desc}
            </p>

            {/* TYPING BOX */}
            <div className="mt-4 bg-gray-50 border rounded-lg p-3 text-sm font-mono">
              {typedText}
              <span className="animate-[pulse_1s_infinite] text-black ml-1">|</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VialogueFlowCompact;