import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Brain,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  Star,
  HeartHandshake,
  TrendingUp,
  Cpu,
  Target,
  Clock,
  DollarSign,
} from "lucide-react";
import Hero from "@/components/ai/Hero";

const aiServices = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: "AI Automatisering",
    desc: "Automatiseer repetitieve taken en bespaar kostbare tijd.",
  },
  {
    icon: <Target className="w-8 h-8 text-purple-500" />,
    title: "Slimme Analyse",
    desc: "Ontdek patronen en kansen in jouw data.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: "Klantinteractie",
    desc: "Chatbots en virtuele assistenten voor 24/7 service.",
  },
];

const aiBenefits = [
  {
    title: "Tijdsbesparing",
    desc: "Automatiseer taken die nu uren kosten",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Betere beslissingen",
    desc: "Data-gedreven inzichten voor je business",
    icon: <Brain className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Klanttevredenheid",
    desc: "Snellere en persoonlijkere service",
    icon: <HeartHandshake className="w-6 h-6 text-pink-500" />,
  },
  {
    title: "Kostenbesparing",
    desc: "Efficiëntere processen, lagere kosten",
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
  },
];

const faqs = [
  {
    q: "Wat is AI en wat kan het voor mijn bedrijf betekenen?",
    a: "AI (kunstmatige intelligentie) automatiseert taken, analyseert data en helpt je slimmer te werken. We adviseren je graag over de mogelijkheden.",
  },
  {
    q: "Is AI alleen voor grote bedrijven?",
    a: "Nee, juist ook voor MKB en ZZP zijn er veel praktische AI-oplossingen die snel resultaat opleveren.",
  },
  {
    q: "Hoe snel kan ik starten met AI?",
    a: "Binnen enkele weken kun je al profiteren van slimme automatisering of een chatbot. We begeleiden je van idee tot livegang.",
  },
  {
    q: "Is AI veilig en privacyvriendelijk?",
    a: "Ja, wij werken volgens de strengste privacy- en beveiligingsnormen. Jouw data blijft altijd beschermd.",
  },
  {
    q: "Kan ik klein beginnen met AI?",
    a: "Absoluut! We starten vaak met een pilot of proof-of-concept, zodat je snel resultaat ziet zonder grote investering.",
  },
];

export default function AiPage() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50 min-h-screen pb-24 relative overflow-hidden">
      {/* HERO */}
      <Hero />

      {/* INTRO SECTIE - FULL WIDTH */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-50 to-purple-50 mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
            AI als groeiversneller voor jouw bedrijf
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Wij maken AI toegankelijk en praktisch. Geen ingewikkelde
            technologie, maar slimme oplossingen die direct waarde toevoegen aan
            jouw organisatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <Clock className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold text-blue-700">Bespaar tijd</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <DollarSign className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold text-green-700">
                Verlaag kosten
              </span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-semibold text-purple-700">
                Verhoog omzet
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AI SERVICES - CARDS LAYOUT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Wat kunnen wij voor jou betekenen?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bieden praktische AI-oplossingen die direct impact hebben op jouw
            bedrijf.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {aiServices.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE SECTION - SPLIT LAYOUT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
              Waarom AI nu belangrijker is dan ooit
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              In een wereld waar efficiëntie en klanttevredenheid cruciaal zijn,
              kan AI het verschil maken. Wij helpen je de juiste AI-oplossingen
              te implementeren die écht werken.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">
                    24/7 beschikbaarheid
                  </h4>
                  <p className="text-gray-600 text-sm">
                    AI werkt wanneer jij slaapt
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">
                    Foutloze uitvoering
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Geen menselijke fouten meer
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">
                    Schaalbare groei
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Groeit mee met jouw business
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 w-full max-w-md">
              <div className="text-center">
                <Brain className="w-32 h-32 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-blue-800 mb-3">
                  AI voor iedereen
                </h3>
                <p className="text-blue-700 text-lg">
                  Begrijpelijk, toepasbaar, waardevol
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - TIMELINE STYLE */}
      <section className="w-full py-20 bg-white mb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
              Onze aanpak
            </h2>
            <p className="text-lg text-gray-600">
              Van idee tot implementatie in 4 duidelijke stappen
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Advies & Analyse",
                  desc: "We analyseren jouw behoeften en identificeren AI-kansen",
                  icon: <Brain className="w-6 h-6" />,
                },
                {
                  step: "2",
                  title: "Strategie & Planning",
                  desc: "Ontwikkelen van een heldere AI-roadmap op maat",
                  icon: <Target className="w-6 h-6" />,
                },
                {
                  step: "3",
                  title: "Implementatie",
                  desc: "Bouwen en testen van de AI-oplossing",
                  icon: <Cpu className="w-6 h-6" />,
                },
                {
                  step: "4",
                  title: "Support & Groei",
                  desc: "Training, support en doorlopende optimalisatie",
                  icon: <TrendingUp className="w-6 h-6" />,
                },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className={`flex items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "md:pr-16 md:pl-0 pl-8" : "md:pl-16 md:pr-0 pr-8"}`}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          {item.step}
                        </div>
                        <h3 className="text-xl font-bold text-blue-800">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-16 h-16 bg-white rounded-full shadow-lg border-4 border-blue-500 items-center justify-center z-10">
                    {item.icon}
                  </div>
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "md:pl-8 md:pr-0 pr-8" : "md:pr-8 md:pl-0 pl-8"}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BANNER - SIMPLIFIED */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-50 to-purple-50 mb-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8">
          <h3 className="text-2xl font-bold mb-8 text-blue-700">
            Waarom kiezen voor ons?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">
                Veilig & betrouwbaar
              </h4>
              <p className="text-gray-600 text-sm">
                Jouw data blijft altijd beschermd
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-yellow-500 mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">
                Persoonlijk advies
              </h4>
              <p className="text-gray-600 text-sm">Gratis strategiegesprek</p>
            </div>
            <div className="flex flex-col items-center">
              <HeartHandshake className="w-12 h-12 text-pink-500 mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">
                Praktische oplossingen
              </h4>
              <p className="text-gray-600 text-sm">AI die écht werkt</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - ACCORDION STYLE */}
      <section className="bg-gray-50 py-20 mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Veelgestelde vragen over AI
            </h2>
            <p className="text-gray-600 text-lg">
              Antwoorden op de meest voorkomende vragen
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-800">
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - FULL WIDTH */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Klaar voor een slimme volgende stap?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Plan een gratis adviesgesprek en ontdek hoe AI jouw bedrijf kan
            versnellen.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-slate-900 px-10 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg text-lg"
            >
              Plan een gesprek
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/websites"
              className="inline-flex items-center bg-transparent text-white border-2 border-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg"
            >
              Bekijk websites
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
