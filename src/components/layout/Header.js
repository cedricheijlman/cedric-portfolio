"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-2 py-2 transition-colors duration-300 font-medium relative ${
        isActive ? "text-blue-600" : "hover:text-blue-600"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="text-[16px]">{children}</span>
      {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
          aria-hidden="true"
        />
      )}
    </Link>
  );
};

const MobileMenu = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, x: -320 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -320 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed inset-y-0 left-0 w-72 min-h-screen bg-white shadow-2xl !z-50 overflow-y-auto"
      >
        <div className="relative p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-600 hover:text-gray-900 transition"
            aria-label="Sluit menu"
          >
            <X className="h-6 w-6" />
          </button>
          <nav className="mt-8">
            <ul className="space-y-6 font-medium">
              {[
                { label: "Home", href: "/" },
                { label: "Projecten", href: "/projecten" },
                { label: "Over ons", href: "/over-ons" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block text-gray-700 hover:text-blue-600 transition"
                    onClick={onClose}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-12 space-y-6 text-gray-700 text-sm">
            <a
              href="mailto:cjy.heijlman@gmail.com"
              className="flex items-center hover:text-blue-600 transition"
            >
              <Mail className="h-5 w-5 mr-3" />
              cjy.heijlman@gmail.com
            </a>
            <a
              href="tel:+31612479639"
              className="flex items-center hover:text-blue-600 transition"
            >
              <Phone className="h-5 w-5 mr-3" />
              +31 612479639
            </a>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ContactBar = () => (
  <div className="bg-white/70 backdrop-blur-sm py-2 text-xs border-b border-gray-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6 text-gray-600">
          <motion.a
            href="mailto:cjy.heijlman@gmail.com"
            className="flex items-center hover:text-blue-600 transition"
            whileHover={{ scale: 1.1 }}
          >
            <Mail className="h-3 w-3 mr-1" />
            cjy.heijlman@gmail.com
          </motion.a>
          <motion.a
            href="tel:+31612479639"
            className="flex items-center hover:text-blue-600 transition"
            whileHover={{ scale: 1.1 }}
          >
            <Phone className="h-3 w-3 mr-1" />
            +31 612479639
          </motion.a>
        </div>
      </div>
    </div>
  </div>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on a project detail page
  const isProjectDetailPage =
    pathname.startsWith("/projecten/") && pathname !== "/projecten";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine header background based on page type
  const getHeaderBackground = () => {
    if (isProjectDetailPage) {
      // Always white on project detail pages
      return "bg-white/70 backdrop-blur-md shadow-lg border-b border-blue-200";
    }

    if (isScrolled) {
      return "bg-white/70 backdrop-blur-md shadow-lg border-b border-blue-200";
    }

    return "bg-transparent";
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${getHeaderBackground()}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ContactBar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center font-extrabold text-2xl select-none"
            aria-label="Homepagina Cedric Tech"
          >
            <Image
              src="/cedric1.png"
              alt="Cedric Tech"
              width={140}
              height={140}
            />
          </Link>

          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projecten">Projecten</NavLink>
            <NavLink href="/over-ons">Over ons</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Link
              href="/call"
              className="ml-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition text-white px-5 py-2 rounded-full font-semibold shadow-lg text-sm"
            >
              Plan een call
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Open mobiel menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </motion.header>
  );
}
