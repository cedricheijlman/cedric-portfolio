"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (calendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/cjy-heijlman/30min",
      });
    } else {
      alert(
        "Calendly is nog aan het laden. Probeer het over een paar seconden opnieuw."
      );
    }
  };

  return (
    <header
      role="banner"
      className="relative overflow-hidden bg-white px-6 pt-32 mt-16 mb-32"
      aria-label="Introductie - CEDRIC TECH Digitale Oplossingen"
    >
      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl text-center"
      >
        <motion.div
          className="mb-4 text-xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          aria-label="Bedrijfsnaam en specialisatie"
        >
          CEDRIC{" "}
          <span className="text-gradient bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
            TECH
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 font-bold tracking-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          tabIndex={-1}
        >
          A-Z Digitale Oplossingen: <br />
          <span className="relative">
            <span className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Websites die het Verschil Maken
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
          aria-label="Beschrijving van digitale oplossingen"
        >
          Geen standaard templates, maar een op maat gemaakte website die
          perfect aansluit bij uw bedrijf én meer klanten oplevert.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={openCalendly}
            className="group relative overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-500 px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Plan een strategiegesprek via Calendly"
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
  );
};
