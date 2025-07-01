"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.div className="flex flex-col px-4 items-center pt-[200px] h-[500px] max-w-[1000px] mx-auto mb-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
        AI {""}
        <span className="text-gradient bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Oplossingen
        </span>
      </h1>
      <p className="text-xl text-center text-gray-500 mb-10 max-w-3xl mx-auto">
        Maak AI toegankelijk voor jouw bedrijf. Wij helpen je met praktische
        AI-oplossingen die direct waarde toevoegen. Van automatisering tot
        slimme analyses – wij maken AI werkend voor jou.
      </p>
    </motion.div>
  );
}
