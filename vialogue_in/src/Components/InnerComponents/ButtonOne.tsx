import Link from "next/link";
import React from "react";

interface ButtonOneProps {
  text: string;
  onClick?: () => void;
}

const ButtonOne: React.FC<ButtonOneProps> = ({ text, onClick }) => {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className="
        group inline-flex items-center justify-center
        text-lg font-medium
        w-full
        bg-black text-[#ffffff]
        px-8 py-3 rounded-xl
        shadow-[-0px_0px_0px_#6A47F24D]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[-5px_5px_0px_#6A47F24D]
        active:translate-y-0 active:shadow-[-3px_3px_0px_#6A47F24D]
      "
    >
      <span className="transition-colors duration-300 group-hover:text-white">
        {text}
      </span>
    </Link>
  );
};

export default ButtonOne;
