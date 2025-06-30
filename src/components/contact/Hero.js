import { ArrowRight, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import React from "react";

function Hero() {
  return (
    <motion.div className="flex flex-col px-4 items-center pt-[200px] pb-20 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
          Laten we uw{" "}
          <span className="text-gradient bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
            visie realiseren
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-center text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Klaar om uw online aanwezigheid naar het volgende niveau te tillen?
          Neem contact op voor een gratis strategiegesprek en ontdek hoe wij uw
          bedrijf kunnen laten groeien.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
