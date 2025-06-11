"use client";
import React from "react";
import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

function ContactPage() {
  return (
    <section className="flex flex-col w-full items-center pb-20">
      <Hero />
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-7xl px-4 gap-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

export default ContactPage;
