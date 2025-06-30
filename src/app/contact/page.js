"use client";
import React, { useState } from "react";
import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <section className="min-h-screen bg-white">
        <Hero />

        {/* Main Contact Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <ContactInfo />

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Waarom kiezen voor ons?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      Gratis strategiegesprek
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      Snelle reactie binnen 24 uur
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      Transparante prijzen
                    </span>
                  </div>
                </div>
              </div>

              {/* Calendar CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3 text-white">
                  Direct een afspraak maken?
                </h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Plan een gratis strategiegesprek van 30 minuten.
                </p>
                <button
                  onClick={() => {
                    setShowModal(true);
                    setLoading(true);
                  }}
                  className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 text-sm"
                >
                  Plan strategiegesprek
                  <ArrowRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Veelgestelde vragen
              </h2>
              <p className="text-gray-600">
                Antwoorden op de meest voorkomende vragen
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Hoe lang duurt het voordat ik een reactie krijg?
                </h3>
                <p className="text-gray-600 text-sm">
                  We reageren binnen 24 uur op alle berichten. Voor urgente
                  vragen kunt u ook direct bellen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Is het strategiegesprek echt gratis?
                </h3>
                <p className="text-gray-600 text-sm">
                  Ja, het eerste strategiegesprek is volledig gratis en
                  vrijblijvend.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Hoe lang duurt een gemiddeld project?
                </h3>
                <p className="text-gray-600 text-sm">
                  De meeste projecten zijn binnen 4-6 weken afgerond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Klaar om te beginnen?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Neem vandaag nog contact op en ontdek hoe wij uw online
              aanwezigheid kunnen transformeren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  setShowModal(true);
                  setLoading(true);
                }}
                className="inline-flex items-center bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg"
              >
                Plan strategiegesprek
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <Link
                href="/projecten"
                className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Bekijk projecten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cal.com modal popup */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Boek een strategiegesprek"
        >
          <div className="relative w-[95%] md:w-[75%] bg-black rounded-xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-zinc-700 z-10"
              aria-label="Sluit popup"
            >
              <ArrowRight className="rotate-180 w-6 h-6" />
            </button>

            {/* Loader */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-0">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {/* Iframe */}
            <iframe
              src="https://cal.com/cedrictech/30min?locale=nl"
              className="w-full h-[80vh]"
              frameBorder="0"
              title="Strategiegesprek Cedric Tech"
              allow="camera; microphone; autoplay; encrypted-media"
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ContactPage;
