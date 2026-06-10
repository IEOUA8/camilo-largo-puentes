"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-sm border-b border-gris-suave" : "shadow-none"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-header.png"
            alt="Camilo Largo Puentes – Soluciones Inmobiliarias Integrales"
            width={420}
            height={138}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium transition-colors relative after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:bg-dorado after:transition-all after:duration-300 ${
                pathname === link.href
                  ? "text-azul after:w-full"
                  : "text-gris-texto hover:text-azul after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contacto"
            className="hidden lg:inline-flex font-sans text-sm font-semibold bg-dorado text-white px-5 py-2.5 rounded-sm hover:bg-dorado-hover transition-colors tracking-wide"
          >
            Solicitar asesoría
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-azul"
            aria-label="Menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gris-suave shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-base font-medium transition-colors py-1 ${
                  pathname === link.href
                    ? "text-azul"
                    : "text-gris-texto hover:text-azul"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-2 font-sans text-sm font-semibold bg-dorado text-white px-5 py-3 rounded-sm text-center hover:bg-dorado-hover transition-colors"
            >
              Solicitar asesoría
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
