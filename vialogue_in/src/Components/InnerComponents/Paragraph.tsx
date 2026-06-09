import React from "react";

interface ParagraphProps {
  text: string;
  light?: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, light }) => {
  return (
    <p
      className={`
        ${light ? "text-white/85" : "text-gray-500"}
        text-base sm:text-lg md:text-lg
        mt-4 sm:mt-6 md:mt-8
        mb-8 sm:mb-10 md:mb-14
      `}
    >
      {text}
    </p>
  );
};

export default Paragraph;
