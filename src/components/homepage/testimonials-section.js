"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    content:
      "Cedric's expertise in full-stack development transformed our online presence. His innovative solutions helped us increase our conversion rates by 40%!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    company: "E-commerce Emporium",
    content:
      "Working with Cedric on our UI/UX redesign was a game-changer. Our customer satisfaction scores have never been higher. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    company: "Digital Dynamo",
    content:
      "Cedric's digital marketing strategies catapulted our brand to new heights. His data-driven approach and creativity are unmatched in the industry.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-center mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{testimonial.content}</p>
    <div className="font-semibold">{testimonial.name}</div>
    <div className="text-sm text-gray-500">{testimonial.company}</div>
  </motion.div>
);

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
