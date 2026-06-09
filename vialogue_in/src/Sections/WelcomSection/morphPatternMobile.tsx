"use client";

interface PatternProps {
  type: 1 | 2 | 3 | 4;
}

const patterns = {
  1: `
    M-100,260
    C220,40 520,520 900,180
    C1180,60 1380,260 1600,100
  `,

  2: `
    M-100,420
    C180,620 420,80 760,320
    C1080,540 1320,120 1600,260
  `,

  3: `
    M-100,180
    C180,120 360,620 700,220
    C980,-40 1280,420 1600,140
  `,

  4: `
    M-100,340
    C220,-60 520,720 880,160
    C1160,20 1400,360 1600,180
  `,
};

export default function StaticPattern({ type }: PatternProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#020617]">
      <svg
        viewBox="0 0 500 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="patternGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        {[...Array(10)].map((_, i) => (
          <path
            key={i}
            d={patterns[type]}
            fill="none"
            stroke="url(#patternGrad)"
            strokeWidth="1.6"
            opacity={1 - i * 0.045}
            transform={`translate(${i * 8} ${i * 14}) scale(${1 - i * 0.03})`}
          />
        ))}
      </svg>
    </div>
  );
}