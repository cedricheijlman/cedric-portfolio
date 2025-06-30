import React from "react";
import { getProjectBySlug } from "../../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const { getAllProjectSlugs } = await import("../../../data/projects");
  const slugs = getAllProjectSlugs();

  return slugs.map((slug) => ({
    portfolio: slug,
  }));
}

function PortfolioItemPage({ params }) {
  const project = getProjectBySlug(params.portfolio);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-[200px] pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-8">
          <Link
            href="/projecten"
            className="inline-flex items-center text-slate-300 hover:text-white mb-16 transition-colors duration-300 group"
          >
            <div className="w-8 h-8 border border-slate-400 rounded-full flex items-center justify-center mr-3 group-hover:border-white transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <span className="text-sm font-medium tracking-wide">
              Terug naar projecten
            </span>
          </Link>

          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-slate-200 mb-6">
                {project.year} • {project.duration}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              {project.title}
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.externalLink && (
              <div className="mb-12">
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg border border-white/20 hover:bg-white/30 transition-all duration-300 group"
                >
                  <span className="mr-2">Bekijk live website</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  Client
                </span>
                <p className="text-xl font-semibold mt-2">{project.client}</p>
              </div>
              <div>
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  Project Type
                </span>
                <p className="text-xl font-semibold mt-2">Web Development</p>
              </div>
              <div>
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  Status
                </span>
                <p className="text-xl font-semibold mt-2">Live</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-8 space-y-24">
            {/* Project Overview */}
            <section>
              <div className="mb-12">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Project Overview
                </span>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">
                  {project.title}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  {project.shortDescription}
                </p>

                <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold mb-4">
                        Project succesverhaal
                      </h3>
                      <p className="text-indigo-100 text-lg">
                        Van uitdaging naar oplossing in {project.duration}
                      </p>
                    </div>

                    <div className="flex items-center justify-center space-x-8">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                          </svg>
                        </div>
                        <div className="text-2xl font-bold">Probleem</div>
                        <div className="text-indigo-200 text-sm">
                          {project.projectStory?.problem || "Oude website"}
                        </div>
                      </div>

                      <div className="w-16 h-0.5 bg-white/30"></div>

                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div className="text-2xl font-bold">Oplossing</div>
                        <div className="text-indigo-200 text-sm">
                          {project.projectStory?.solution || "Nieuwe website"}
                        </div>
                      </div>

                      <div className="w-16 h-0.5 bg-white/30"></div>

                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="text-2xl font-bold">Resultaat</div>
                        <div className="text-indigo-200 text-sm">
                          {project.projectStory?.result || "Succes!"}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                        <span className="font-medium">
                          Live sinds {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* The Challenge */}
            <section>
              <div className="mb-12">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  The Challenge
                </span>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">
                  Wat was de uitdaging?
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  {project.clientChallenge}
                </p>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-8 rounded-r-xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-900 mb-4">
                        Kernproblemen die we moesten oplossen:
                      </h3>
                      <ul className="space-y-3 text-red-800">
                        {project.coreProblems ? (
                          project.coreProblems.map((problem, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>{problem}</span>
                            </li>
                          ))
                        ) : (
                          <>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>
                                Verouderde technologie die de groei beperkte
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>
                                Gebrek aan mobiele optimalisatie resulteerde in
                                60% bounce rate
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>
                                Trage laadtijden van 8+ seconden beïnvloedden
                                conversies
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>
                                Complexe, moeilijk te onderhouden codebase
                              </span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Solution */}
            <section>
              <div className="mb-12">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Our Solution
                </span>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">
                  Hoe hebben we het opgelost?
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                {project.solutionParagraphs ? (
                  project.solutionParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`leading-relaxed text-gray-700 mb-8 ${
                        index === 0 ? "text-xl" : "text-lg"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <>
                    <p className="text-xl leading-relaxed text-gray-700 mb-8">
                      We hebben een gestructureerde aanpak gevolgd die begon met
                      een diepgaande analyse van de bestaande situatie. Door
                      middel van uitgebreide gebruikersonderzoek en technische
                      audits hebben we de kernproblemen geïdentificeerd en een
                      roadmap ontwikkeld voor de transformatie.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-8">
                      Het project is uitgevoerd volgens moderne agile principes,
                      met wekelijkse sprints en regelmatige feedback loops. Dit
                      zorgde ervoor dat we flexibel konden inspelen op
                      veranderende behoeften en dat de klant betrokken bleef bij
                      het hele proces.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-8">
                      Het resultaat is een professionele, snelle en
                      gebruiksvriendelijke website die perfect aansluit bij de
                      behoeften van de klant en hun doelgroep. De nieuwe website
                      is geoptimaliseerd voor alle apparaten en biedt een
                      uitstekende gebruikerservaring die leidt tot meer
                      conversies en klanttevredenheid.
                    </p>
                  </>
                )}
              </div>
            </section>

            {/* Client Testimonial */}
            <section>
              <div className="mb-12">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Client Testimonial
                </span>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">
                  Wat de klant zegt
                </h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-12">
                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-8 flex-shrink-0">
                    <span className="text-white font-bold text-2xl">
                      {project.client.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
                      &ldquo;Cedric Tech heeft onze online aanwezigheid compleet
                      getransformeerd. De nieuwe website is niet alleen visueel
                      aantrekkelijk, maar ook veel functioneler en
                      gebruiksvriendelijker. We zien een significante
                      verbetering in onze conversies en gebruikerservaring. Het
                      team heeft ons proces volledig begrepen en een oplossing
                      geleverd die perfect aansluit bij onze behoeften.&rdquo;
                    </blockquote>
                    <div className="border-t border-blue-200 pt-6">
                      <div className="font-bold text-gray-900 text-xl mb-1">
                        {project.client}
                      </div>
                      <div className="text-gray-600">CEO & Founder</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Project Result - Text Only */}
            <section>
              <div className="mb-12">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Het resultaat
                </span>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">
                  Wat hebben we bereikt?
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  {project.resultText ||
                    "Het project heeft geleid tot een moderne, snelle en gebruiksvriendelijke oplossing die perfect aansluit bij de wensen van de klant. De nieuwe website zorgt voor betere prestaties, meer conversies en een hogere klanttevredenheid."}
                </p>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="xl:col-span-4 space-y-16">
            {/* Business Value & Results Combined */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Belangrijkste resultaten
              </h3>

              <div className="space-y-3">
                {/* Show only first 3 business value items */}
                {project.businessValue.slice(0, 3).map((value, index) => (
                  <div key={`value-${index}`} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed text-sm">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Trust Indicators */}
            <section>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">
                Waarom kiezen voor ons?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Resultaatgericht
                    </h4>
                    <p className="text-sm text-gray-600">
                      Focus op meetbare resultaten
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Snelle Levering
                    </h4>
                    <p className="text-sm text-gray-600">
                      Projecten snel geleverd
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Persoonlijke Aanpak
                    </h4>
                    <p className="text-sm text-gray-600">
                      Op maat voor jouw business
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-32 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Wat onze klanten zeggen
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              &ldquo;Cedric Tech heeft onze online aanwezigheid compleet
              getransformeerd. De resultaten spreken voor zich.&rdquo;
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Klanttevredenheid</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2</div>
                <div className="text-sm text-gray-600">Projecten voltooid</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5/5</div>
                <div className="text-sm text-gray-600">Gemiddelde rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Full Width */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-sm rounded-3xl p-16 text-center border border-white/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Bekijk het live project
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Wil je het project in actie zien? Bezoek de live website en
                ervaar het resultaat zelf.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-slate-900 px-12 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  Bezoek website
                  <svg
                    className="w-5 h-5 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-transparent text-white border-2 border-white px-12 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg"
                >
                  Plan een gesprek
                  <svg
                    className="w-5 h-5 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItemPage;
