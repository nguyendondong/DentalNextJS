"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
}

export function ImageReveal({
  children,
  className,
  delay = 0,
  direction = "left",
}: ImageRevealProps) {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={`relative overflow-hidden ${className ?? ""}`}>{children}</div>;
  }

  const originX = direction === "left" ? "left" : "right";

  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.01, delay: delay + 0.4 } },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-accent z-10"
        style={{ transformOrigin: originX }}
        variants={{
          hidden: { scaleX: 1 },
          visible: { scaleX: 0, transition: { duration: 0.7, delay, ease: [0.77, 0, 0.175, 1] } },
        }}
      />
    </motion.div>
  );
}
