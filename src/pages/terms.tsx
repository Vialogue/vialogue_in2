import React, { useState } from "react";
import Head from "next/head";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";

const sections = [
  { id: "preamble", title: "Preamble" },
  { id: "illegal-use", title: "Illegal Use" },
  { id: "subscriber-conduct", title: "Subscriber Conduct" },
  { id: "security", title: "System & Network Security" },
  { id: "indemnification", title: "Indemnification" },
  { id: "sms", title: "SMS Policy" },
  { id: "cost-policy", title: "Cost Policy" },
  { id: "enforcement", title: "Enforcement" },
  { id: "appendix", title: "Appendix" },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState("preamble");

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
        <title>Terms &amp; Conditions | Vialogue</title>
        <meta
          name="description"
          content="Terms and Conditions specifying permitted actions and acceptable use guidelines for Vialogue's messaging services."
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
              Legal Agreement
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-4"
            >
              Terms &amp; Conditions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm md:text-base font-light"
            >
              Please read these terms and conditions carefully before using the Vialogue enterprise messaging platform and services.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs text-slate-400 mt-6 font-mono"
            >
              Last Updated: July 2, 2026
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
              
              {/* Preamble */}
              <section id="preamble" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Preamble
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  The Terms and Conditions specify the actions permitted by Provider Company to its users of our services, including SMS, WA, RCS and other services, which may be introduced in the future. The Company reserves right to modify the policy at any time.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  All subscribers of Our Services, directly or indirectly are required to engage in acceptable use only as per this policy as modified from time to time.
                </p>
              </section>

              {/* Illegal Use */}
              <section id="illegal-use" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Illegal Use
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  The Services of the Provider Company may be used only for lawful purposes. Transmission, distribution or storage of any material in violation of any applicable law or regulation is prohibited.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  This includes, without limitation, material protected by copyright, trademark, trade secret or other intellectual property right used without proper authorization, and material that is obscene, defamatory, constitutes an illegal threat, and violates export control laws or anti-national policies.
                </p>
                <p className="text-slate-650 leading-relaxed font-normal bg-red-50/50 border border-red-100 rounded-xl p-4">
                  The provider company will not be held LIABLE for use of any Stolen Property by its users.
                </p>
              </section>

              {/* Subscriber Conduct */}
              <section id="subscriber-conduct" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Subscriber Conduct
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Subscriber shall use Company services for lawful purposes only. Subscriber shall not post or transmit using Company services any material, which violates or infringes in any way upon the rights of others, which is unlawful, threatening, abusive, defamatory, invasive of privacy or publicity rights, vulgar, obscene, profane or otherwise objectionable, which encourages conduct that would constitute a criminal offence, give the right to civil liability or otherwise violate any law, or which, without the Company express prior approval, contains advertising or any solicitation with respect to products or services.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Any conduct by a Subscriber that in the Company discretion restricts or inhibits any other Subscriber from using or enjoying Company services will not be permitted. Subscriber shall not use Company services to advertise or perform any commercial solicitation, including, but not limited to, the solicitation of users to become subscribers of other on-line information services competitive with the Company services.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  Subscriber shall not upload, post or otherwise make available using Company services any material protected by copyright, trademark or other proprietary right without the express permission of the owner of the copyright, trademark or other proprietary right and the burden of determining that any material is not protected by copyright rests with the subscriber. Subscriber shall be solely liable for any damage resulting from any infringement of copyrights, proprietary rights, or any other harm resulting from such a submission.
                </p>
              </section>

              {/* System & Network Security */}
              <section id="security" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  System &amp; Network Security
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Violations of system or network security are prohibited and may result in criminal and Civil Liability. The Company will investigate incidents involving such violations and may involve/will cooperate with law enforcement agencies if a criminal violation is suspected.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-2">
                  Examples of system or network security violations include, without limitation, the following:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 font-light">
                  <li>Unauthorized access to or use of data, systems or networks, including any attempt to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without express authorization of the owner of the system or network.</li>
                  <li>Unauthorized monitoring of data or traffic on any network or system without express authorization of the owner of the system or network.</li>
                  <li>Interference with service to any user, host or network including, without limitation, mail bombing, flooding, deliberate attempts to overload a system and broadcast attacks.</li>
                  <li>Forgery of any identification or obscuring of host names, usernames, IP addresses, or any message header information in any data.</li>
                  <li>Harassing or threatening transmissions.</li>
                  <li>Probing for means of gaining unauthorized access to computers or networks.</li>
                  <li>Introducing or causing to be introducing any computer contaminant or computer viruses into system or network.</li>
                </ul>
              </section>

              {/* Indemnification */}
              <section id="indemnification" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Indemnification
                </h2>
                <p className="text-slate-600 leading-relaxed font-light">
                  Subscribers agree to defend, indemnify and hold harmless the Company, its affiliates and their respective directors, officers, employees and agents from and against all claims and expenses, including attorney’s fees, arising out of the use of Company Services by the subscriber or anybody else than the Subscriber, if any.
                </p>
              </section>

              {/* SMS Policy */}
              <section id="sms" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  SMS Policy
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  It is a condition of use of Company services that subscriber does not post or transmit any unlawful, threatening, abusive, libellous, defamatory, obscene, vulgar, pornographic, profane or indecent information of any kind, including without limitation any transmissions constituting or encouraging conduct that would constitute a criminal offence, give rise to civil liability or otherwise violate any local, state, national or international law; post or transmit any information, software or any other material, which violates or infringes upon the rights of others, including material, which is invasion of privacy or publicity rights or, which is protected by copyright, trademark or other proprietary right, or derivative works with respect thereto, without first obtaining permission from the owner or right holder; post or transmit any information, software or other material, which contains a virus or other harmful component; post, transmit or in any way exploit any information, software or other material for commercial purposes, or, which contains advertising.
                </p>
                <p className="text-slate-700 leading-relaxed font-medium mb-4">
                  Sending unsolicited messages, including, without limitation, commercial advertising, and informational announcements, is explicitly prohibited.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Company has no control on the sms sent and Company shall not be held responsible/liable directly or indirectly neither for the content of the sms sent nor for any delay in delivery or non-delivery or for any errors routed by Company through its SMS Panel.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Company shall not be responsible in any manner due to errors caused on account of internet delays, disconnection, time outs, routing problems, and so on.
                </p>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  User will not send unsolicited Sms (also referred to as ‘spamming’) to subscribers. All SMS sent by the user using Company SMS Panel must conform to IT Act 2000 and other relevant laws of India. Any violation will be the sole responsibility of user.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  Company shall strive to deliver SMS immediately upon receipt from the user. However, Company shall not be responsible for any delay, non-receipt of SMS or any other interruption in providing SMS Panel facility, which may occur due to technical reasons or snags in the system, breakdown of SMS Panel or any other equipment, server breakdown, maintenance shutdown, breakdown of communication services and such interruption are beyond the control of Company. However, Company acknowledges that it will put in its best endeavours to achieve the best success rate in delivery of the messages so routed through its SMS Panel.
                </p>
              </section>

              {/* Cost Policy */}
              <section id="cost-policy" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Cost Policy
                </h2>
                <ul className="list-decimal pl-6 space-y-3 text-slate-600 font-light">
                  <li>In consideration of Company forwarding the SMS through its SMS Panel, User shall pay the agreed amount per SMS + taxes sent anywhere within India.</li>
                  <li>Company shall be entitled to charge for all the message routed by its SMS Panel, irrespective of any delay, incomplete message and or non-receipt of the message by the irrespective mobile phone to whom such SMS Panel has been forwarded. Company will notify any change in tariff to User.</li>
                  <li>Company shall raise bills at the time of buying the credits by the user. The number of Empty SMS submitted by the user shall be counted for settlement.</li>
                  <li>Service Taxes would be applicable.</li>
                  <li>User agrees to pay the bill amount immediately when sent by Company. Such payments shall be in Indian Rupees (INR).</li>
                  <li>The bill generated by Company shall be the conclusive proof of the SMS sent by SMS Panel of Company and the same shall be honoured by the user. However, in case of any anomaly found by the user, he will present its statistics and both parties will resolve the anomaly.</li>
                  <li>Company shall not be responsible in any manner whatsoever to a user or any other third party for delayed, incomplete, and non-delivery of SMS due to technical reasons.</li>
                  <li>No unsolicited/objectionable message should be sent by the user.</li>
                  <li>Bulk SMS will be sent by the user to national customer only.</li>
                  <li>In case, TRAI levies ANY Extra Charges e.g. interconnection Charges, the User will have to bear all such charges for the Balance SMS Credits in their account.</li>
                  <li>In case, TRAI apply any charges that will be applicable to the users.</li>
                  <li>Nature of content, intention behind sending bulk message, and the use of and primary applications to be specified by the user.</li>
                </ul>
              </section>

              {/* Enforcement */}
              <section id="enforcement" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Enforcement for Company Subscribers
                </h2>
                <p className="text-slate-600 leading-relaxed font-light mb-4">
                  Indirect or attempted violations of the policy and actual or attempted violations by a third party on behalf of a Company subscriber or a subscriber’s end user shall be considered a violation of the policy by such a customer or end user. Any user found violating the above Terms and Conditions is liable for action under the prevailing laws including termination of services without any prior notice.
                </p>
                <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-4 text-slate-700 font-light">
                  We also want to advise you that if, you do not agree with any of the conditions mentioned above kindly do not register with us, once the payment is received or, even if One SMS credit is consumed, the provider company will not be liable for a refund of the amount.
                </div>
              </section>

              {/* Appendix */}
              <section id="appendix" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-purple-50 pb-2">
                  Appendix
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-light text-slate-650 mt-4 bg-slate-50 border border-slate-100 rounded-xl p-6">
                  <div>
                    <span className="font-semibold text-slate-900">T&amp;C:</span> Terms and Conditions
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">TRAI:</span> Telecom Regulatory Authority of India
                  </div>
                </div>
              </section>

            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
