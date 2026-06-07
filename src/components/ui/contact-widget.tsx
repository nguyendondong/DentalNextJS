"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactWidgetProps {
  phone: string;
  zaloUrl: string;
  messengerUrl: string;
}

const ZALO_ICON = (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="https://img.icons8.com/color/480/zalo.png" alt="Zalo" width={34} height={34} />
);

const MESSENGER_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.828 1.338 5.35 3.438 7.04V22l3.168-1.744C9.498 20.42 10.725 20.6 12 20.6c5.523 0 10-4.145 10-9.341C22 6.145 17.523 2 12 2zm1.05 12.58-2.545-2.716-4.97 2.716 5.462-5.8 2.609 2.716 4.906-2.716-5.462 5.8z" />
  </svg>
);

const PHONE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
  </svg>
);

const spring = { type: "spring", stiffness: 380, damping: 22 } as const;

export function ContactWidget({ phone, zaloUrl, messengerUrl }: ContactWidgetProps) {
  const [open, setOpen] = useState(false);

  const channels = [
    { label: "Zalo", href: zaloUrl, color: "#ffffff", icon: ZALO_ICON },
    { label: "Messenger", href: messengerUrl, color: "#0099FF", icon: MESSENGER_ICON },
    { label: "Gọi ngay", href: `tel:${phone}`, color: "#25D366", icon: PHONE_ICON },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Channel list */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col items-end gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {channels.map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
                initial={{ x: 24, scale: 0.7, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                exit={{ x: 24, scale: 0.7, opacity: 0 }}
                transition={{ ...spring, delay: i * 0.05 }}
              >
                {/* Label */}
                <span className="bg-white text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {ch.label}
                </span>
                {/* Icon button */}
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg border border-dark-divider"
                  style={{ backgroundColor: ch.color }}
                >
                  {ch.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <div className="relative">
        {/* Pulse ring – only when closed */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full bg-accent"
            animate={{ scale: [1, 1.55, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Liên hệ với chúng tôi"
          aria-expanded={open}
          className="relative w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-colors duration-300"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.svg
                key="close"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                width="22"
                height="22"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={spring}
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={spring}
              >
                <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
