"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-white via-blue-100 to-blue-50 text-blue-900 pt-14 pb-10 mt-24 overflow-hidden">
      {/* Subtiele bovenrand-glow */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-40 blur-lg" />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-10 md:gap-0">
          {/* Logo & tagline */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0 flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="flex items-center font-extrabold text-2xl select-none mb-4"
              aria-label="Homepagina Cedric Tech"
            >
              <Image
                src="/cedric1.png"
                alt="Cedric Tech"
                width={140}
                height={140}
                priority
              />
            </Link>
            <p className="text-blue-800 text-base max-w-xs text-center md:text-left mt-2">
              Elevating businesses through innovative digital solutions.
            </p>
          </div>
          {/* Links */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0 flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-4 tracking-wide uppercase text-blue-600">
              Snel naar
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projecten" className="footer-link">
                  Projecten
                </Link>
              </li>
              <li>
                <Link href="/websites" className="footer-link">
                  Websites
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="footer-link">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Socials */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold mb-4 tracking-wide uppercase text-purple-600">
              Connect
            </h4>
            <div className="flex space-x-5 mb-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.15 }}
                className="transition"
              >
                <Facebook className="w-7 h-7 text-blue-600 hover:text-purple-600 transition" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15 }}
                className="transition"
              >
                <Twitter className="w-7 h-7 text-blue-600 hover:text-purple-600 transition" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15 }}
                className="transition"
              >
                <Instagram className="w-7 h-7 text-blue-600 hover:text-purple-600 transition" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15 }}
                className="transition"
              >
                <Linkedin className="w-7 h-7 text-blue-600 hover:text-purple-600 transition" />
              </motion.a>
            </div>
            <p className="text-blue-800 text-sm text-center md:text-right max-w-xs">
              Volg ons voor inspiratie, tips en nieuws.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-200 text-center">
          <p className="text-blue-600 text-xs tracking-wide">
            &copy; 2025 CEDRICTECH. All rights reserved.
          </p>
        </div>
      </div>
      <style jsx>{`
        .footer-link {
          @apply relative text-blue-100 font-medium uppercase tracking-wide px-2 py-1 transition;
        }
        .footer-link:after {
          content: "";
          display: block;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%);
          border-radius: 2px;
          transition: width 0.3s;
          margin-top: 2px;
        }
        .footer-link:hover:after {
          width: 100%;
        }
        .footer-link:hover {
          color: #fff;
        }
      `}</style>
    </footer>
  );
}
