"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TOOTH_ICONS = [
  {
    id: 1,
    src: "/images/icon-hero-theeth-1.svg",
    // top-right area, ~150px down
    className: "absolute top-[18%] right-[0%]",
    delay: 0,
  },
  {
    id: 2,
    src: "/images/icon-hero-theeth-2.svg",
    // mid-left
    className: "absolute top-[45%] left-[0%]",
    delay: 0.4,
  },
  {
    id: 3,
    src: "/images/icon-hero-theeth-3.svg",
    // bottom-right
    className: "absolute bottom-[20%] right-[6%]",
    delay: 0.8,
  },
];

/** Circular tooth icon with hover fill effect (matches original CSS ::before scale trick) */
function ToothIconBox({
  src,
  className,
  delay,
}: {
  src: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`${className} w-[80px] h-[80px] rounded-full cursor-pointer z-10`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover="hover"
    >
      {/* Outer ring - white bg + shadow */}
      <motion.div
        className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden"
        style={{ boxShadow: "0px 0px 40px 0px rgba(14,56,76,0.15)" }}
        variants={{
          hover: { backgroundColor: "transparent" },
        }}
        initial={{ backgroundColor: "#ffffff" }}
        transition={{ duration: 0.3 }}
      >
        {/* Fill circle that scales up on hover (the ::before equivalent) */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary"
          variants={{
            hover: { scale: 1 },
          }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10"
          variants={{
            hover: { filter: "brightness(0) invert(1)" },
          }}
          initial={{ filter: "none" }}
          transition={{ duration: 0.25 }}
        >
          <Image src={src} alt="Dental icon" width={48} height={48} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/** Dr. Clara Lee card with horizontal float animation */
function DoctorCard() {
  return (
    <motion.div
      className="absolute bottom-[10%] left-0 z-20 flex items-center gap-2 bg-white rounded-2xl p-2 pr-4"
      style={{ boxShadow: "0px 0px 40px 0px rgba(0,0,0,0.13)" }}
      initial={{ opacity: 0, x: -30 }}
      animate={{
        opacity: 1,
        x: [0, 20, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: 0.5 },
        x: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        },
      }}
    >
      <div className="w-[64px] h-[64px] rounded-xl overflow-hidden shrink-0">
        <Image
          src="/images/dantist-doctor-img.jpg"
          alt="Dr. Clara Lee"
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <p className="font-semibold text-primary text-sm capitalize leading-tight">
          dr. clara lee
        </p>
        <p className="text-text-muted text-xs capitalize">dantist</p>
      </div>
    </motion.div>
  );
}

/** Star icon with pulse scale animation */
function StarIcon() {
  return (
    <motion.div
      className="absolute top-[5%] left-[8%] z-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: [1, 0.8, 1],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: {
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        },
      }}
    >
      <Image src="/images/icon-star.svg" alt="" width={80} height={80} />
    </motion.div>
  );
}

export function HeroFloatingIcons() {
  return (
    <>
      {TOOTH_ICONS.map((icon) => (
        <ToothIconBox
          key={icon.id}
          src={icon.src}
          className={icon.className}
          delay={icon.delay}
        />
      ))}
      <DoctorCard />
      <StarIcon />
    </>
  );
}
