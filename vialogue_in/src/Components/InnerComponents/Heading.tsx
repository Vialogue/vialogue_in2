import React from "react";

interface HeadingProps {
  text: string;
  light?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ text, light }) => {
  return (
    <h2
      className={`
        ${light ? "text-white" : "text-black"}
        text-2xl sm:text-4xl lg:text-4xl text-center sm:text-left font-medium sm:leading-10 tracking-tight text-gray-900`}
    >
      {text}
    </h2>
  );
};

export default Heading;