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
    <section className="bg-white py-0 sm:py-0 pt-16 sm:pt-16 px-4 md:px-40">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
          Contact Us
        </h2>
        <p className="mt-2 text-gray-600">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Card */}
      <div className="mx-auto rounded-2xl bg-white shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          
          {/* LEFT PANEL */}
          <div
            className="relative bg-violet-600 p-4 sm:p-10 text-white"
            style={{
              backgroundImage: "url(/imgs/form_bg.svg)",
              backgroundSize: "cover",
              backgroundPositionX: "right",
              backgroundPositionY: "bottom",
            }}
          >
            <h3 className="text-3xl font-medium">Contact Information</h3>
            <p className="mt-2 text-xl text-violet-100">
              Say something to start a live chat!
            </p>

            <div className="space-y-4 sm:space-y-10 text-lg mt-10 sm:mt-20">
              <div className="flex items-center gap-4">
                <Phone size={18} />
                <span>+91 84480 12300</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={18} />
                <span>contact@vialogue.in</span>
              </div>

              <div className="flex items-center gap-4">
                <Globe size={18} />
                <span>vialogue.in</span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-0.5" />
                <span>
                  1st Floor, Landmark Cyber Park, <br />
                  Sector 67, Gurugram, 122101, Haryana
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-16 sm:mt-30">
              <Instagram className="p-2 w-10 h-10 bg-white fill-gray-800 rounded-xl" />
              <Twitter className="p-2 w-10 h-10 bg-white fill-gray-800 rounded-xl" />
              <Linkedin className="p-2 w-10 h-10 bg-white fill-gray-800 rounded-xl" />
              <Facebook className="p-2 w-10 h-10 bg-white fill-gray-800 rounded-xl" />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="pt-10 p-4 sm:p-10 sm:pb-10">
            <form className="space-y-6">
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="First Name" />
                <Input label="Last Name" />
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Email" />
                <Input label="Phone Number" />
              </div>

              {/* Subject */}
              {/* <div>
                <label className="block text-lg font-medium text-gray-700">
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  {[
                    "General Inquiry",
                    "Support",
                    "Sales",
                    "Other",
                  ].map((item, i) => (
                    <label key={i} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="subject"
                        className="accent-violet-600"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div> */}

              {/* Message */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Write your message..."
                  className="w-full border-b border-gray-300 focus:border-violet-600 outline-none py-2 text-lg"
                />
              </div>

              {/* ✅ Terms & Conditions */}
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 accent-violet-600 cursor-pointer"
                />
                <label
                  htmlFor="terms"
                  className="cursor-pointer leading-relaxed"
                >
                  I accept{" "}
                  <a
                    href="/terms"
                    className="text-violet-600 font-medium underline"
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
                  className="rounded-lg w-full md:w-fit bg-violet-600 px-4 py-3 text-lg font-medium text-white hover:bg-violet-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
function Input({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        className="w-full border-b border-gray-300 focus:border-violet-600 outline-none py-2 text-lg"
      />
    </div>
  );
}