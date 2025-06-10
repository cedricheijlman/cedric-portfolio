import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

import React from "react";

function Hero() {
  return (
    <motion.div className="flex flex-col px-4 items-center pt-[200px] h-[500px] max-w-[1000px] mx-auto mb-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
        Contact{" "}
        <span className="text-gradient bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Opnemen
        </span>
      </h1>
      <p className="text-xl text-center text-gray-500 mb-10 max-w-3xl mx-auto">
        We horen graag van je! Laten we samenwerken om jouw visie tot leven te
        brengen met creativiteit en innovatie. Neem contact met ons op en bouw
        de toekomst samen.
      </p>
    </motion.div>
  );
}

export default Hero;
