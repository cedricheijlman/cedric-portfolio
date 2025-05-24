import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Strategische Sessie",
    description:
      "We duiken diep in jouw merk, doelen en doelgroep. Dit is de fundering voor een digitale ervaring die écht verschil maakt.",
  },
  {
    number: "02",
    title: "Design met Impact",
    description:
      "We creëren een visueel meesterwerk dat niet alleen mooi is, maar jouw merk versterkt én conversies drijft.",
  },
  {
    number: "03",
    title: "Krachtige Ontwikkeling",
    description:
      "Pixel-perfect, razendsnel en geoptimaliseerd voor elk device. Gebouwd met schone code voor topprestaties.",
  },
  {
    number: "04",
    title: "Lancering + Groei",
    description:
      "We lanceren met precisie, meten alles en optimaliseren continu. Resultaat: een website die blijft presteren én groeien.",
  },
];

function ProcessGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
      {processSteps.map((step, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-lg border border-white/30 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full mb-6 shadow-sm font-bold text-lg">
            {step.number}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {step.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function Work() {
  return (
    <section className="w-full py-24 px-6 md:px-12 flex flex-col items-center text-gray-900 bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center leading-tight mb-6">
        Onze werkwijze: Gericht op jouw groei 🚀
      </h2>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-16">
        Geen standaard templates of oppervlakkige oplossingen. Wij bouwen
        strategisch, creatief en conversiegericht – volledig afgestemd op wat
        jij nodig hebt om online te winnen.
      </p>

      <ProcessGrid />
    </section>
  );
}

export default Work;
