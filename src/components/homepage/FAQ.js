"use client";
import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const headerRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="w-full max-w-3xl mb-6" key={index}>
      <div
        ref={headerRef}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-5 rounded-lg cursor-pointer shadow-md focus:outline-none focus:ring-4 focus:ring-purple-400 select-none"
      >
        <h3 className="text-white text-xl font-semibold">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <ChevronDown className="text-white" size={24} />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: 16 },
              collapsed: { opacity: 0, height: 0, marginTop: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden px-6 text-white bg-blue-900 rounded-b-lg shadow-inner"
          >
            <p className="py-4 leading-relaxed text-[17px]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="flex flex-col items-center px-6 py-24 sm:px-8 md:px-0 mb-24"
    >
      <h2
        id="faq-heading"
        className="text-5xl font-extrabold  pb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 leading-snug"
      >
        Veelgestelde vragen
      </h2>

      <p className="max-w-3xl text-center mb-16 text-lg text-gray-400">
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
