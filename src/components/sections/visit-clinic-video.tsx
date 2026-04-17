"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { TextReveal } from "@/components/animations/text-reveal";
import { mockStats } from "@/lib/mock-data";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count < 10 ? `0${count}` : count}
      {suffix}
    </span>
  );
}

export function VisitClinicVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative">
      {/* Video Banner */}
      <div className="relative h-[400px] md:h-[500px] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/visit-clinic-bg.jpg')] bg-cover bg-center bg-fixed opacity-40" />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <FadeInUp>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Phòng khám
            </span>
          </FadeInUp>
          <TextReveal as="p" className="text-3xl md:text-4xl font-bold text-white mt-3" delay={0.1}>
            Chăm Sóc Nha Khoa Toàn Diện Cho Mọi Lứa Tuổi
          </TextReveal>
          <FadeInUp delay={0.25}>
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="mt-8 w-20 h-20 rounded-full bg-accent flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
              aria-label="Phát video"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </FadeInUp>
        </div>
      </div>

      {/* Counter Stats */}
      <div className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mockStats.map((stat, i) => (
              <FadeInUp key={stat.label} delay={i * 0.15}>
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h2>
                  <p className="text-text-muted mt-2 text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-accent"
              aria-label="Đóng"
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1"
              className="w-full h-full rounded-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video phòng khám"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
