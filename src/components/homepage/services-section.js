"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  ShoppingCart,
  Palette,
  LayoutGrid,
  Sparkles,
  Code,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={cardRef}
      className="group relative h-full"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.2 },
        },
      }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/30">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black to-transparent opacity-80" />
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
        />

        <div className="relative mb-6 inline-flex items-center justify-center">
          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} blur-xl opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
          />
          <motion.div
            className="relative rounded-xl bg-black/50 p-4 backdrop-blur-xl"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <service.icon className="h-8 w-8 text-white" />
          </motion.div>
        </div>

        <h3 className="mb-4 text-2xl font-bold">
          <span
            className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
          >
            {service.title}
          </span>
        </h3>
        <p className="text-base leading-relaxed text-gray-300">
          {service.description}
        </p>

        <motion.button
          className={`mt-6 px-4 py-2 rounded-full text-sm font-semibold text-white ${service.gradient} transition-all duration-300 hover:scale-105`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Service
          <ArrowRight className="ml-2 h-4 w-4 inline" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export function ServicesSection() {
  const services = [
    {
      icon: ShoppingCart,
      title: "eCommerce Excellence",
      description:
        "Elevate your online store with cutting-edge solutions. From seamless user experiences to robust backend systems, we'll transform your eCommerce presence.",
      gradient: "from-purple-600 via-pink-600 to-red-600",
    },
    {
      icon: Code,
      title: "Full-Stack Mastery",
      description:
        "End-to-end web solutions that perform. Our full-stack expertise ensures your applications are scalable, secure, and lightning-fast.",
      gradient: "from-blue-600 via-teal-600 to-emerald-600",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Dominance",
      description:
        "Amplify your online presence with data-driven marketing strategies. We'll help you reach, engage, and convert your target audience effectively.",
      gradient: "from-orange-600 via-amber-600 to-yellow-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design Innovation",
      description:
        "Create captivating user experiences that leave a lasting impression. Our designs blend aesthetics with functionality for maximum impact.",
      gradient: "from-pink-600 via-rose-600 to-red-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-20 px-6 md:px-12 lg:px-16">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(54,54,57,0.8),rgba(0,0,0,1))]" />
        <div className="absolute -top-40 left-0 right-0 h-96 bg-gradient-to-b from-violet-500/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 text-center text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Redefine Reality
          </span>
          <span className="absolute -right-4 -top-4 text-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              🚀
            </motion.div>
          </span>
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Animated orb */}
      <div className="pointer-events-none absolute bottom-10 right-10 h-40 w-40">
        <motion.div
          className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
