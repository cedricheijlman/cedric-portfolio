import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="flex flex-col h-full p-8">
      <h2 className="font-bold text-[24px] mb-4">Contactgegevens</h2>
      <div className="flex flex-col mb-4">
        <h2 className="font-bold text-[16px]">Telefoon</h2>
        <p className="underline">+31 6 12345678</p>
      </div>

      <div className="flex flex-col mb-4">
        <h2 className="font-bold text-[16px]">E-mail</h2>
        <p className="underline">cedrictechbusiness@gmail.com</p>
      </div>

      <div className="flex flex-col mb-4">
        <h2 className="font-bold text-[16px] mb-1">Socials</h2>
        <div className="flex text-[30px]">
          <FaInstagram className="mr-2 cursor-pointer" />
          <FaLinkedin className="mr-2 cursor-pointer" />
          <FaGithub className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
