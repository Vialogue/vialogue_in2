export interface FaqItem {
  question: string;
  answer: string;
}

export const rcsFaq: FaqItem[] = [
  {
    question: "What is RCS messaging and how is it different from SMS?",
    answer:
      "RCS is the upgraded version of SMS that supports rich content such as images, videos, buttons, carousels, and verified business branding for more interactive communication.",
  },
  {
    question: "Which devices and networks support RCS?",
    answer:
      "RCS works on most Android devices through Google Messages and depends on carrier and network availability based on region.",
  },
  {
    question: "Do customers need to install an app to receive RCS?",
    answer:
      "No. Customers receive RCS messages directly in their default messaging app if RCS is enabled on their device.",
  },
  {
    question: "What type of messages can we send using RCS?",
    answer:
      "You can send rich text, images, videos, carousels, CTA buttons, and suggested replies to create interactive messaging experiences.",
  },
  {
    question: "Is RCS secure and verified for businesses?",
    answer:
      "Yes. RCS supports verified business sender profiles and secure structured messaging for trusted communication.",
  },
  {
    question: "How can I integrate RCS into my existing system?",
    answer:
      "You can integrate RCS easily using our RCS API, with support for templates, delivery reports, and scalable messaging workflows.",
  },
];

export const voiceFaq: FaqItem[] = [
  {
    question: "What is Vialogue Voice?",
    answer:
      "Vialogue Voice is a business voice communication platform that supports automated calls, IVR journeys, voice alerts, and OTP voice verification.",
  },
  {
    question: "Can I use Voice API for OTP verification?",
    answer:
      "Yes. Vialogue Voice supports OTP voice calls for secure verification and authentication workflows.",
  },
  {
    question: "Is IVR supported in Vialogue Voice?",
    answer:
      "Yes. You can build IVR flows for customer self-service, support routing, and automated assistance.",
  },
  {
    question: "Can I schedule bulk voice calls?",
    answer:
      "Yes. Voice broadcasts can be scheduled and optimized using retry logic and performance analytics.",
  },
  {
    question: "Does Vialogue Voice provide analytics?",
    answer:
      "Yes. You can track call delivery, connected rate, call duration, retry attempts, and access detailed call logs.",
  },
];

export const whatsappFaq: FaqItem[] = [
  {
    question: "What is WhatsApp Business API?",
    answer:
      "WhatsApp Business API allows businesses to send and receive messages programmatically for notifications, OTPs, customer support, and automated communication workflows.",
  },
  {
    question: "Is WhatsApp Business API secure?",
    answer:
      "Yes. WhatsApp messages are end-to-end encrypted and follow WhatsApp’s official compliance and security guidelines to ensure safe and protected communication.",
  },
  {
    question: "Can I send OTPs using WhatsApp API?",
    answer:
      "Yes. WhatsApp OTP messages are fast, reliable, and widely used for secure user authentication and verification processes.",
  },
  {
    question: "Can I assign chats to live agents?",
    answer:
      "Yes. Vialogue provides a shared team inbox where conversations can be assigned to agents with full chat history, internal notes, and escalation workflows for efficient resolution.",
  },
];

export const agentAssistFaq: FaqItem[] = [
  {
    question: "What is Agent Assist?",
    answer:
      "Agent Assist is a support productivity feature that helps agents respond faster using smart suggestions, real-time customer context, and guided actions.",
  },
  {
    question: "Can Agent Assist work on WhatsApp and RCS?",
    answer:
      "Yes. Vialogue Agent Assist supports omnichannel assistance including WhatsApp, RCS, and web chat platforms.",
  },
  {
    question: "Does it improve customer satisfaction?",
    answer:
      "Absolutely. Faster and more accurate responses improve customer satisfaction (CSAT) and significantly reduce escalations.",
  },
];

export const platformFaq: FaqItem[] = [
  {
    question: "What channels does Vialogue support?",
    answer:
      "Vialogue supports WhatsApp, SMS, RCS, and other customer engagement messaging channels to help businesses communicate seamlessly across platforms.",
  },
  {
    question: "Can I schedule campaigns in advance?",
    answer:
      "Yes. You can schedule and automate campaigns using time-based workflows and predefined triggers.",
  },
  {
    question: "Does Vialogue provide campaign analytics?",
    answer:
      "Yes. Real-time analytics are available to track delivery rates, opens, clicks, responses, and overall campaign performance.",
  },
];

export const conversationBuilderFaq: FaqItem[] = [
  {
    question: "Do I need coding knowledge?",
    answer:
      "No. It is a complete no-code conversation builder that allows you to design and automate customer journeys without technical expertise.",
  },
  {
    question: "Can I integrate the chatbot with CRM?",
    answer:
      "Yes. You can integrate the chatbot using APIs, webhooks, and ready connectors to sync data with your CRM and other business systems.",
  },
  {
    question: "Can users talk to a human agent anytime?",
    answer:
      "Yes. Human handover can be seamlessly added into the flow, allowing users to connect with a live agent whenever required.",
  },
];

export const integrationsFaq: FaqItem[] = [
  {
    question: "Does Vialogue provide APIs?",
    answer:
      "Yes. Vialogue provides robust APIs for messaging, automation, and seamless system integrations.",
  },
  {
    question: "Can Vialogue integrate with CRM?",
    answer:
      "Yes. CRM integrations are supported to enable contact synchronization, trigger-based campaigns, and automated workflows.",
  },
  {
    question: "Are integrations secure?",
    answer:
      "Yes. All integrations are designed with secure authentication mechanisms and strong data protection practices to ensure safe communication and compliance.",
  },
];

export const industryFaq: FaqItem[] = [
  {
    question: "What industries does Vialogue support?",
    answer:
      "Vialogue powers customer communication across BFSI, e-commerce & retail, education, food & beverages, and healthcare with industry-tailored engagement workflows.",
  },
  {
    question: "Can Vialogue be customized for different industry needs?",
    answer:
      "Yes. Vialogue adapts to unique industry workflows, compliance requirements, and customer journeys through flexible automation and personalization tools.",
  },
  {
    question: "Does Vialogue support omnichannel customer communication?",
    answer:
      "Absolutely. Connect with customers across SMS, voice, RCS, WhatsApp, and other digital channels through one unified platform.",
  },
  {
    question: "Is Vialogue secure and compliant for regulated industries?",
    answer:
      "Yes. Vialogue is built with enterprise-grade security, data protection standards, and compliance-ready infrastructure to support sensitive sectors.",
  },
  {
    question: "How can I see Vialogue solutions for my industry?",
    answer:
      "You can request a personalized demo to explore industry-specific use cases, workflows, and engagement strategies tailored to your business.",
  },
];