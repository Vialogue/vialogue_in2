"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";

/* ================= CONFIG ================= */
const CUBE_COUNT = 140;
const LINE_DISTANCE = 120;
const WAVE_RADIUS = 240;

/* ================= TYPES ================= */
type Cube = {
  id: number;
  x: number;
  y: number;
};

/* ================= CUBE ITEM ================= */
function CubeItem({
  x,
  y,
  mouseX,
  mouseY,
  time,
}: {
  x: number;
  y: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  time: MotionValue<number>;
}) {
  /* Distance MotionValue (manual) */
  const distance = useMotionValue(9999);

  useEffect(() => {
    const unsubX = mouseX.on("change", (mx) => {
      const dx = x - mx;
      const dy = y - mouseY.get();
      distance.set(Math.sqrt(dx * dx + dy * dy));
    });

    const unsubY = mouseY.on("change", (my) => {
      const dx = x - mouseX.get();
      const dy = y - my;
      distance.set(Math.sqrt(dx * dx + dy * dy));
    });

    return () => {
      unsubX();
      unsubY();
    };
  }, [x, y, mouseX, mouseY, distance]);

  /* Hover effects */
  const hoverScale = useTransform(distance, [0, WAVE_RADIUS], [2, 1], {
    clamp: true,
  });

  const hoverOpacity = useTransform(
    distance,
    [0, WAVE_RADIUS],
    [0.8, 0.25],
    { clamp: true }
  );

  /* Idle pulse */
  const idlePulse = useTransform(time, (t) =>
    1 + Math.sin(t / 900 + x * 0.01 + y * 0.01) * 0.15
  );

  const finalScale = useTransform(
    hoverScale,
    (s) => s * idlePulse.get()
  );

  return (
    <motion.div
      className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-[#5D3FD3]"
      style={{
        left: x,
        top: y,
        scale: finalScale,
        opacity: hoverOpacity,
      }}
    />
  );
}

/* ================= LINE ITEM ================= */
function LineItem({
  a,
  b,
  mouseX,
  mouseY,
  time,
}: {
  a: Cube;
  b: Cube;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  time: MotionValue<number>;
}) {
  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2;

  const distance = useMotionValue(9999);

  useEffect(() => {
    const unsubX = mouseX.on("change", (mx) => {
      const dx = midX - mx;
      const dy = midY - mouseY.get();
      distance.set(Math.sqrt(dx * dx + dy * dy));
    });

    const unsubY = mouseY.on("change", (my) => {
      const dx = midX - mouseX.get();
      const dy = midY - my;
      distance.set(Math.sqrt(dx * dx + dy * dy));
    });

    return () => {
      unsubX();
      unsubY();
    };
  }, [midX, midY, mouseX, mouseY, distance]);

  const hoverOpacity = useTransform(
    distance,
    [0, WAVE_RADIUS],
    [0.8, 0.12],
    { clamp: true }
  );

  const idleFlicker = useTransform(time, (t) =>
    0.25 + Math.sin(t / 1200 + midX * 0.01) * 0.1
  );

  const finalOpacity = useTransform(
    hoverOpacity,
    (o) => Math.max(o, idleFlicker.get())
  );

  return (
    <motion.line
      x1={a.x}
      y1={a.y}
      x2={b.x}
      y2={b.y}
      stroke="#5D3FD3"
      style={{ opacity: finalOpacity }}
    />
  );
}

/* ================= MAIN ================= */
export default function CubeBackground() {
  const [mounted, setMounted] = useState(false);
  const [cubes, setCubes] = useState<Cube[]>([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const time = useMotionValue(Date.now());

  useEffect(() => {
    setMounted(true);

    setCubes(
      Array.from({ length: CUBE_COUNT }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
    );

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const tick = () => {
      time.set(Date.now());
      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    tick();

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="absolute inset-0 w-full h-full">
        {cubes.map((a) =>
          cubes.map((b) => {
            if (a.id >= b.id) return null;

            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > LINE_DISTANCE) return null;

            return (
              <LineItem
                key={`${a.id}-${b.id}`}
                a={a}
                b={b}
                mouseX={mouseX}
                mouseY={mouseY}
                time={time}
              />
            );
          })
        )}
      </svg>

      {cubes.map((cube) => (
        <CubeItem
          key={cube.id}
          x={cube.x}
          y={cube.y}
          mouseX={mouseX}
          mouseY={mouseY}
          time={time}
        />
      ))}
    </div>
  );
}