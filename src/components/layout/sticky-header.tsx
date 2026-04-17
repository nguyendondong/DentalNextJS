"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./mobile-menu";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface StickyHeaderProps {
  logo: string;
  navItems: NavItem[];
}

export function StickyHeader({ logo, navItems }: StickyHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY > 600) {
      setIsSticky(true);
      setIsHidden(currentY > lastScrollY && currentY > 200);
    } else {
      setIsSticky(false);
      setIsHidden(false);
    }
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <nav className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative shrink-0">
              <Image
                src={logo}
                alt="Myra Dental"
                width={150}
                height={48}
                className="h-10 lg:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <DesktopNav items={navItems} />

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-accent text-white rounded-full px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-primary transition-colors"
              >
                Đặt lịch hẹn
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-primary"
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </>
  );
}

function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <ul className="hidden lg:flex items-center gap-1">
      {items.map((item) => (
        <li key={item.href} className="relative group">
          <Link
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            {item.label}
            {item.children && (
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                className="inline ml-1"
              >
                <path
                  d="M2 4l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </Link>

          {item.children && (
            <ul className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-dark-divider py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="block px-5 py-2.5 text-sm text-text-muted hover:text-accent hover:bg-secondary transition-colors"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
