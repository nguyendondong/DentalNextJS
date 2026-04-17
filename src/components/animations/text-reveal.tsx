"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
}

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.03,
      delayChildren: delay,
    },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function TextReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
}: TextRevealProps) {
  const words = children.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        custom={delay}
        className="inline"
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
