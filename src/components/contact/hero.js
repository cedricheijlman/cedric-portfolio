import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

import React from "react";

export function Hero() {
  return (
    <motion.div className="flex flex-col items-center pt-[200px] max-w-[1000px] mx-auto mb-20">
      <motion.div className="absolute inset-0 z-0" style={{ y: 0, opacity: 1 }}>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200/50 mix-blend-multiply blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-200/50 mix-blend-multiply blur-3xl" />
      </motion.div>

      <motion.div className="absolute inset-0 z-10" style={{ y: 0 }}>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full border-4 border-purple-200 opacity-30" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-lg border-4 border-pink-200 opacity-30" />
      </motion.div>

      <div className="relative mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-70" />
        <div className="relative bg-white p-4 rounded-full shadow-xl border border-gray-100">
          <MessageSquare className="h-8 w-8 text-purple-600" />
        </div>
      </div>
      <h1 className="text-7xl font-bold text-center mb-6">
        Lets Create Something{" "}
        <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Amazing
        </span>
      </h1>
      <p className="text-xl text-center text-gray-500 mb-10 max-w-3xl mx-auto">
        Im excited to hear about your project. Lets collaborate to bring your
        vision to life with creativity, precision, and innovation.
      </p>
    </motion.div>
  );
}
