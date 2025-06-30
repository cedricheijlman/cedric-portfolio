"use client";
import { toast } from "react-hot-toast";
import React, { useState } from "react";
import {
  Mail,
  User,
  MessageCircle,
  Building,
  Phone,
  Calendar,
} from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    subject: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};

    // Required fields
    if (!formData.firstName.trim()) errs.firstName = "Voornaam is verplicht";
    if (!formData.lastName.trim()) errs.lastName = "Achternaam is verplicht";
    if (!formData.message.trim()) errs.message = "Bericht is verplicht";

    // Email validation
    if (!formData.email.trim()) {
      errs.email = "E-mailadres is verplicht";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Voer een geldig e-mailadres in";
    }

    // Phone validation (optional but if filled, must be valid)
    if (
      formData.phone.trim() &&
      !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.trim())
    ) {
      errs.phone = "Voer een geldig telefoonnummer in";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate only the field that was blurred
    const fieldErrors = validate();
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
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

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Controleer de gemarkeerde velden");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(
          "Bericht succesvol verzonden! We nemen binnen 24 uur contact met u op."
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          subject: "",
        });
        setTouched({});
        setErrors({});
      } else {
        toast.error(
          "Er ging iets mis. Probeer het opnieuw of neem telefonisch contact op."
        );
      }
    } catch (err) {
      toast.error("Serverfout. Probeer later opnieuw of bel ons direct.");
    } finally {
      setSubmitting(false);
    }
  };

  const renderInput = (id, label, Icon, type = "text", required = false) => (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
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
          className={`w-full border-2 ${
            errors[id] && touched[id] ? "border-red-400" : "border-gray-200"
          } rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
            errors[id] && touched[id]
              ? "focus:ring-red-500"
              : "focus:ring-blue-500"
          }`}
        />
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
      {touched[id] && errors[id] && (
        <p className="text-sm text-red-500 mt-1">{errors[id]}</p>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Neem contact met ons op
        </h2>
        <p className="text-gray-600 text-sm">
          Heeft u een vraag of wilt u meer informatie? Vul het formulier in en
          we nemen binnen 24 uur contact met u op
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {renderInput("firstName", "Voornaam", User, "text", true)}
          {renderInput("lastName", "Achternaam", User, "text", true)}
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {renderInput("email", "E-mailadres", Mail, "email", true)}
          {renderInput("phone", "Telefoonnummer", Phone, "tel")}
        </div>

        {/* Company & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {renderInput("company", "Bedrijfsnaam", Building)}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Onderwerp
            </label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
              >
                <option value="">Selecteer onderwerp</option>
                <option value="algemeen">Algemene vraag</option>
                <option value="project">Project informatie</option>
                <option value="prijs">Prijzen en offertes</option>
                <option value="support">Technische ondersteuning</option>
                <option value="samenwerking">Samenwerking</option>
                <option value="anders">Anders</option>
              </select>
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Uw bericht <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Vertel ons waar we u mee kunnen helpen..."
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border-2 ${
                errors.message && touched.message
                  ? "border-red-400"
                  : "border-gray-200"
              } rounded-lg px-4 py-3 pl-12 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.message && touched.message
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          </div>
          {touched.message && errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Trust Message */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-start">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <svg
                className="w-2.5 h-2.5 text-white"
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
            <div>
              <p className="text-sm text-blue-800 font-medium">
                Uw gegevens zijn veilig bij ons
              </p>
              <p className="text-xs text-blue-600 mt-1">
                We delen uw informatie nooit met derden en nemen binnen 24 uur
                contact met u op.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {submitting ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Bericht versturen...
            </div>
          ) : (
            "Verstuur bericht"
          )}
        </button>

        {/* Alternative Contact */}
        <div className="text-center pt-2">
          <p className="text-sm text-gray-500">
            Liever direct bellen?{" "}
            <a
              href="tel:+31613371285"
              className="text-blue-600 font-semibold hover:underline"
            >
              +31 6 13371285
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
