import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

import React from "react";

function Hero() {
  return (
    <motion.div className="flex flex-col px-4 items-center pt-[200px] h-[500px] max-w-[1000px] mx-auto mb-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
        Onze{" "}
        <span className="text-gradient bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Projecten
        </span>
      </h1>
      <p className="text-xl text-center text-gray-500 mb-10 max-w-3xl mx-auto">
        Ontdek succesvolle projecten van CEDRICTECH. Van webdesign tot
        maatwerkoplossingen – resultaatgericht, modern en op maat voor elke
        klant.
      </p>
    </motion.div>
  );
}

export default Hero;
