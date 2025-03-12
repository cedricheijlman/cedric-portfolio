import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Ontdekking",
    description:
      "We leren je bedrijf, doelen en doelgroep kennen om een strategisch plan te maken.",
  },
  {
    number: "02",
    title: "Ontwerp",
    description:
      "Onze designers creëren een custom look die aansluit bij je merk en conversiedoelen.",
  },
  {
    number: "03",
    title: "Ontwikkeling",
    description:
      "We bouwen je site met schone code, zodat deze snel, responsief en gebruiksvriendelijk is.",
  },
  {
    number: "04",
    title: "Lancering & Optimalisatie",
    description:
      "Na lancering monitoren en optimaliseren we continu voor maximale prestaties.",
  },
];

function ProcessGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[1000px]">
      {processSteps.map((step, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">{step.number}</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
          <p className="text-center text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

function Work() {
  return (
    <section className="flex flex-col items-center w-full  mb-20 bg-black  text-white py-16">
      <h2 className="text-5xl font-bold mb-8">
        <span className="relative z-10 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Jouw
        </span>{" "}
        Project,{" "}
        <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Onze
        </span>{" "}
        Aanpak
      </h2>
      <p className="text-xl text-gray-500 mb-8 text-center">
        Wij volgen een bewezen methodologie om websites te creëren die niet
        alleen er goed uitzien, maar ook meetbare resultaten opleveren.
      </p>

      <ProcessGrid />
    </section>
  );
}

export default Work;
