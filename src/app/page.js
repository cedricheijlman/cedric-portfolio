import FAQ from "@/components/homepage/FAQ";
import { Hero } from "@/components/homepage/hero";
import Work from "@/components/homepage/work";
import Image from "next/image";
import Link from "next/link";
import { Globe, Zap, FileText, Phone } from "lucide-react";

export const metadata = {
  title: "Cedric Tech - Professionele Websites op Maat Laten Maken",
  description:
    "Cedric Tech bouwt websites die resultaat opleveren – snel, op maat en geoptimaliseerd voor groei. Vraag nu jouw gratis strategiegesprek aan.",
  keywords:
    "website laten maken, professionele website, webdesign bureau, website op maat, website bouwer, conversiegerichte website, cedric tech",
  openGraph: {
    title: "Cedric Tech - Professionele Websites op Maat Laten Maken",
    description:
      "Cedric Tech bouwt professionele websites op maat dat jouw merk versterkt en klanten aantrekt. Geen standaard templates, wél resultaat.",
    url: "https://www.cedrictech.nl",
    type: "website",
    siteName: "Cedric Tech",
  },
};

const uspList = [
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Conversiegericht",
    desc: "Elke website is ontworpen om bezoekers om te zetten in klanten.",
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Supersnel online",
    desc: "Binnen enkele weken live, zonder in te leveren op kwaliteit.",
  },
  {
    icon: <FileText className="w-8 h-8 text-white" />,
    title: "100% op maat",
    desc: "Geen templates, maar een unieke uitstraling voor jouw merk.",
  },
  {
    icon: <Phone className="w-8 h-8 text-white" />,
    title: "Persoonlijk contact",
    desc: "Direct contact met jouw webbouwer, altijd snel antwoord.",
  },
];

const portfolioPreview = [
  {
    image: "/armin-at-hoofdscherm.png",
    title: "DJ Portfolio Website",
    desc: "Conversiegerichte portfolio site voor een DJ, met boekingsmodule.",
    link: "/projecten/armin-at-hoofdscherm",
  },
  {
    image: "/atousa-beauty.png",
    title: "Beauty Salon Website",
    desc: "Warme, klantvriendelijke site voor een salon, met online afspraken.",
    link: "/projecten/atousa-beauty",
  },
];

export default function Home() {
  return (
    <section
      role="main"
      aria-label="Homepage van Cedric Tech - specialist in professionele websites op maat"
      className="relative flex flex-col items-center"
    >
      {/* Hero sectie met sterke h1, call-to-action en SEO keywords */}
      <Hero />

      {/* USP/voordelen sectie */}
      <section className="w-full max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {uspList.map((usp, i) => {
          const colors = [
            "from-blue-500 to-blue-400",
            "from-purple-500 to-purple-400",
            "from-green-500 to-green-400",
            "from-pink-500 to-pink-400",
          ];
          return (
            <div
              key={usp.title}
              className={`bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300`}
            >
              <span
                className={`mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${colors[i]}`}
              >
                {usp.icon}
              </span>
              <h3 className="text-lg font-bold mb-2 text-blue-800">
                {usp.title}
              </h3>
              <p className="text-gray-600 text-sm">{usp.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Processectie met uitleg over werkwijze voor vertrouwen en long-tail keywords */}
      <Work />

      {/* Portfolio preview */}
      <section className="w-full max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700 text-center">
          Recente projecten
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {portfolioPreview.map((project) => (
            <Link
              href={project.link}
              key={project.title}
              className="group block bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-56 w-full relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-blue-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-2">{project.desc}</p>
                <span className="text-blue-600 font-semibold inline-flex items-center">
                  Bekijk project &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Veelgestelde vragen: structured FAQ keywords en semantische opbouw */}
      <FAQ />

      {/* Krachtige CTA onderaan */}
      <section className="w-full py-20 bg-gradient-to-r from-slate-900 to-blue-900 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">
          Klaar voor een website die wél werkt?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl text-center">
          Plan een gratis strategiegesprek en ontdek hoe Cedric Tech jouw
          bedrijf online laat groeien.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-white text-slate-900 px-10 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg text-lg"
        >
          Plan een gesprek
        </Link>
      </section>
    </section>
  );
}
