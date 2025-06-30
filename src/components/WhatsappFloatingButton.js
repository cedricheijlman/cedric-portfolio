"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloatingButton() {
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowWhatsappModal(true)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg flex items-center justify-center"
        aria-label="Chat via WhatsApp"
      >
        <FaWhatsapp className="text-white" size={32} />
      </button>
      {showWhatsappModal && (
        <div className="fixed bottom-24 right-6 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-80 flex flex-col items-center border border-gray-200 relative animate-fade-in">
            <button
              onClick={() => setShowWhatsappModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold"
              aria-label="Sluit"
            >
              &times;
            </button>
            <FaWhatsapp className="text-green-500 mb-2" size={36} />
            <div className="font-semibold text-lg mb-2 text-gray-900 text-center">
              Wil je direct contact via WhatsApp?
            </div>
            <div className="text-gray-600 text-center mb-4 text-sm">
              Klik op de knop hieronder om een chat te starten. We reageren
              meestal binnen enkele minuten!
            </div>
            <a
              href="https://wa.me/31613371285"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-200"
            >
              Start WhatsApp chat
            </a>
          </div>
        </div>
      )}
    </>
  );
}
