import React from "react";
import WebsitesHero from "@/components/websites/Hero";
import {
  CheckCircle,
  TrendingUp,
  Users,
  Smartphone,
  Zap,
  ArrowRight,
  ShieldCheck,
  Star,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const uspJourney = [
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-300" />,
    title: "Wereldniveau design",
    desc: "Modern, snel en uniek voor jouw merk.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-green-300" />,
    title: "Conversiegericht",
    desc: "Meer leads, meer klanten, meer omzet.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-300" />,
    title: "Klantgericht maatwerk",
    desc: "Jouw doelen staan centraal.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-pink-300" />,
    title: "SEO & mobiel",
    desc: "Altijd vindbaar en perfect op elk device.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-300" />,
    title: "Supersnel online",
    desc: "Razendsnelle laadtijden, geen frustratie.",
  },
];

const projecten = [
  {
    title: "DJ Portfolio Website",
    img: "/armin-at-hoofdscherm.png",
    desc: "Conversiegerichte portfolio site voor een DJ, met boekingsmodule.",
  },
  {
    title: "Beauty Salon Website",
    img: "/atousa-beauty.png",
    desc: "Warme, klantvriendelijke site voor een salon, met online afspraken.",
  },
];

export default function WebsitesPage() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50 min-h-screen pb-24 relative overflow-hidden">
      {/* HERO */}
      <WebsitesHero />
      {/* TAGLINE */}
      <div className="max-w-2xl mx-auto text-center -mt-10 mb-16">
        <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm shadow-sm">
          Op maat gemaakt. Commercieel. Wereldklasse.
        </span>
      </div>
      {/* INTRO MET VISUAL */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-24 px-4 sm:px-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-700">
            Jouw website als groeimachine
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Wij bouwen geen standaard websites, maar digitale groeimotoren. Elk
            project is uniek, volledig afgestemd op jouw business, doelgroep en
            doelen. Geen templates, maar maatwerk dat werkt.
          </p>
          <ul className="space-y-2 text-gray-600 text-base">
            <li>
              <span className="font-semibold text-blue-600">✓</span> Persoonlijk
              traject van strategie tot livegang
            </li>
            <li>
              <span className="font-semibold text-blue-600">✓</span> Altijd
              gericht op resultaat en conversie
            </li>
            <li>
              <span className="font-semibold text-blue-600">✓</span> Direct
              contact, korte lijnen, snelle oplevering
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/websites-1.png"
            alt="Webdesign visual"
            width={800}
            height={800}
            className="w-full object-cover"
            priority
          />
        </div>
      </section>
      {/* USP JOURNEY - DONKER */}
      <section className="w-full py-16 bg-gradient-to-br from-blue-900 via-blue-700 to-slate-800 mb-24">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">
            Waarom kiezen voor Cedric Tech?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0">
            {uspJourney.map((usp, idx) => (
              <div
                key={usp.title}
                className="flex flex-col items-center flex-1 min-w-[160px] relative"
              >
                <div className="bg-slate-800 rounded-full shadow-lg p-4 mb-4 border-t-4 border-blue-900">
                  {usp.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-1 text-center">
                  {usp.title}
                </h3>
                <p className="text-slate-300 text-sm text-center mb-2">
                  {usp.desc}
                </p>
                {idx < uspJourney.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-blue-800 to-purple-800 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTEN SLIDER */}
      <section className="max-w-7xl mx-auto mb-24 px-4 sm:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-blue-700">
          Voorbeelden van ons werk
        </h2>
        <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 justify-center md:justify-center">
          {projecten.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col min-w-[320px] max-w-[340px] hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={v.img}
                alt={v.title}
                width={340}
                height={224}
                className="w-full h-56 object-cover"
              />
              <div className="p-7 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-bold mb-2 text-blue-700">
                  {v.title}
                </h3>
                <p className="text-gray-600 mb-4">{v.desc}</p>
                <Link
                  href="/projecten"
                  className="text-blue-600 font-semibold hover:underline mt-auto"
                >
                  Bekijk project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* TRUST BANNER */}
      <section className="w-full py-12 bg-gradient-to-r from-blue-50 to-purple-50 mb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-8 justify-items-center">
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="text-lg font-bold text-blue-700 mb-1">
              100% Tevredenheidsgarantie
            </h3>
            <p className="text-gray-600 text-sm">
              We stoppen pas als jij blij bent met het resultaat.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <Star className="w-8 h-8 text-yellow-500 mb-2" />
            <h3 className="text-lg font-bold text-blue-700 mb-1">
              5/5 Klantwaardering
            </h3>
            <p className="text-gray-600 text-sm">
              Klanten beoordelen ons gemiddeld met een 5-sterren rating.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <HeartHandshake className="w-8 h-8 text-pink-500 mb-2" />
            <h3 className="text-lg font-bold text-blue-700 mb-1">
              Persoonlijk & betrokken
            </h3>
            <p className="text-gray-600 text-sm">
              Direct contact, korte lijnen en altijd eerlijk advies.
            </p>
          </div>
        </div>
      </section>
      {/* CALL TO ACTION */}
      <section className="max-w-2xl mx-auto text-center mt-20 px-4 sm:px-8 flex justify-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 shadow-xl w-full max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar voor een website die wél werkt?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Plan een gratis strategiegesprek en ontdek hoe wij jouw online
            succes kunnen versnellen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-white text-blue-700 hover:bg-blue-50 transition shadow-lg"
          >
            Plan een gesprek <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
