"use client";
import WhatsappFloatingButton from "./WhatsappFloatingButton";

export default function ClientLayout({ children }) {
  return (
    <>
      {children}
      <WhatsappFloatingButton />
    </>
  );
}
