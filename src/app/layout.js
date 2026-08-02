import { Geist, Geist_Mono } from "next/font/google";
import "../css/styles.css";
import "../css/animations.css";
import "../css/catalog.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollObserver from "@/components/ScrollObserver";
import GlobalLightbox from "@/components/GlobalLightbox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Srinivas Interiors | Premium Custom Furniture",
  description: "Premium family-owned carpentry and interior design company in Hyderabad. Luxury custom furniture, modular wardrobes, and kitchen cabinets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body style={{ backgroundColor: "#15110F", color: "#FFFFFF" }}>
        <ScrollObserver />
        <div className="page-transition"></div>
        <Header />
        {children}
        <Footer />
        <FloatingActions />
        <GlobalLightbox />
      </body>
    </html>
  );
}

