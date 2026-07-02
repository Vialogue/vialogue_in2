import React, { useState } from "react";
import Head from "next/head";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "roles", title: "Controller & Processor" },
  { id: "information-collect", title: "Information We Collect" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "age-limit", title: "Users Under 18" },
  { id: "sharing", title: "Information We Share" },
  { id: "protection", title: "How We Protect Data" },
  { id: "retention", title: "Data Retention" },
  { id: "rights", title: "Your Rights" },
  { id: "transfers", title: "Cross-Border Transfers" },
  { id: "choices-contact", title: "Choices & Contact" },
];

export default function Privacy() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Privacy Policy | Vialogue</title>
        <meta
          name="description"
          content="Privacy Policy describing how Vialogue Media Pvt. Ltd. collects, processes, and protects your personal information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[#FAF9FF] text-slate-800 min-h-screen flex flex-col">
        <NavBar />

        {/* Hero Banner */}
        <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-[#FAF3FF] via-[#FAF9FF] to-white border-b border-purple-50">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[#7C3AED] font-semibold tracking-wider text-xs uppercase bg-purple-50 px-3 py-1.5 rounded-full"
            >
              Data Privacy
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm md:text-base font-light"
            >
              Learn how we collect, use, share, and protect your personal information on our messaging platform.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs text-slate-400 mt-6 font-mono"
            >
              Last Updated: April 20, 2024
            </motion.p>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 flex-grow w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-28 bg-white border border-purple-50 rounded-2xl p-6 shadow-sm shadow-purple-100/50">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all duration-200 block ${
                        activeSection === section.id
                          ? "bg-purple-50 text-[#7C3AED] font-semibold border-l-4 border-[#7C3AED]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-light cursor-pointer"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Scrollable Document Content */}
            <main className="lg:col-span-3 bg-white border border-purple-50 rounded-3xl p-6 md:p-12 shadow-sm shadow-purple-100/50 prose prose-slate max-w-none">
              
              {/* Overview */}
              <section id="overview" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Overview
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4 font-semibold text-slate-800">
                  VIALOGUE MEDIA PVT. LTD. ONLINE PRIVACY POLICY
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Vialogue Media Pvt. Ltd. respects your concerns about privacy and values its relationship with you. This Privacy Policy (the “Policy”) describes the types of information we collect from customers, contacts, and visitors to our website at <a href="https://vialogue.io" className="text-[#7C3AED] hover:underline font-normal">https://vialogue.io</a>, how we may use that information, with whom we may share that information, and the measures we take to protect the security of that information.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Our Policy also tells you how you may contact us to update your information, remove your name from our mailing lists, or get answers to questions you may have about our privacy practices.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Our website is hosted in India. We comply with applicable laws in India, UK, US and EU to safeguard your information.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  By using our services you consent to us processing your Personal Data in accordance with this Policy and transferring your information to other countries that may not provide the same level of data protection as the UK and/or EU, where necessary, for providing the services that you require. If we do make such a transfer, we will put appropriate measures in place to ensure that your information is adequately protected at all times.
                </p>
              </section>

              {/* Controller & Processor */}
              <section id="roles" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Data Controller and Data Processor
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  We process two main types of personal data:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600 font-light mb-4">
                  <li><strong>Customer Data:</strong> Personal data that forms part of data that is provided by our customers and their end-users for processing.</li>
                  <li><strong>Other Data:</strong> Personal data about our customers, visitors and other individuals that is collected and processed directly by us.</li>
                </ol>
                <p className="text-slate-600 leading-relaxed font-light">
                  Our Customers are the Controller of Customer Data. Vialogue Media Pvt. Ltd. is the processor of Customer Data and the Controller of Other Data.
                </p>
              </section>

              {/* Information We Collect */}
              <section id="information-collect" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Information We Collect &amp; How We Use It
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-6">
                  You may choose to provide personal information (such as your name, address, telephone number and email address) to us. Here are the methods by which you may provide the information and how we use it:
                </p>

                <div className="space-y-6 font-light text-slate-660">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Contact Us</h3>
                    <p className="leading-relaxed">
                      If you communicate with our Customer Services department through the ‘Contact Us’ link on our website or by post or telephone, we may ask you for information such as your email address, your location and the type of customer you are (e.g. registrant, website visitor etc.). We will hold these details in our customer services query database and use such personal information to respond to your questions and comments, and to evaluate the quality of our products and services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Sign Up for eNewsletters</h3>
                    <p className="leading-relaxed">
                      On our website, you may sign up to receive eNewsletters which contain news items and information about products and services offered by Vialogue Media Pvt. Ltd. To sign up, you must register with our website and provide us with your personal information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Careers @ Vialogue</h3>
                    <p className="leading-relaxed">
                      You may submit your CV and other information online through our careers page to apply for a job with Vialogue Media Pvt. Ltd. We use the information you submit to evaluate your suitability for the position and to contact you regarding your application.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Other Website Features</h3>
                    <p className="leading-relaxed">
                      Vialogue Media Pvt. Ltd. offers website visitors various features for their information, which we may change from time to time. We may ask you to submit certain personal information so we can provide you with these features.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Non-Personal Information</h3>
                    <p className="leading-relaxed">
                      We collect certain aggregated and non-personal information when you visit our website. Aggregated and non-personal information does not relate to a single, identifiable visitor. Instead, it tells us information such as how many users visited our website and which pages were accessed, allowing us to best tailor our website to our visitors.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Send to a Friend Facility</h3>
                    <p className="leading-relaxed">
                      When you use this facility and provide us with personal data (e.g. the name and email address) of a third party, please ensure that you have their consent before giving us their details.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Cookies &amp; Tracking Technologies
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  We collect data through cookies. We use cookies to help Vialogue Media Pvt. Ltd. identify and track visitors, their usage of the Vialogue Media Pvt. Ltd. website, and their website access preferences.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  We may also use navigational data like Uniform Resource Locators (URLs) on our products and services to gather and store information about your activities relating to our products and services.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  Visitors can control cookies through their browser settings. If cookies are disabled, certain areas of our products and services may not work properly.
                </p>
              </section>

              {/* Users Under 18 */}
              <section id="age-limit" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Users Under 18 Years of Age
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  The Sites and Services do not knowingly collect personal information from users under the age of 18.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  If you are under the age of 18, you are not permitted to use the Sites and Services or to disclose Personal Information. If we learn we have collected or received Personal Information from a child under 18, we will delete that information immediately.
                </p>
              </section>

              {/* Information We Share */}
              <section id="sharing" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Information We Share
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Vialogue Media Pvt. Ltd. uses your data to protect the security and safety of our website, communicate with you, and personalize our messages. You can choose whether you wish to receive promotional communications from us. You have the right to withdraw consent at any time for future processing.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  We do not sell or otherwise disclose information about our website visitors, except as described here. We may share information with affiliates in our group, joint marketing partners, and service providers retained to perform services on our behalf (authorized only to use data as needed to perform these services).
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  In addition, we may disclose information about you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 font-light mb-4">
                  <li>if we are required to do so by law or legal process,</li>
                  <li>to law enforcement agencies following an appropriate request, or</li>
                  <li>when we believe disclosure is necessary to prevent physical harm or financial loss or in connection with an investigation of suspected or actual illegal activity.</li>
                </ul>
                <p className="text-slate-600 leading-relaxed font-light">
                  We reserve the right to transfer any information we have about you in the event we sell or transfer all or a portion of our business or assets.
                </p>
              </section>

              {/* Protection */}
              <section id="protection" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  How We Protect Personal Information
                </h2>
                <p className="text-slate-600 leading-relaxed font-light">
                  We maintain administrative, technical and physical safeguards to protect against loss, misuse or unauthorized access, disclosure, alteration or destruction of the information you provide on our website.
                </p>
              </section>

              {/* Retention */}
              <section id="retention" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Data Retention
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  We will retain your personal information for as long as is needed to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  When you decide to close your account, we delete all personal information about you in accordance with customer instructions and applicable law.
                </p>
              </section>

              {/* Rights */}
              <section id="rights" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Your Rights to Control Data
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  We aim to provide easy means to access, modify, delete, object to, or restrict the use of your personal information.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  You can ask us to erase or delete your personal data (if it is no longer necessary to provide Services) or to limit our use of it.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  To help protect your privacy and security, we will take reasonable steps to verify your identity before granting access or making corrections to your information.
                </p>
              </section>

              {/* Cross-Border Transfers */}
              <section id="transfers" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Cross-Border Data Transfers
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Since we are an international company, your data will be processed outside of the EU region, typically within Third-Party Data Centers.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  Vialogue Media Pvt. Ltd. offers European Union Model Clauses (Standard Contractual Clauses) to meet the adequacy and security requirements for our customers that operate in the European Union, binding parties to protect the privacy and security of the data.
                </p>
              </section>

              {/* Choices & Contact */}
              <section id="choices-contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Choices &amp; Contact Us
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  If you would like to update your contact information, preferences, or be removed from our mailing list, you may email us at <a href="mailto:contact@vialogue.io" className="text-[#7C3AED] hover:underline font-normal">contact@vialogue.io</a>.
                </p>
                <p className="text-slate-650 leading-relaxed font-light mb-4">
                  For any questions or comments about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 font-light space-y-2 text-sm text-slate-700 mb-4">
                  <p><strong>Email:</strong> contact@vialogue.io</p>
                  <p><strong>Writing to:</strong></p>
                  <p className="pl-4 font-mono text-xs">
                    Data Protection Officer<br />
                    1/22, Asaf Ali Road,<br />
                    New Delhi, Delhi-110002
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  If you are a resident of the European Economic Area (EEA), you maintain additional rights under the GDPR, including the right to lodge a complaint with the Supervisory Authority in your country of residence.
                </p>
              </section>

            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
