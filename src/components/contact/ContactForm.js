"use client";

import React from "react";
import { Mail, User, MessageCircle } from "lucide-react";

function ContactForm() {
  return (
    <form className="w-full max-w-2xl mr-8 bg-white border border-gray-200 rounded-2xl shadow-md p-10 space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Neem contact op
      </h2>
      <p className="text-center text-gray-500 text-lg mb-6">
        Heb je een vraag, idee of wil je samenwerken? Laat gerust iets weten –
        ik reageer snel.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Voornaam
          </label>
          <div className="relative">
            <input
              id="firstName"
              type="text"
              placeholder="Voornaam"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Achternaam
          </label>
          <div className="relative">
            <input
              id="lastName"
              type="text"
              placeholder="Achternaam"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          E-mailadres
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            placeholder="jouwnaam@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Bericht
        </label>
        <div className="relative">
          <textarea
            id="message"
            rows={5}
            placeholder="Vertel ons wat je zoekt of nodig hebt..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-11 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <MessageCircle className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-base font-semibold py-3 rounded-lg hover:brightness-110 transition"
      >
        Verstuur bericht
      </button>
    </form>
  );
}

export default ContactForm;
