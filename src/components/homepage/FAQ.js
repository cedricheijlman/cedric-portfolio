"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question: "Hoeveel is de prijs van de website?",
    answer:
      "De prijs van de website begint bij €500, afhankelijk van het type website en de specificaties. Neem contact op voor een vrijblijvende offerte.",
  },
  {
    question: "Wat is inbegrepen in de prijs?",
    answer:
      "De prijs omvat een volledig op maat gemaakte website, inclusief ontwerp, ontwikkeling, integratie van basisfunctionaliteiten, en een mobielvriendelijke versie. Extra services zoals SEO, e-commercefunctionaliteit of een blog kunnen tegen meerprijs worden toegevoegd.",
  },
  {
    question: "Hoe lang duurt het om mijn website te bouwen?",
    answer:
      "Het bouwen van een website duurt doorgaans tussen de 4 en 6 weken, afhankelijk van de complexiteit en de communicatie. We bespreken de tijdlijn tijdens het initiële gesprek.",
  },
  {
    question: "Kan ik mijn website zelf beheren na de oplevering?",
    answer:
      "Ja, je ontvangt een gebruiksvriendelijke CMS (Content Management System), waarmee je eenvoudig je website kunt beheren, bijvoorbeeld tekst, afbeeldingen en video's toevoegen of bewerken.",
  },
  {
    question: "Bieden jullie hosting aan voor de website?",
    answer:
      "Ja, we bieden veilige en betrouwbare webhosting aan. We zorgen voor de technische kant van de hosting, inclusief back-ups en updates, zodat jij je kunt concentreren op je business.",
  },
  {
    question: "Kan ik de website later aanpassen of uitbreiden?",
    answer:
      "Ja, je kunt je website later aanpassen of uitbreiden. We bieden flexibele onderhouds- en uitbreidingsopties om ervoor te zorgen dat je website meegroeit met je bedrijf.",
  },
];

const FaqCard = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div className="flex flex-col w-full items-center" key={index}>
      <div
        onClick={onClick}
        className="mb-4 flex w-full items-center bg-gray-900 px-10 py-6 rounded-md justify-between cursor-pointer"
        role="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="text-white text-xl font-bold">{question}</h3>
        <ChevronDown
          className={`text-white transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        id={`faq-answer-${index}`}
        className={`flex w-full items-center px-8 text-1xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[2000px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 translate-y-4"
        }`}
      >
        <p className="mt-2 mb-12 text-[17px]">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="flex flex-col w-full items-center mb-20 max-w-[800px] px-8">
      <h2 className="text-5xl font-bold mb-8" aria-level="2">
        Veelgestelde vragen
      </h2>
      <p className="text-xl text-gray-500 mb-8 text-center">
        Hieronder vindt u antwoorden op de meest gestelde vragen. Staat uw vraag
        er niet bij? Neem dan gerust contact op.
      </p>
      {faqs.map((faq, index) => (
        <FaqCard
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          index={index}
        />
      ))}
    </section>
  );
}
