'use client';

import React from "react";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";

const inputVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: easeOut },
  }),
};

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    acceptedTerms: false,
  });

  const [status, setStatus] = React.useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      setStatus({
        type: "error",
        message: "You must accept the terms & conditions to submit.",
      });
      return;
    }

    setStatus({ type: "loading", message: "" });

    try {
      const apiBase = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000").replace(/\/$/, "");
      const response = await fetch(`${apiBase}/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit inquiry");
      }

      setStatus({
        type: "success",
        message: data.message || "Thank you! Your message has been sent successfully.",
      });

      // Clear the form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        acceptedTerms: false,
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <section className="sm:mb-0 py-16 sm:py-0 px-4 sm:px-0 mb-0 sm:text-left text-center bg-gradient-to-r from-[#7C3AED] to-purple-400">
      <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 items-center mx-auto">
        
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-30 hidden sm:block sm:h-full md:h-full lg:h-full min-h-[200px] lg:min-h-[300px] overflow-hidden order-2 lg:order-1"
        >
          <Image
            src="/imgs/bg_girl.png"
            alt="Get in touch"
            fill
            className="object-cover object-[-100px_0px]"
            blurDataURL="/imgs/low/bg_girl.png"
            priority
          />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 backdrop-blur-xl rounded-2xl p-4 sm:p-5 lg:p-10 shadow-lg order-1 lg:order-2 lg:mr-24 lg:mb-10 lg:m-10 max-w-[520px]"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient mb-4 sm:mb-5"
          >
            Get in touch
          </motion.h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "firstName", type: "text", placeholder: "First name" },
              { name: "lastName", type: "text", placeholder: "Last name" },
              { name: "email", type: "email", placeholder: "Email@company.com" },
              { name: "phoneNumber", type: "tel", placeholder: "+91 456 852 1230" },
            ].map((input, i) => (
              <motion.input
                key={i}
                custom={i}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={formData[input.name as keyof typeof formData] as string}
                onChange={handleChange}
                className="rounded-lg px-3 py-2.5 border border-gray-400 focus:bg-white text-black text-sm outline-none"
                required
              />
            ))}

            <motion.textarea
              custom={4}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              rows={3}
              placeholder="Leave us a message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="col-span-2 rounded-lg px-3 py-2.5 border border-gray-400 resize-none focus:bg-white text-black text-sm outline-none"
              required
            />

            {status.type === "success" && (
              <div className="col-span-2 p-3 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm font-medium animate-fade-in">
                {status.message}
              </div>
            )}

            {status.type === "error" && (
              <div className="col-span-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm font-medium animate-fade-in">
                {status.message}
              </div>
            )}

            {[
              "Sign me up for updates.",
            ].map((text, i) => (
              <motion.label
                key={i}
                custom={i + 5}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex col-span-2 gap-2 items-start cursor-pointer text-[11px] text-gray-600"
              >
                 <div className="flex items-start gap-3 text-sm text-gray-600">
                        <input
                          type="checkbox"
                          id="terms"
                          checked={formData.acceptedTerms}
                          onChange={(e) => setFormData(prev => ({ ...prev, acceptedTerms: e.target.checked }))}
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
              </motion.label>
            ))}

            <motion.button
              custom={7}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              type="submit"
              disabled={status.type === "loading"}
              className="group relative overflow-hidden w-full mt-2 rounded-lg py-2.5 text-white font-medium text-sm
                         bg-gradient-to-r from-[#7C3AED] to-purple-400
                         shadow-[0_4px_20px_rgba(124,58,237,0.15)] hover:shadow-[0_4px_30px_rgba(0,229,255,0.25)]
                         transition-all duration-300 cursor-pointer sm:col-span-1 col-span-2 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </span>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default GetInTouch;
