import React from "react";
import { OverviewData } from "./data";

interface Props {
  data: OverviewData;
}

const GlobalOverviewRev: React.FC<Props> = ({ data }) => {
  return (
    <section className="w-full py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* TOP BADGE */}
        {data.badge && (
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-14 h-[1px] bg-purple-300" />
            <span className="text-purple-600 text-sm font-medium tracking-wide">
              {data.badge}
            </span>
            <div className="w-14 h-[1px] bg-purple-300" />
          </div>
        )}

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight text-black mb-6">
              {data.title}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              {data.description}
            </p>

            {data.bold !== "null" && (
              <p className="font-medium text-xl mb-5">{data.bold}</p>
            )}

            <ul className="space-y-2">
              {data.points.map((point, index) => (
                <li key={index} className="text-gray-800 text-lg leading-snug">
                  · {point}
                </li>
              ))}
            </ul>
          </div>
          {/* RIGHT CONTENT */}
          <div className="flex justify-center">
            <img
              src={data.image}
              alt={data.title}
              className="w-full max-w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalOverviewRev;
