"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import type { Stat } from "@/lib/types";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [isInView, count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      0{suffix}
    </span>
  );
}

interface StatsCounterProps {
  stats: Stat[];
}

export function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,132,181,0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/70 mt-3 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
