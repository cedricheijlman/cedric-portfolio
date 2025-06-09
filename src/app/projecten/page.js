"use client";
import React from "react";
import Hero from "@/components/portfolio/Hero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import PortfolioList from "@/components/portfolio/PortfolioList";

function PortfolioPage() {
  return (
    <section className="flex flex-col w-full items-center">
      <Hero />
      <PortfolioList />
    </section>
  );
}

export default PortfolioPage;
