import FAQ from "@/components/homepage/FAQ";
import { Hero } from "@/components/homepage/hero";
import Work from "@/components/homepage/work";

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

export default function Home() {
  return (
    <main
      role="main"
      aria-label="Homepage van Cedric Tech - specialist in professionele websites op maat"
      className="relative flex flex-col items-center"
    >
      {/* Hero sectie met sterke h1, call-to-action en SEO keywords */}
      <Hero />

      {/* Processectie met uitleg over werkwijze voor vertrouwen en long-tail keywords */}
      <Work />

      {/* Veelgestelde vragen: structured FAQ keywords en semantische opbouw */}
      <FAQ />
    </main>
  );
}
