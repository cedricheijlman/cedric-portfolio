"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const NavLink = ({ href, children, dropdown = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <motion.a
        href={href}
        className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        <span className="text-sm font-medium">{children}</span>
        {dropdown && (
          <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        )}
      </motion.a>
      {dropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
            >
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Option 3
                </a>
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
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50 overflow-y-auto"
      >
        <div className="p-6">
          <button onClick={onClose} className="absolute top-4 right-4">
            <X className="h-6 w-6 text-gray-500" />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-8 space-y-4">
            <a
              href="mailto:cjy.heijlman@gmail.com"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Mail className="h-5 w-5 mr-2" />
              cjy.heijlman@gmail.com
            </a>
            <a
              href="tel:+31612479639"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Phone className="h-5 w-5 mr-2" />
              +31 612479639
            </a>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ContactBar = () => (
  <div className="bg-gray-100 py-2 text-xs">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <motion.a
            href="mailto:cjy.heijlman@gmail.com"
            className="text-gray-600 hover:text-gray-900 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="h-3 w-3 mr-1" />
            cjy.heijlman@gmail.com
          </motion.a>
          <motion.a
            href="tel:+31612479639"
            className="text-gray-600 hover:text-gray-900 flex items-center"
            whileHover={{ scale: 1.05 }}
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ContactBar />
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-center">
              <Link href="/" className="flex items-center">
                <motion.span
                  className="text-2xl mr-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👑
                </motion.span>
                <span className="font-bold text-xl text-gray-900">
                  CEDRIC<span className="text-gray-500">TECH</span>
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-4 items-center">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services" dropdown>
                Services
              </NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>{" "}
              <button className="bg-black hidden md:block text-white px-4 text-[14px] py-[7px] mb-[4px] rounded font-medium">
                Plan een call
              </button>
            </nav>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
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
