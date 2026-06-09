"use client";

import React, { useState } from "react";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const InfoTooltip: React.FC<Props> = ({ title, description, children }) => {
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline-block">
      {/* Highlight text */}
      <span
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        className="relative font-bold cursor-help group"
      >
        {/* Yellow animated highlight */}
        <span className="absolute inset-0 bg-yellow-300 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-sm"></span>

        <span className="relative z-10 px-[2px]">{children}</span>
      </span>

      {/* Tooltip */}
      {show && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 bg-white border border-gray-200 shadow-xl rounded-lg p-4 text-sm z-10">
          <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          {/* arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45"></div>
        </div>
      )}
    </span>
  );
};

export default InfoTooltip;