import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Camilo Largo Puentes | Soluciones Inmobiliarias Integrales",
  description:
    "Asesoría jurídica especializada en derecho urbanístico, derecho ambiental, avalúos, gestión territorial y soluciones inmobiliarias integrales.",
  keywords: [
    "abogado derecho urbanístico",
    "derecho urbanístico Colombia",
    "abogado derecho ambiental",
    "avalúos comerciales",
    "consultoría inmobiliaria jurídica",
    "ordenamiento territorial",
    "gestión territorial",
    "soluciones inmobiliarias integrales",
    "abogado inmobiliario",
    "asesoría jurídica inmobiliaria",
  ],
  openGraph: {
    title: "Camilo Largo Puentes | Soluciones Inmobiliarias Integrales",
    description:
      "Asesoría jurídica especializada en derecho urbanístico, derecho ambiental, avalúos y gestión territorial.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-crema text-gris-texto">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
