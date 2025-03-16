import Link from "next/link";
import React from "react";

function ContactForm() {
  return (
    <form className="mb-12 border border-gray-300 rounded-md mr-12 p-8">
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <div className="flex mb-4">
        <div className="mr-8">
          <p className="mb-2 font-semibold">Voornaam</p>
          <input
            className="border-2 border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Voornaam"
          />
        </div>
        <div>
          <p className="mb-2 font-semibold">Achternaam</p>
          <input
            className="border-2 border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Achternaam"
          />
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 font-semibold">Email</p>
        <input
          className="border-2 border-gray-300 rounded-md px-4 py-2 w-full"
          placeholder="naam@gmail.com"
        />
      </div>

      <div>
        <p className="mb-2 font-semibold">Message</p>
        <textarea
          className="resize-none border-2 border-gray-300 rounded-md px-4 py-2 w-full min-h-[200px]" // min-h voor minimum hoogte
          placeholder="Laat een bericht achter..."
        />
      </div>

      <button className="bg-black text-white mt-4 hover:bg-gray-800 w-full text-[15px] p-3 rounded-lg font-semibold">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
