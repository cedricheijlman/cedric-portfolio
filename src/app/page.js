import { TestimonialsSection } from "../components/homepage/testimonials-section";
import { Hero } from "../components/homepage/hero";
import { ServicesSection } from "../components/homepage/services-section";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  );
}
