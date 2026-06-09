"use client";

export default function IndustryHero() {
  const industries = [
    "BFSI",
    "E-Commerce",
    "Education",
    "Food & Beverages",
    "Healthcare",
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        100; // custom offset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white flex items-center justify-center px-4 py-16 sm:py-16 sm:px-40">
      <div className="w-full text-center">

        {/* Small Label */}
        <p className="uppercase tracking-[0.35em] text-purple-600 text-sm font-medium mb-8">
          Industries Page
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl leading-[0.95] font-bold text-[#0a0a1f] ">
          Communication Built for
          <br className="sm:block hidden" />
          
          <span className="text-[#7c3aed]"> Every Industry</span>
        </h1>

        {/* Description */}
        <p className="mt-10 text-xl md:text-xl sm:w-150 text-[#667085] leading-relaxed sm:max-w-4xl mx-auto">
          Vialogue delivers channel-native messaging solutions across six of India's
          fastest-growing sectors
        </p>

        {/* Buttons */}
        <div className="grid sm:flex flex-wrap justify-center gap-5 mt-16">
          {industries.map((item, index) => (
            <button
              key={index}
              className="px-10 py-4 bg-white border border-[#e5e7eb] rounded-2xl text-sm font-semibold text-[#0a0a1f] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              onClick={() => handleScroll(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}