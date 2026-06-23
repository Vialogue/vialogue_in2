"use client";

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Globe,
} from "lucide-react";

export default function ContactUs() {
  return (
    <section className="relative bg-[#FFFFFF] py-16 px-4 md:px-12 lg:px-20 overflow-hidden">
      {/* Visual background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-light">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid md:grid-cols-5">

            {/* LEFT PANEL */}
            <div className="md:col-span-2 relative bg-[#7C3AED] p-8 sm:p-12 text-white h-full flex flex-col justify-between overflow-hidden">
              {/* Background elements */}
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/20 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-3xl font-medium tracking-tight">Contact Information</h3>
                <p className="mt-2 text-lg text-white/80 font-light">
                  Say something to start a live chat!
                </p>

                <div className="space-y-6 text-base mt-12">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                      <Phone size={20} className="text-white" />
                    </div>
                    <span className="font-light tracking-wide">+91 84480 12300</span>
                  </div>

                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                      <Mail size={20} className="text-white" />
                    </div>
                    <span className="font-light tracking-wide">contact@vialogue.in</span>
                  </div>

                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                      <Globe size={20} className="text-white" />
                    </div>
                    <span className="font-light tracking-wide">vialogue.in</span>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm mt-1">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <span className="font-light leading-relaxed tracking-wide mt-1">
                      1st Floor, Landmark Cyber Park, <br />
                      Sector 67, Gurugram, 122101, Haryana
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-16 sm:mt-24 relative z-10">
                <a href="https://www.instagram.com/vialoguemedia/" target="_blank" rel="noopener noreferrer" className="p-2.5 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                  <Instagram size={20} className="text-white" />
                </a>
                <a href="https://x.com/VialogueM" target="_blank" rel="noopener noreferrer" className="p-2.5 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                  <Twitter size={20} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/company/vialogue-media/" target="_blank" rel="noopener noreferrer" className="p-2.5 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                  <Linkedin size={20} className="text-white" />
                </a>
                <a href="https://www.facebook.com/VialogueMedia/" target="_blank" rel="noopener noreferrer" className="p-2.5 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                  <Facebook size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="md:col-span-3 p-8 sm:p-12">
              <form className="space-y-8">
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input label="First Name" />
                  <Input label="Last Name" />
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input label="Email" type="email" />
                  <Input label="Phone Number" type="tel" />
                </div>

                {/* Message */}
                <div className="pt-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full border-b border-slate-300 bg-transparent focus:border-[#7C3AED] outline-none py-2 text-slate-800 placeholder-slate-400 transition-colors resize-none"
                  />
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 accent-[#7C3AED] cursor-pointer"
                  />
                  <label
                    htmlFor="terms"
                    className="cursor-pointer leading-relaxed font-light"
                  >
                    I accept{" "}
                    <a
                      href="/terms"
                      className="text-[#7C3AED] font-medium hover:underline transition-all"
                    >
                      terms & Conditions
                    </a>{" "}
                    and authorize Vialogue to send promotional, transactional
                    notifications via SMS, RCS, Voice, Email and Whatsapp.
                  </label>
                </div>

                {/* Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="relative overflow-hidden group w-full md:w-auto px-8 py-3.5 rounded-xl bg-[#7C3AED] text-white font-medium hover:bg-[#6D28D9] transition-all active:scale-[0.98] shadow-lg shadow-[#7C3AED]/20"
                  >
                    <span className="relative z-10">Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
function Input({
  label,
  type = "text",
  defaultValue,
}: {
  label: string;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <div className="relative group mt-4">
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder=" "
        className="block w-full border-b border-slate-300 bg-transparent py-2 text-slate-800 focus:border-[#7C3AED] outline-none transition-colors peer"
      />
      <label className="absolute left-0 top-2 text-sm text-slate-500 cursor-text transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#7C3AED] peer-focus:font-medium peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#7C3AED] peer-not-placeholder-shown:font-medium">
        {label}
      </label>
    </div>
  );
}