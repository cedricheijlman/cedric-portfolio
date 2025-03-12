import FAQ from "@/components/homepage/FAQ";
import { Hero } from "../components/homepage/hero";
import Work from "@/components/homepage/work";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">
      <Hero />
      <Work />
      <FAQ />
    </main>
  );
}
