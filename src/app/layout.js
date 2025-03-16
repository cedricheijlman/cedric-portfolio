import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import "../styles/globals.css"; // Globale CSS
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CEDRICTECH - Digital Domination",
  description:
    "The Holy Solution for Websites, eCommerce, and Digital Domination",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
