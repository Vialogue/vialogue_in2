import React from "react";

interface Row {
  problem: string;
  solution: string;
}

const ProblemSolution: React.FC = () => {
  const data: Row[] = [
    {
      problem: "Customers expect 24/7 response",
      solution: "A no-code tool to build support automation",
    },
    {
      problem: "Customers expect accurate information",
      solution: "Lead generation flows",
    },
    {
      problem: "Customers expect quick actions",
      solution: "Interactive menus",
    },
    {
      problem: "Customers expect smooth customer journeys",
      solution: "Customer self-service journeys",
    },
    {
      problem: "But human teams cannot be online all the time",
      solution: "Automated workflows that operate 24/7",
    },
  ];

  return (
    <section className="w-full bg-gray-100 md:py-16 py-16">
      <div className="mx-auto md:px-40 px-4">

        {/* Header */}
        <div className="hidden md:grid grid-cols-2 bg-gray-50 border border-gray-300 rounded-t-lg">
          <div className="p-4 font-medium text-red-600 border-r border-gray-300">
            The Problem
          </div>
          <div className="p-4 font-medium text-green-600">
            The Solution
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block border border-t-0 border-gray-300 rounded-b-lg overflow-hidden bg-white shadow-sm">
          {data.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-b border-gray-200 last:border-b-0"
            >
              <div className="p-2 px-4 bg-red-50 text-gray-800 font-semibold border-r border-gray-200">
                {row.problem}
              </div>
              <div className="p-2 px-4 bg-green-50 text-gray-800 font-semibold">
                {row.solution}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {data.map((row, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
            >
              <div className="p-4 bg-red-50 border-b border-gray-200">
                <p className="text-xs font-medium text-red-600 uppercase mb-1">
                  Problem
                </p>
                <p className="text-gray-800">{row.problem}</p>
              </div>

              <div className="p-4 bg-green-50">
                <p className="text-xs font-medium text-green-600 uppercase mb-1">
                  Solution
                </p>
                <p className="text-gray-800 font-medium">
                  {row.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;