import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

function ContactInfo() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Contactgegevens
        </h2>
        <p className="text-gray-600 text-sm">
          Neem direct contact op of bekijk onze sociale media
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <Phone className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm">Telefoon</h3>
            <a
              href="tel:+31612345678"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm"
            >
              +31 6 12345678
            </a>
          </div>
        </div>

        <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <Mail className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm">E-mail</h3>
            <a
              href="mailto:cedrictechbusiness@gmail.com"
              className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200 text-sm break-all"
            >
              cedrictechbusiness@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <MapPin className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm">Locatie</h3>
            <p className="text-gray-600 text-sm">Nederland</p>
          </div>
        </div>

        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <Clock className="w-5 h-5 text-orange-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm">Reactietijd</h3>
            <p className="text-gray-600 text-sm">Binnen 24 uur</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Volg ons</h3>
        <div className="flex space-x-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
