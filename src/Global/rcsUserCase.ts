export interface RcsUseCase {
  title: string;
  description: string;
  points: string[];
  bestFor?: string;
  img?: string;
}

export const rcsUseCases: RcsUseCase[] = [
  {
    title: "E-commerce Promotions & Flash Sales",
    description:
      "Show products in swipeable carousels with actions like <b>Buy Now, Add to Cart,</b> or <b>View Offer</b> directly inside the message.",
    points: [
      "Highlight top SKUs with pricing and discount labels",
      "Drive purchases directly from the inbox",
      "Reduce drop-offs caused by app switching",
    ],
    bestFor: "Retail, D2C, marketplaces, grocery, electronics",
    img: "/services/rcs/uc_1.png"
  },
  {
    title: "OTP, Authentication & Trust Messaging",
    description:
      "Deliver OTPs using verified sender IDs to reduce spoofing and phishing while improving user trust.",
    points: [
      "OTP rich cards for better readability",
      "Clear branding increases trust",
      "Better customer confidence compared to SMS",
    ],
    bestFor: "Banks, fintech, trading apps, wallets, e-commerce",
    img: "/services/rcs/uc_2.png"
  },
  {
    title: "Appointment Booking, Reminders & Rescheduling",
    description:
      "Let customers confirm or reschedule appointments in one tap through interactive message cards.",
    points: [
      "Reminder cards with quick action buttons",
      "Reduce no-shows and missed bookings",
      "Improve customer experience and support efficiency",
    ],
    bestFor: "Healthcare, clinics, diagnostics, salons, service businesses",
    img: "/services/rcs/uc_3.png"
  },
  {
    title: "Delivery, Order & Service Notifications",
    description:
      "Keep customers informed with rich tracking journeys and real-time delivery updates.",
    points: [
      "Delivery status cards",
      "Track Order, Call Delivery Partner, and Raise Ticket buttons",
      "Reduce inbound customer support calls",
    ],
    bestFor: "Logistics, food delivery, e-commerce shipping, home services",
    img: "/services/rcs/uc_4.png"
  },
  {
    title: "Lead Generation & Qualification",
    description:
      "Capture user intent and details using interactive CTA buttons and quick reply options.",
    points: [
      "Get Quote, Book Demo, Talk to Expert actions",
      "Capture lead preferences instantly",
      "Sync qualified leads directly into CRM systems",
    ],
    bestFor: "Insurance, lending, telecom, real estate, education",
    img: "/services/rcs/uc_5.png"
  },
  {
    title: "Customer Support & Self-Serve Journeys",
    description:
      "Turn messaging into interactive customer support with guided and automated journeys.",
    points: [
      "Menu-based conversation options",
      "FAQ journeys with quick replies",
      "Escalation to live agents when needed",
    ],
    bestFor: "Telecom, banking, utilities, travel, subscription businesses",
    img: "/services/rcs/uc_6.png"
  },
];