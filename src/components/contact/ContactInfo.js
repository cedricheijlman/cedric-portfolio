import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-2xl shadow-md p-6 md:p-10 space-y-6">
      <h2 className="font-bold text-2xl">Contactgegevens</h2>

      <div>
        <h3 className="font-semibold text-sm text-gray-700">Telefoon</h3>
        <p className="text-gray-800 underline">+31 6 12345678</p>
      </div>

      <div>
        <h3 className="font-semibold text-sm text-gray-700">E-mail</h3>
        <p className="text-gray-800 underline">cedrictechbusiness@gmail.com</p>
      </div>

      <div>
        <h3 className="font-semibold text-sm text-gray-700 mb-2">Socials</h3>
        <div className="flex space-x-4 text-2xl text-gray-600">
          <FaInstagram className="hover:text-pink-500 transition" />
          <FaLinkedin className="hover:text-blue-600 transition" />
          <FaGithub className="hover:text-black transition" />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
