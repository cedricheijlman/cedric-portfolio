"use client";
import React from "react";
import { Hero } from "../../components/contact/hero";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Mail, Phone } from "lucide-react";

function ContactPage() {
  return (
    <section className="flex flex-col w-full items-center">
      <Hero />
      <div className="flex justify-between w-full max-w-[1000px]"></div>
    </section>
  );
}

export default ContactPage;
