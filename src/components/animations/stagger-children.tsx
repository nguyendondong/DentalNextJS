"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: "div" | "ul" | "section";
}

const containerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.15,
  as = "div",
}: StaggerChildrenProps) {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={staggerDelay}
      className={className}
    >
      {children}
    </Tag>
  );
}
