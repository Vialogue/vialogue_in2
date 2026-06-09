import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ButtonGlobalProps {
  text: string;
  onClick?: () => void;
  property: boolean;
}

const ButtonGlobal: React.FC<ButtonGlobalProps> = ({
  text,
  onClick,
  property,
}) => {
  if (property) {
    return (
      <Link href="/contact">
      <button
        onClick={onClick}
        className="
          group relative overflow-hidden
          flex items-center justify-center gap-3
          px-5 py-3
          rounded-xl
          bg-orange-500
          text-white font-medium
          transition-all duration-300 ease-out
          hover:-translate-y-0.5
          hover:shadow-lg hover:shadow-orange-500/30
          active:scale-[0.97]
          sm:flex-1
          w-full flex-1 sm:w-auto cursor-pointer
        "
      >
        {/* SLIDING COLOR LAYER */}
        <span
          className="
            absolute inset-0
            bg-gradient-to-r from-purple-600 to-indigo-600
            -translate-x-full
            group-hover:translate-x-0
            transition-transform duration-500 ease-out
          "
        />

        {/* CONTENT */}
        <span className="relative z-10 flex items-center gap-3">
          <span>{text}</span>
          <ArrowRight
            size={16}
            className="
              transition-transform duration-300 ease-out
              group-hover:translate-x-1
            "
          />
        </span>
      </button>
      </Link>
    );
  }

  /* SECONDARY BUTTON */
  return (
    <Link href="/contact">
    <button
      onClick={onClick}
      className="
        group relative overflow-hidden
        flex items-center justify-center
        px-5 py-3
        rounded-xl
        border border-white
        text-white font-medium
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-lg
        active:scale-[0.97]
        sm:flex-1
        w-full flex-1 sm:w-auto cursor-pointer
      "
    >
      {/* SLIDING LIGHT LAYER */}
      <span
        className="
          absolute inset-0
          bg-white
          -translate-x-full
          group-hover:translate-x-0
          transition-transform duration-500 ease-out
        "
      />

      <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
        {text}
      </span>
    </button>
    </Link>
  );
};

export default ButtonGlobal;
