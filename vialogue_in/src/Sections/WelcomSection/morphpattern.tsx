"use client";

import { motion } from "framer-motion";

interface MorphPatternProps {
  type: 1 | 2 | 3 | 4;
}

const patterns = {
  1: `
    M-100,420
    C120,-80 320,720 520,140
    C760,-120 980,760 1220,180
    C1360,20 1440,260 1500,80
    L1500,900
    L-100,900 Z
  `,
  2: `
    M-100,180
    C180,620 380,-140 620,340
    C860,760 1080,-120 1320,220
    C1420,320 1470,120 1500,260
    L1500,900
    L-100,900 Z
  `,
  3: `
    M-100,520
    C140,120 340,840 620,160
    C860,-160 1080,720 1320,120
    C1420,40 1470,180 1500,60
    L1500,900
    L-100,900 Z
  `,
  4: `
    M-100,260
    C180,-180 420,780 760,120
    C1020,-120 1260,620 1420,160
    C1460,220 1490,120 1500,200
    L1500,900
    L-100,900 Z
  `,
};

export default function MorphPattern({ type }: MorphPatternProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#020617]">
      <svg
        viewBox="0 0 1500 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="45%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[...Array(42)].map((_, i) => {
          const scale = 1 - i * 0.02;
          const offsetY = i * 10;
          const offsetX = i * 4;

          return (
            <motion.path
              key={i}
              d={patterns[type]}
              animate={{ d: patterns[type] }}
              transition={{
                duration: 2.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              fill="none"
              stroke="url(#heroGrad)"
              strokeWidth="1.15"
              opacity={1 - i * 0.022}
              filter="url(#heroGlow)"
              transform={`translate(${offsetX} ${offsetY}) scale(${scale})`}
            />
          );
        })}
      </svg>
    </div>
  );
}