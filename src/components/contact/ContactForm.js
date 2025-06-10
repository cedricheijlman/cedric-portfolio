"use client";
import { toast } from "react-hot-toast";

import React, { useState } from "react";
import { Mail, User, MessageCircle } from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = "Voornaam is verplicht";
    if (!formData.lastName.trim()) errs.lastName = "Achternaam is verplicht";
    if (!formData.email.trim()) {
      errs.email = "E-mailadres is verplicht";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Ongeldig e-mailadres";
    }
    if (!formData.message.trim()) errs.message = "Bericht is verplicht";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      message: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Bericht succesvol verzonden!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setTouched({});
        setErrors({});
      } else {
        toast.error("Er ging iets mis. Probeer het opnieuw.");
      }
    } catch (err) {
      toast.error("Serverfout. Probeer later opnieuw.");
    } finally {
      setSubmitting(false);
    }
  };

  const renderInput = (id, label, Icon, type = "text") => (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          value={formData[id]}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={label}
          className={`w-full border ${
            errors[id] && touched[id] ? "border-red-400" : "border-gray-300"
          } rounded-lg px-4 py-3 pl-11 focus:outline-none focus:ring-2 ${
            errors[id] && touched[id]
              ? "focus:ring-red-500"
              : "focus:ring-blue-500"
          }`}
        />
        <Icon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
      </div>
      {touched[id] && errors[id] && (
        <p className="text-sm text-red-500 mt-1">{errors[id]}</p>
      )}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mr-8 bg-white border border-gray-200 rounded-2xl shadow-md p-10 space-y-6"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Neem contact op
      </h2>
      <p className="text-center text-gray-500 text-lg mb-6">
        Heb je een vraag, idee of wil je samenwerken? Laat gerust iets weten!
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {renderInput("firstName", "Voornaam", User)}
        {renderInput("lastName", "Achternaam", User)}
      </div>

      {renderInput("email", "E-mailadres", Mail, "email")}

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
            name="message"
            rows={5}
            placeholder="Vertel ons wat je zoekt of nodig hebt..."
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full border ${
              errors.message && touched.message
                ? "border-red-400"
                : "border-gray-300"
            } rounded-lg px-4 py-3 pl-11 resize-none focus:outline-none focus:ring-2 ${
              errors.message && touched.message
                ? "focus:ring-red-500"
                : "focus:ring-blue-500"
            }`}
          />
          <MessageCircle className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        </div>
        {touched.message && errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-base font-semibold py-3 rounded-lg hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Versturen..." : "Verstuur bericht"}
      </button>
    </form>
  );
}

export default ContactForm;
