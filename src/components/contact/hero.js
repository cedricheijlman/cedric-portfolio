import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

import React from "react";

export function Hero() {
  return (
    <motion.div className="flex flex-col px-4 items-center pt-[200px] max-w-[1000px] mx-auto mb-20">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-70" />
        <div className="relative bg-white p-4 rounded-full shadow-xl border border-gray-100">
          <MessageSquare className="h-8 w-8 text-purple-600" />
        </div>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
        Contact {""}
        <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Opnemen
        </span>{" "}
      </h1>
      <p className="text-xl text-center text-gray-500 mb-10 max-w-3xl mx-auto">
        We horen graag van je! Laten we samenwerken om jouw visie tot leven te
        brengen met creativiteit en innovatie. Neem contact met ons op en bouw
        de toekomst samen.
      </p>
    </motion.div>
  );
}
