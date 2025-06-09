"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50 min-h-screen pb-24 px-6 sm:px-12 lg:px-32 relative overflow-hidden">
      <motion.div className="flex flex-col px-4 items-center pt-[200px] h-[500px] max-w-[1000px] mx-auto mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
          Over {""}
          <span className="text-gradient bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Ons
          </span>
        </h1>
        <p className="text-xl text-center text-gray-500 mb-10 max-w-3xl mx-auto">
          Maak kennis met Cedric Tech: wij creëren websites die niet alleen mooi
          zijn, maar vooral resultaat opleveren. Of je nu leads wilt genereren,
          online wilt verkopen of jouw merk wilt versterken – wij bouwen jouw
          digitale fundament.
        </p>
      </motion.div>

      <section className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Missie */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-blue-500"
        >
          <div className="flex items-center mb-4 text-blue-600">
            <Sparkles className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Onze Missie</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Onze missie is helder: we helpen ambitieuze ondernemers en bedrijven
            aan een krachtige online aanwezigheid. Geen standaardoplossingen,
            maar websites die converteren, overtuigen en bijdragen aan jouw
            groei.
          </p>
        </motion.div>

        {/* Uniek verschil */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-purple-500"
        >
          <div className="flex items-center mb-4 text-purple-600">
            <Eye className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Wat ons anders maakt</h2>
          </div>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Wij denken commercieel: resultaat gaat vóór techniek</li>
            <li>
              Design op maat: elke website straalt jouw merkidentiteit uit
            </li>
            <li>Conversiegericht en geoptimaliseerd voor Google (SEO)</li>
            <li>Snelle laadtijden en vlekkeloze mobiele ervaring</li>
          </ul>
        </motion.div>

        {/* Werkwijze */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-green-500"
        >
          <div className="flex items-center mb-4 text-green-600">
            <Code2 className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Hoe wij werken</h2>
          </div>
          <ol className="list-decimal pl-5 text-gray-700 space-y-2">
            <li>
              <strong>1. Strategiegesprek:</strong> we ontdekken wat jouw
              bedrijf nodig heeft
            </li>
            <li>
              <strong>2. Maatwerkdesign:</strong> een stijlvol en overtuigend
              ontwerp
            </li>
            <li>
              <strong>3. Ontwikkeling:</strong> supersnel, responsive en
              SEO-klaar
            </li>
            <li>
              <strong>4. Lancering & groei:</strong> we meten, optimaliseren en
              bouwen verder
            </li>
          </ol>
        </motion.div>

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-pink-500 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center mb-4 text-pink-600">
              <Rocket className="w-6 h-6 mr-2" />
              <h2 className="text-2xl font-bold">Klaar voor resultaat?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Laat jouw website voor je werken. Plan een gratis strategiegesprek
              in en ontdek hoe we jouw online succes kunnen versnellen.
            </p>
          </div>

          <Link href="/contact" legacyBehavior>
            <a className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white text-base font-semibold rounded-full bg-gradient-to-br from-blue-500 to-purple-500 hover:brightness-110 transition">
              Plan een gesprek <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
