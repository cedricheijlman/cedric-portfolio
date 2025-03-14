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
    <div className="grid grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-4 gap-8 ">
      {processSteps.map((step, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-lg shadow-lg flex flex-col"
        >
          <div className="w-16 h-16 text-white rounded-full flex justify-center mb-1">
            <span className="text-6xl font-bold text-blue-100">
              {step.number}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-black">
            {step.title}
          </h3>
          <p className=" text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

function Work() {
  return (
    <section className="flex flex-col items-center w-full  mb-20 bg-black  text-white py-24 px-8">
      <h2 className="text-4xl sm:text-5xl text-center font-semibold mb-8">
        Hoe wij te werk gaan{" "}
      </h2>
      <p className="text-xl text-gray-500 mb-20 text-center max-w-[800px]">
        Wij volgen een bewezen methodologie om websites te creëren die niet
        alleen er goed uitzien, maar ook meetbare resultaten opleveren.
      </p>

      <ProcessGrid />
    </section>
  );
}

export default Work;
