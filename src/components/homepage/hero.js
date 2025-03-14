"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random positions only on the client-side
    const particleArray = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-32 mt-16 mb-32">
      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-4 inline-block"
        >
          <motion.span
            className="text-4xl"
            animate={{
              rotate: [0, 10, -10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            👑
          </motion.span>
        </motion.div>

        <motion.div
          className="mb-4 text-xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          CEDRIC <span className="text-gray-500">TECH</span>
        </motion.div>

        <motion.h1
          className="mb-6  font-bold tracking-tight  text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          A-Z Digitale Oplossingen: <br />
          <span className="relative">
            <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Websites die het Verschil Maken
            </span>
            <motion.span
              className="absolute inset-x-0 bottom-0 h-3 rounded-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 blur-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Geen standaard templates, maar een op maat gemaakte website die
          perfect aansluit bij uw bedrijf én meer klanten oplevert.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <button className="relative overflow-hidden rounded-full bg-black px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800">
            <span className="relative z-10 flex items-center gap-2">
              Plan een strategiegesprek{" "}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <div className="mx-auto h-16 w-0.5 bg-gradient-to-b from-gray-300 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
