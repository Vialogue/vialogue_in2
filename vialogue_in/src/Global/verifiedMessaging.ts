import { AlertTriangle, BellRing, Braces, CalendarCheck, CheckCheck, CheckCircle, Coins, Eye, FileText, GraduationCap, ImageIcon, Layers, Layout, LocateIcon, MapPin, Megaphone, MessageCircle, MessageSquare, MousePointerClick, PackageCheck, Reply, RotateCcw, ShieldCheck, TextCursor, Truck, Video, Wallet } from "lucide-react";
import React from "react";

export interface VerifiedPoint {
  text: string;
  icon: React.ElementType | null;
}

export interface VerifiedMessagingData {
  title: string;
  subtitle: string;
  points: VerifiedPoint[];
  image: string;
}

export const verifiedMessaging: VerifiedMessagingData[] = [
  {
    title: "Verified Business Messaging",
    subtitle: "Build a verified sender profile with brand identity:",
    points: [
      { text: "Logo, brand name, and verified badge", icon: Braces },
      { text: "Trust-first communication", icon: CheckCircle },
      { text: "Higher response rates vs unverified messaging", icon: MessageSquare },
    ],
    image: "/services/rcs/uc/uc_1.png",
  },
  {
    title: "Rich Media Support",
    subtitle: "Deliver native interactive content:",
    points: [
      { text: "Images and banners", icon: ImageIcon },
      { text: "Videos and GIFs", icon: Video },
      { text: "Product cards and carousels", icon: Layout },
      { text: "Location and map sharing", icon: MapPin },
    ],
    image: "/services/rcs/uc/uc_2.png",
  },
  {
    title: "Interactive Components",
    subtitle: "Enable actions directly inside the message:",
    points: [
      { text: "CTA buttons (Buy / Track / Call / Pay)", icon: MousePointerClick },
      { text: "Quick replies", icon: MessageCircle },
      { text: "Forms and lead capture", icon: FileText },
      { text: "Catalog-style journeys", icon: Layers },
    ],
    image: "/services/rcs/uc/uc_3.png",
  },
  {
    title: "Analytics & Real-Time Reporting",
    subtitle: "Measure campaign performance end-to-end:",
    points: [
      { text: "Delivered", icon: CheckCheck },
      { text: "Opened", icon: Eye },
      { text: "Clicked", icon: TextCursor },
      { text: "Replied", icon: Reply },
    ],
    image: "/services/rcs/uc/uc_4.png",
  },
];

export const business: VerifiedMessagingData[] = [
  {
    title: "Business Benefits",
    subtitle: "Reduce Average Handling Time (AHT)",
    points: [
      {
        text: "Agents resolve queries faster using smart suggestions and quick action tools.",
        icon: null,
      },
    ],
    image: "/imgs/etc/1/uc_1.png",
  },
  {
    title: "Business Benefits",
    subtitle: "Improve First Call Resolution (FCR)",
    points: [
      {
        text: "Provide agents with contextual data and insights to solve customer issues in the first interaction.",
        icon: null,
      },
    ],
    image: "/imgs/etc/1/uc_2.png",
  },
  {
    title: "Business Benefits",
    subtitle: "Enhance Customer Experience",
    points: [
      {
        text: "Deliver faster responses, reduced wait times, and personalized interactions across channels.",
        icon: null,
      },
    ],
    image: "/imgs/etc/1/uc_3.png",
  },
  {
    title: "Business Benefits",
    subtitle: "Increase Operational Efficiency",
    points: [
      {
        text: "Automate repetitive workflows and reduce manual effort to optimize team productivity.",
        icon: null,
      },
    ],
    image: "/imgs/etc/1/uc_4.png",
  },
];

export const caseIndustry: VerifiedMessagingData[] = [
  {
    title: "Use Cases by Industry",
    subtitle: "Logistics & Delivery",
    points: [
      { text: "Delivery confirmation", icon: Truck },
      { text: "COD verification", icon: Coins },
      { text: "Address confirmation", icon: LocateIcon },
    ],
    image: "/services/voice/uc1.png",
  },
  {
    title: "Use Cases by Industry",
    subtitle: "BFSI / Fintech",
    points: [
      { text: "Transaction alerts", icon: BellRing },
      { text: "OTP verification", icon: ShieldCheck },
      { text: "Fraud alerts", icon: AlertTriangle },
    ],
    image: "/services/voice/uc2.png",
  },
  {
    title: "Use Cases by Industry",
    subtitle: "Healthcare",
    points: [
      { text: "Appointment reminders", icon: CalendarCheck },
      { text: "Test report updates", icon: FileText },
    ],
    image: "/services/voice/uc3.png",
  },
  {
    title: "Use Cases by Industry",
    subtitle: "Education",
    points: [
      { text: "Fee reminders", icon: Wallet },
      { text: "Admissions announcements", icon: GraduationCap },
    ],
    image: "/services/voice/uc4.png",
  },
  {
    title: "Use Cases by Industry",
    subtitle: "Retail & E-commerce",
    points: [
      { text: "Order confirmation", icon: PackageCheck },
      { text: "Return pickup reminders", icon: RotateCcw },
      { text: "Sale campaign voice broadcast", icon: Megaphone },
    ],
    image: "/services/voice/uc5.png",
  },
];