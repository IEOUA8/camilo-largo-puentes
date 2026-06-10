import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { NAV_LINKS, CORREO_CONTACTO, TELEFONO, CIUDAD, SERVICIOS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-azul text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo-header.png"
                  alt="Camilo Largo Puentes"
                  width={380}
                  height={125}
                  className="h-14 sm:h-16 lg:h-20 w-auto object-contain max-w-[260px] sm:max-w-none"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>
            </div>
            <p className="font-sans text-sm text-white/70 leading-relaxed max-w-xs">
              Asesoría jurídica y técnica en soluciones inmobiliarias integrales,
              derecho urbanístico, derecho ambiental, avalúos y gestión territorial.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {SERVICIOS.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/servicios#${s.id}`}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin size={14} className="mt-0.5 shrink-0 text-dorado" />
                <span className="font-sans text-sm">{CIUDAD}</span>
              </li>
              <li>
                <a
                  href={`mailto:${CORREO_CONTACTO}`}
                  className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-dorado" />
                  <span className="font-sans text-sm break-all">{CORREO_CONTACTO}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${TELEFONO}`}
                  className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={14} className="shrink-0 text-dorado" />
                  <span className="font-sans text-sm">{TELEFONO}</span>
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-2">
                Horario
              </h3>
              <p className="font-sans text-sm text-white/70">
                Lunes a Viernes<br />8:00 am – 6:00 pm
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} Camilo Largo Puentes. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-privacidad"
              className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Política de privacidad
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/tratamiento-de-datos"
              className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Tratamiento de datos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
