"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-7xl" role="img" aria-label="tooth">🦷</span>
      </motion.div>

      <motion.h1
        className="text-[120px] font-bold text-primary leading-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-primary mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Trang không tìm thấy
      </motion.h2>

      <motion.p
        className="text-text-muted mt-4 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-primary transition-colors"
        >
          Về Trang Chủ
        </Link>
      </motion.div>
    </main>
  );
}
