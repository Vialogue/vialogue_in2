"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  MessageSquare,
  MessageCircle,
  Radio,
  Phone,
  Bot,
  Link,
  Megaphone,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import Router from "next/router";
import ButtonOne from "./InnerComponents/ButtonOne";
import { useRouter } from "next/router";

const NavBar = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement[]>([]);
  const linksRefTwo = useRef<HTMLDivElement[]>([]);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobilePlatform, setMobilePlatform] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  /* DESKTOP MEGA MENU */

  const openMenu = () => {
    setOpen(true);

    if (closeTimeout.current) clearTimeout(closeTimeout.current);

    gsap.set(panelRef.current, { display: "block" });

    gsap.fromTo(
      linksRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.4,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      linksRefTwo.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.4,
        ease: "power3.out",
      },
    );
  };

  const closeMenu = () => {
    setOpen(false);

    closeTimeout.current = setTimeout(() => {
      gsap.to(panelRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.set(panelRef.current, { display: "none", opacity: 1 });
        },
      });
    }, 150);
  };

  /* MOBILE MENU */

  const openMobileMenu = () => {
    setMobileMenu(true);

    setTimeout(() => {
      gsap.fromTo(
        mobilePanelRef.current,
        { y: "-100%" },
        {
          y: "0%",
          duration: 0.5,
          ease: "power3.out",
        },
      );
    }, 10);
  };

  const closeMobileMenu = () => {
    gsap.to(mobilePanelRef.current, {
      y: "-100%",
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        setMobileMenu(false);
        setMobilePlatform(false);
      },
    });
  };

  /* SERVICES */

  const services = [
    {
      label: "SMS",
      desc: "High deliverability SMS messaging platform",
      icon: MessageSquare,
      path: "/sms",
    },
    {
      label: "WhatsApp",
      desc: "Official WhatsApp Business messaging API",
      icon: MessageCircle,
      path: "/whatsapp",
    },
    {
      label: "RCS Messaging",
      desc: "Next-generation rich messaging channel",
      icon: Radio,
      path: "/rcs",
    },
    {
      label: "Voice API",
      desc: "Programmable voice calls and automation",
      icon: Phone,
      path: "/voice",
    },
  ];

  /* FEATURES */

  const features = [
    {
      label: "Agent Assist",
      desc: "AI suggestions during live conversations",
      icon: Bot,
      path: "/agent",
    },
    {
      label: "Scalable API",
      desc: "Connect CRM and automation tools",
      icon: Link,
      path: "/third",
    },
    {
      label: "Bots",
      desc: "Create and automate messaging campaigns",
      icon: Megaphone,
      path: "/bots",
    },
    {
      label: "Conversation Tools",
      desc: "Track leads and improve Conversations",
      icon: Zap,
      path: "/conversation",
    },
  ];

  return (
    <>
      {/* NAVBAR */}

      <div className="fixed border-b border-slate-200/60 bg-white/75 backdrop-blur-md top-0 left-0 w-[100vw] px-0 lg:px-40 py-0 z-[10000] transition-all duration-300">
        <nav className="h-[90px] flex justify-between items-center px-4 lg:px-0">
          {/* LOGO */}

          <Image
            src="/imgs/logo2.svg"
            width={110}
            height={40}
            alt="logo"
            priority
            unoptimized
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />

          {/* DESKTOP MENU */}

          <div className="hidden lg:flex gap-10 items-center text-slate-600">
            {open ? (
              <div
                className="flex items-center gap-1 cursor-pointer text-slate-900 font-medium transition-colors"
                onMouseEnter={openMenu}
                onClick={closeMenu}
              >
                Platform <ChevronUp size={16} className="text-brand-purple" />
              </div>
            ) : (
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-slate-900 font-medium transition-colors"
                onMouseEnter={openMenu}
                onClick={openMenu}
              >
                Platform <ChevronDown size={16} />
              </div>
            )}

            <div
              className="cursor-pointer hover:text-slate-900 font-medium transition-colors"
              onClick={() => router.push("/industry")}
            >
              Industry
            </div>

            <div
              className="cursor-pointer hover:text-slate-900 font-medium transition-colors"
              onClick={() => router.push("/about")}
            >
              About
            </div>

            <div
              className="cursor-pointer hover:text-slate-900 font-medium transition-colors"
              onClick={() => router.push("/contact")}
            >
              Contact
            </div>
          </div>

          {/* BUTTON */}

          <div className="hidden lg:block">
            <ButtonOne text="Book a Demo" />
          </div>

          {/* MOBILE ICON */}

          <div
            className="lg:hidden cursor-pointer text-slate-800"
            onClick={() => {
              if (mobileMenu) closeMobileMenu();
              else openMobileMenu();
            }}
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </div>
        </nav>
      </div>

      {/* DESKTOP MEGA MENU */}

      <div
        ref={panelRef}
        style={{ display: "none" }}
        className="fixed rounded-2xl top-[100px] left-1/2 -translate-x-1/2 w-fit bg-white/95 backdrop-blur-xl shadow-2xl border border-slate-200/80 z-[9999999]"
        onMouseLeave={closeMenu}
      >
        <div className="max-w-fit mx-auto px-8 py-8 grid grid-cols-2 gap-8">
          {/* CHANNELS */}

          <div>
            <h3 className="text-xs text-brand-purple mb-4 font-semibold tracking-widest">
              CHANNELS
            </h3>

            <div className="flex flex-col gap-1">
              {services.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    ref={(el) => {
                      if (el) linksRef.current[i] = el;
                    }}
                    onClick={() => {
                      router.push(item.path);
                      closeMenu();
                    }}
                    className="group flex items-start gap-3 cursor-pointer px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200"
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="mt-0.5 text-brand-purple min-w-8 min-h-8 p-2 border-slate-200/60 rounded-lg border bg-slate-50 group-hover:bg-purple-50 group-hover:border-purple-200 transition-all duration-200"
                    />

                    <div>
                      <div className="font-semibold text-sm text-slate-800 group-hover:text-brand-purple transition-colors">
                        {item.label}
                      </div>

                      <div className="text-xs max-w-[150px] text-slate-500 mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FEATURES */}

          <div>
            <h3 className="text-xs text-brand-purple mb-4 font-semibold tracking-widest">
              FEATURES
            </h3>

            <div className="flex flex-col gap-1">
              {features.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    ref={(el) => {
                      if (el) linksRefTwo.current[i] = el;
                    }}
                    onClick={() => {
                      router.push(item.path);
                      closeMenu();
                    }}
                    className="group flex items-start gap-3 cursor-pointer px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200"
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="mt-0.5 text-brand-purple min-w-8 min-h-8 p-2 border-slate-200/60 rounded-lg border bg-slate-50 group-hover:bg-purple-50 group-hover:border-purple-200 transition-all duration-200"
                    />

                    <div>
                      <div className="font-semibold text-sm text-slate-800 group-hover:text-brand-purple transition-colors">
                        {item.label}
                      </div>

                      <div className="text-xs max-w-[150px] text-slate-500 mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}

      {mobileMenu && (
        <div
          ref={mobilePanelRef}
          className="fixed top-0 text-left left-0 w-full h-screen bg-white text-slate-850 z-[9999999] lg:hidden overflow-y-auto"
        >
          {/* MOBILE HEADER */}

          <div className="flex justify-between items-center px-4 py-6 border-b border-slate-100">
            <Image
              src="/imgs/logo2.svg"
              width={110}
              height={40}
              alt="logo"
              priority
              unoptimized
              className="cursor-pointer"
              onClick={() => {
                router.push("/");
                closeMobileMenu();
              }}
            />

            <X size={28} className="cursor-pointer text-slate-800" onClick={closeMobileMenu} />
          </div>

          <div className="px-6 py-10 flex flex-col gap-8">
            {/* PLATFORM ACCORDION */}

            <div>
              <div
                onClick={() => setMobilePlatform(!mobilePlatform)}
                className="flex items-center justify-between font-semibold text-lg cursor-pointer text-slate-800 hover:text-brand-purple transition-colors"
              >
                Platform
                {mobilePlatform ? (
                  <ChevronUp size={20} className="text-brand-purple" />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>

              {mobilePlatform && (
                <div className="mt-6 flex flex-col gap-8 pl-2 border-l border-slate-100">
                  {/* CHANNELS */}

                  <div>
                    <h3 className="text-xs text-brand-purple mb-4 font-semibold tracking-widest">
                      CHANNELS
                    </h3>

                    <div className="flex text-left flex-col gap-5">
                      {services.map((item, i) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={i}
                            onClick={() => {
                              router.push(item.path);
                              closeMobileMenu();
                            }}
                            className="flex items-start gap-3 cursor-pointer group"
                          >
                            <Icon size={20} className="text-brand-purple mt-0.5 group-hover:scale-110 transition-transform" />

                            <div>
                              <div className="font-semibold text-slate-800 group-hover:text-brand-purple transition-colors">
                                {item.label}
                              </div>

                              <div className="text-sm text-slate-500">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* FEATURES */}
                  <hr className="border-slate-100" />

                  <div>
                    <h3 className="text-xs text-left text-brand-purple mb-4 font-semibold tracking-widest">
                      FEATURES
                    </h3>

                    <div className="flex flex-col gap-5">
                      {features.map((item, i) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={i}
                            onClick={() => {
                              router.push(item.path);
                              closeMobileMenu();
                            }}
                            className="flex items-start gap-3 cursor-pointer group"
                          >
                            <Icon size={20} className="text-brand-purple mt-0.5 group-hover:scale-110 transition-transform" />

                            <div>
                              <div className="font-semibold text-slate-800 group-hover:text-brand-purple transition-colors">
                                {item.label}
                              </div>

                              <div className="text-sm text-slate-500">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* OTHER LINKS */}

            <div
              className="font-semibold text-lg cursor-pointer hover:text-brand-purple transition-colors text-slate-800"
              onClick={() => {
                router.push("/industry");
                closeMobileMenu();
              }}
            >
              Industry
            </div>

            <div
              onClick={() => {
                router.push("/about");
                closeMobileMenu();
              }}
              className="font-semibold text-lg cursor-pointer hover:text-brand-purple transition-colors text-slate-800"
            >
              About
            </div>

            <div
              onClick={() => {
                router.push("/contact");
                closeMobileMenu();
              }}
              className="font-semibold text-lg cursor-pointer hover:text-brand-purple transition-colors text-slate-800"
            >
              Contact
            </div>

            <div className="pt-4">
              <ButtonOne text="Book a Demo" />
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR SPACE */}

      <div className="h-[90px]" />
    </>
  );
};

export default NavBar;
