"use client";
import React from "react";
import { Hero } from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

function ContactPage() {
  return (
    <section className="flex flex-col w-full items-center">
      <Hero />
      <div className="flex w-full justify-center h-full">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

export default ContactPage;
