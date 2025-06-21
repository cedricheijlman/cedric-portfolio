import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import "../styles/globals.css"; // Globale CSS
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CEDRICTECH - Digital Domination",
  icons: {
    icon: "/faviconlogo.ico", // PNG in plaats van .ico
  },
  description:
    "The Holy Solution for Websites, eCommerce, and Digital Domination",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full`}>
        <Header />
        <main>{children}</main>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
