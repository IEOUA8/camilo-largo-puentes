"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, BookOpen, Scale, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const CREDENCIALES = [
  {
    icono: Scale,
    titulo: "Abogado",
    descripcion: "Formación jurídica integral",
  },
  {
    icono: BookOpen,
    titulo: "Especialista",
    descripcion: "Derecho Urbanístico",
  },
  {
    icono: Award,
    titulo: "Magíster",
    descripcion: "Derecho Ambiental",
  },
  {
    icono: Award,
    titulo: "Técnico Laboral",
    descripcion: "Avalúos y Competencias",
  },
];

export default function AboutSection({ preview = false }: { preview?: boolean }) {
  return (
    <section className="py-20 lg:py-28 bg-gris-suave">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionTitle
              eyebrow="Sobre el abogado"
              title="Camilo Largo Puentes"
            />

            <p className="font-sans text-base text-gris-texto/80 leading-relaxed mb-6">
              Camilo Largo Puentes es abogado especialista en Derecho Urbanístico,
              Magíster en Derecho Ambiental y Técnico Laboral por Competencias en
              Avalúos. Su práctica integra conocimiento jurídico, visión territorial
              y análisis técnico para acompañar procesos inmobiliarios, urbanísticos,
              ambientales y patrimoniales.
            </p>

            {!preview && (
              <p className="font-sans text-base text-gris-texto/80 leading-relaxed mb-8">
                Con una perspectiva interdisciplinaria, ofrece soluciones que van más
                allá del consejo jurídico tradicional, combinando el análisis normativo
                con una comprensión profunda del territorio, los instrumentos de
                planeación y la valoración de activos inmobiliarios.
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-dorado text-white px-6 py-3 rounded-sm hover:bg-dorado-hover transition-colors group"
              >
                Solicitar asesoría
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {preview && (
                <Link
                  href="/sobre-camilo"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-azul border border-azul px-6 py-3 rounded-sm hover:bg-azul hover:text-white transition-all"
                >
                  Conocer más
                </Link>
              )}
            </div>
          </motion.div>

          {/* Right: credentials grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {CREDENCIALES.map((cred, i) => {
                const Icon = cred.icono;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className={`p-6 rounded-sm border ${
                      i === 0
                        ? "bg-azul border-azul text-white"
                        : i === 1
                        ? "bg-verde border-verde text-white"
                        : "bg-white border-gris-suave"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`mb-3 ${
                        i < 2 ? "text-dorado" : "text-dorado"
                      }`}
                    />
                    <div
                      className={`font-serif text-lg font-semibold leading-tight mb-1 ${
                        i < 2 ? "text-white" : "text-azul"
                      }`}
                    >
                      {cred.titulo}
                    </div>
                    <div
                      className={`font-sans text-xs leading-tight ${
                        i < 2 ? "text-white/70" : "text-gris-texto/70"
                      }`}
                    >
                      {cred.descripcion}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Principio profesional */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4 p-5 border-l-2 border-dorado bg-white"
            >
              <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-dorado mb-2">
                Principio profesional
              </p>
              <p className="font-serif text-base text-gris-texto/80 leading-relaxed">
                La seguridad jurídica en el territorio es el fundamento de
                cualquier inversión exitosa.
              </p>
              <p className="font-sans text-xs text-gris-texto/45 font-medium mt-2">
                Camilo Largo Puentes · Abogado Especialista
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
