import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import {
  CORREO_CONTACTO,
  TELEFONO,
  DIRECCION_OFICINA,
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_LINK,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto | Camilo Largo Puentes",
  description:
    "Solicite asesoría jurídica o cotización de avalúo especializada en derecho urbanístico, ambiental y consultoría inmobiliaria.",
};

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Oficina",
    value: DIRECCION_OFICINA,
    href: GOOGLE_MAPS_LINK,
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: CORREO_CONTACTO,
    href: `mailto:${CORREO_CONTACTO}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: TELEFONO,
    href: `tel:${TELEFONO}`,
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lunes a Viernes · 8:00 am – 6:00 pm",
    href: null,
  },
];

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* ── Encabezado ── */}
      <div className="bg-azul pt-32 sm:pt-36 lg:pt-44 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-3">
            Estamos aquí para ayudarle
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Contáctenos
          </h1>
          <p className="font-sans text-base text-white/65 mt-4 max-w-xl leading-relaxed">
            Cuéntenos su caso y reciba una orientación inicial sobre la mejor ruta
            jurídica, de valoración o territorial para su necesidad.
          </p>
          <div className="mt-5 h-[2px] w-12 bg-dorado" />
        </div>
      </div>

      {/* ── Formulario + info de contacto ── */}
      <section className="py-20 bg-crema">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Formulario */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gris-suave rounded-sm p-5 sm:p-8">
                <h2 className="font-serif text-2xl font-semibold text-azul mb-2">
                  Solicitar asesoría o cotización
                </h2>
                <p className="font-sans text-sm text-gris-texto/60 mb-8">
                  Diligencie el formulario y nos comunicaremos con usted a la
                  brevedad.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Info contacto */}
            <div className="lg:col-span-2 space-y-5">
              {/* Datos */}
              <div className="bg-white border border-gris-suave rounded-sm p-6">
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-5">
                  Información de contacto
                </h3>
                <ul className="space-y-4">
                  {INFO_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div>
                        <div className="font-sans text-xs text-gris-texto/50 mb-0.5">
                          {item.label}
                        </div>
                        <div className="font-sans text-sm font-medium text-azul">
                          {item.value}
                        </div>
                      </div>
                    );
                    return (
                      <li key={item.label} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-sm bg-gris-suave flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={14} className="text-dorado" />
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="hover:text-dorado transition-colors flex-1"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex-1">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-[#25D366] rounded-sm text-white hover:bg-[#20c05c] transition-colors group"
              >
                <MessageCircle size={28} fill="white" className="shrink-0" />
                <div>
                  <div className="font-sans text-sm font-semibold">
                    Hablar por WhatsApp
                  </div>
                  <div className="font-sans text-xs text-white/80 mt-0.5">
                    Respuesta rápida · Disponible
                  </div>
                </div>
              </a>

              {/* Aviso confidencialidad */}
              <div className="p-5 border-l-2 border-dorado bg-white">
                <p className="font-sans text-xs text-gris-texto/60 leading-relaxed">
                  Toda la información que comparta es tratada con total
                  confidencialidad y de acuerdo con nuestra política de tratamiento
                  de datos personales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mapa de ubicación ── */}
      <section className="bg-gris-suave py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-2">
                Ubicación
              </p>
              <h2 className="font-serif text-2xl font-semibold text-azul">
                Encuéntrenos
              </h2>
              <p className="font-sans text-sm text-gris-texto/65 mt-1">
                {DIRECCION_OFICINA}
              </p>
            </div>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-azul border border-azul px-4 py-2 rounded-sm hover:bg-azul hover:text-white transition-all whitespace-nowrap"
            >
              <ExternalLink size={12} />
              Ver en Google Maps
            </a>
          </div>

          {/* Iframe Google Maps — actualizar src con URL real de la oficina */}
          <div className="w-full rounded-sm overflow-hidden border border-gris-suave shadow-sm" style={{ height: 380 }}>
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Camilo Largo Puentes"
            />
          </div>
        </div>
      </section>
    </>
  );
}
