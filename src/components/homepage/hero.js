"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
          style={{ top: particle.top, left: particle.left }}
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
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <header
        role="banner"
        className="relative overflow-hidden bg-white px-6 pt-32 mt-16 mb-32"
        aria-label="Professionele websites op maat laten maken door Cedric Tech"
      >
        <FloatingParticles />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <motion.div
            className="text-center flex justify-center items-center font-semibold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-36 mb-4 overflow-hidden flex items-center justify-center">
              <Image
                src="/cedric1.png"
                alt="Cedric Tech"
                width={400}
                height={400}
                className="h-fit w-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.h1
            className="mb-6 font-bold tracking-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            tabIndex={-1}
          >
            Professionele Website <br />
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Laten Maken op Maat
              </span>
              <motion.span
                className="absolute inset-x-0 bottom-0 h-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Wij bouwen op maat gemaakte websites die converteren. Geen
            templates, maar digitale oplossingen afgestemd op jouw doelen. Plan
            een gratis gesprek.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={() => {
                setShowModal(true);
                setLoading(true);
              }}
              className="group relative overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-500 px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Plan een gratis strategiegesprek"
            >
              <span className="relative z-10 flex items-center gap-2">
                Plan een strategiegesprek{" "}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  aria-hidden="true"
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </span>
            </button>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
            aria-hidden="true"
          >
            <div className="mx-auto h-16 w-0.5 bg-gradient-to-b from-gray-300 to-transparent" />
          </motion.div>
        </motion.div>
      </header>

      {/* Cal.com modal popup */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Boek een strategiegesprek"
        >
          <div className="relative w-[95%] md:w-[75%] bg-black rounded-xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-7 lg:left-4  text-gray-500 hover:text-zinc-700 z-10"
              aria-label="Sluit popup"
            >
              <ArrowRight className="rotate-180 w-8 h-8" />
            </button>

            {/* Loader */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-0">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {/* Iframe */}
            <iframe
              src="https://cal.com/cedrictech/30min?locale=nl"
              className="w-full h-[80vh]"
              frameBorder="0"
              title="Strategiegesprek Cedric Tech"
              allow="camera; microphone; autoplay; encrypted-media"
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};
