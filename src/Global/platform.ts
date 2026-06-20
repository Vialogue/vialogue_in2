import {
  Globe,
  Activity,
  ShieldAlert,
  Server,
  Fingerprint,
  Calendar,
  Code2,
  Route,
  LineChart,
  CheckCircle,
  FileText,
  Megaphone,
  GitFork,
  Inbox,
  Bot,
  PhoneCall,
  Volume2,
  Mic,
  PhoneForwarded,
  Sliders,
  ShieldCheck
} from "lucide-react";

export const sms_platform = [
  {
    title: "Unicode & Long Message Support",
    desc: "Send long-form and Unicode messages including symbols and non-English characters without delivery issues.",
    img: "/services/sms/img1c.png",
    icon: Globe,
  },
  {
    title: "Real-Time Delivery Reports",
    desc: "Track SMS delivery status instantly with accurate delivery notifications and campaign-level visibility.",
    img: "/services/sms/img2c.png",
    icon: Activity,
  },
  {
    title: "DND & Opt-Out Compliance",
    desc: "Built-in opt-in, opt-out, and DND handling ensures regulatory compliance and protects brand reputation.",
    img: "/services/sms/img3c.png",
    icon: ShieldAlert,
  },
  {
    title: "Message Queuing",
    desc: "Handle high-volume traffic smoothly using intelligent message queues for consistent delivery.",
    img: "/services/sms/img4c.png",
    icon: Server,
  },
  {
    title: "Unified Sender IDs",
    desc: "Manage multiple sender IDs to clearly separate transactional, promotional, and alert messages.",
    img: "/services/sms/img5c.png",
    icon: Fingerprint,
  },
  {
    title: "SMS Scheduling & Split Send",
    desc: "Schedule messages in advance or split campaigns across time slots to maximize engagement.",
    img: "/services/sms/img6c.png",
    icon: Calendar,
  },
  {
    title: "API & SMPP Integration",
    desc: "Powerful REST APIs and SMPP support enable secure, fast, and scalable SMS integration.",
    img: "/services/sms/img7c.png",
    icon: Code2,
  },
  {
    title: "Retry & Failover Logic",
    desc: "Automatic retry mechanisms and intelligent failover routing improve delivery success rates.",
    img: "/services/sms/img8c.png",
    icon: Route,
  },
  {
    title: "Bots Analytics & Insights",
    desc: "Monitor sent, delivered, failed, and pending messages through intuitive analytics dashboards.",
    img: "/services/sms/img9c.png",
    icon: LineChart,
  },
];

export const whatsapp_platform = [
  {
    title: "Official Onboarding & Setup",
    desc: "Fast-track your WhatsApp Business API approval, number verification, and compliant template submissions.",
    img: "/services/wapp/img1.png",
    icon: CheckCircle,
  },
  {
    title: "Template Management",
    desc: "Easily manage utility and marketing templates with real-time approval tracking.",
    img: "/services/wapp/img2.png",
    icon: FileText,
  },
  {
    title: "Broadcast & Bots Manager",
    desc: "Run targeted WhatsApp campaigns with rich media and interactive CTA buttons.",
    img: "/services/wapp/img3.png",
    icon: Megaphone,
  },
  {
    title: "Automation Journeys",
    desc: "Create automated customer flows for cart reminders, payments, and appointments.",
    img: "/services/wapp/img4.png",
    icon: GitFork,
  },
  {
    title: "Team Inbox (Two-Way Conversations)",
    desc: "Manage support via a shared inbox with chat assignment and internal notes.",
    img: "/services/wapp/img5.png",
    icon: Inbox,
  },
  {
    title: "AI Chatbot + Live Agent",
    desc: "Deploy 24/7 AI chatbots with seamless human handoff for complex queries.",
    img: "/services/wapp/img6.png",
    icon: Bot,
  },
  {
    title: "Reports & Analytics Dashboard",
    desc: "Monitor message delivery, campaign performance, and agent productivity in real-time.",
    img: "/services/wapp/img7.png",
    icon: LineChart,
  },
  {
    title: "Enterprise Security & Compliance",
    desc: "End-to-end encryption with strict WhatsApp policy and consent compliance.",
    img: "/services/wapp/img8.png",
    icon: ShieldCheck,
  },
];

export const voice_platform = [
  {
    title: "Voice OTP & Verification Calls",
    desc: "Secure and reliable OTP voice calls for authentication. Best for account login verification, onboarding validation, and fraud prevention.",
    img: "/services/voice/features/Path 2.png",
    icon: PhoneCall,
  },
  {
    title: "Automated Voice Alerts & Notifications",
    desc: "Send critical updates instantly including delivery status, service reminders, payment due notifications, and compliance alerts.",
    img: "/services/voice/features/Path 3.png",
    icon: Volume2,
  },
  {
    title: "Bulk Voice Broadcasting",
    desc: "Run voice campaigns at scale for promotions and announcements. Best for festival offers, sale launches, and reactivation campaigns.",
    img: "/services/voice/features/Path 4.png",
    icon: Mic,
  },
  {
    title: "Interactive Voice Response (IVR)",
    desc: "Create IVR journeys to automate support — press 1 for order status, press 2 for payment support, or press 3 to talk to an agent.",
    img: "/services/voice/features/Path 5.png",
    icon: PhoneForwarded,
  },
  {
    title: "Custom Call Flow & Template Management",
    desc: "Manage voice scripts, templates, flow sequencing, and campaign-level configurations for multi-step campaigns.",
    img: "/services/voice/features/Path 1.png",
    icon: Sliders,
  },
  {
    title: "Analytics, Reporting & Optimization",
    desc: "Optimize results using data-driven performance insights with real-time analytics and detailed campaign reporting.",
    img: "/services/voice/features/Path 6.png",
    icon: LineChart,
  },
];