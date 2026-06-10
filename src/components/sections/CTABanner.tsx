"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "¿Necesita asesoría jurídica o técnica?",
  subtitle = "Cuéntenos su caso y reciba una orientación inicial sobre la mejor ruta jurídica, técnica o territorial para su necesidad.",
}: CTABannerProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-20 bg-verde overflow-hidden relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border border-white/10 rounded-full -translate-x-12 translate-y-12" />
        <div className="absolute top-0 right-0 w-16 h-16 border border-white/10 rounded-full translate-x-8 -translate-y-8" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-4"
        >
          Contáctenos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-base text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm bg-dorado text-white px-8 py-4 rounded-sm hover:bg-dorado-hover transition-colors tracking-wide group"
          >
            Solicitar asesoría
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm bg-transparent border border-white/40 text-white px-8 py-4 rounded-sm hover:bg-white/10 transition-colors tracking-wide"
          >
            <MessageCircle size={16} />
            Hablar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
