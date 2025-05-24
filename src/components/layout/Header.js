"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, dropdown = false }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Check if current link is active or current path starts with href for dropdown
  const isActive = dropdown ? pathname.startsWith(href) : pathname === href;

  return (
    <div
      className="relative group"
      onMouseEnter={() => dropdown && setIsOpen(true)}
      onMouseLeave={() => dropdown && setIsOpen(false)}
    >
      <Link href={href} legacyBehavior passHref>
        <a
          className={`flex items-center px-4 py-2 text-gray-700 transition-colors duration-300 font-medium relative
            ${isActive ? "text-blue-600" : "hover:text-blue-600"}
          `}
          aria-current={isActive ? "page" : undefined}
        >
          <span className="text-sm">{children}</span>
          {dropdown && (
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}

          {/* Underline only if active */}
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
        </a>
      </Link>

      {dropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 mt-2 w-52 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
            >
              <div className="py-2">
                <Link href="/services/service1" legacyBehavior passHref>
                  <a className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded">
                    Service 1
                  </a>
                </Link>
                <Link href="/services/service2" legacyBehavior passHref>
                  <a className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded">
                    Service 2
                  </a>
                </Link>
                <Link href="/services/service3" legacyBehavior passHref>
                  <a className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded">
                    Service 3
                  </a>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
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
        className="fixed inset-y-0 left-0 w-72 bg-white shadow-2xl z-50 overflow-y-auto"
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
              <li>
                <Link href="/" legacyBehavior passHref>
                  <a
                    onClick={onClose}
                    className="block text-gray-700 hover:text-blue-600 transition"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" legacyBehavior passHref>
                  <a
                    onClick={onClose}
                    className="block text-gray-700 hover:text-blue-600 transition"
                  >
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services" legacyBehavior passHref>
                  <a
                    onClick={onClose}
                    className="block text-gray-700 hover:text-blue-600 transition"
                  >
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior passHref>
                  <a
                    onClick={onClose}
                    className="block text-gray-700 hover:text-blue-600 transition"
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior passHref>
                  <a
                    onClick={onClose}
                    className="block text-gray-700 hover:text-blue-600 transition"
                  >
                    Contact
                  </a>
                </Link>
              </li>
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-lg border-b border-blue-200"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ContactBar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" legacyBehavior passHref>
            <a className="flex items-center font-extrabold text-2xl select-none">
              <span className="text-gray-900">CEDRIC</span>
              <span className="text-blue-600 ml-1">TECH</span>
            </a>
          </Link>

          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/services" dropdown>
              Services
            </NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <button className="ml-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition text-white px-5 py-2 rounded-full font-semibold shadow-lg text-sm">
              Plan een call
            </button>
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Open menu"
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
