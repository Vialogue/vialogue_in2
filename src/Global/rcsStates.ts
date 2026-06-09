import {
  TrendingUp,
  MailOpen,
  Zap,
  MousePointerClick,
  LucideIcon,
} from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  bgColor: string;
  icon: LucideIcon;
}

export const rcsStats: StatItem[] = [
  {
    value: "8x",
    label: "higher engagement than SMS",
    bgColor: "bg-[#EFE1B8]",
    icon: TrendingUp,
  },
  {
    value: "98%",
    label: "open rates",
    bgColor: "bg-[#E9B2B7]",
    icon: MailOpen,
  },
  {
    value: "Live",
    label: "in 48 hours",
    bgColor: "bg-[#D9BCE4]",
    icon: Zap,
  },
  {
    value: "60%",
    label: "click-through boost",
    bgColor: "bg-[#C7B8E8]",
    icon: MousePointerClick,
  },
];