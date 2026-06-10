"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROCESO_PASOS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-azul overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Metodología"
          title="Un proceso claro para tomar mejores decisiones"
          subtitle="Cada caso se trabaja con rigor metodológico, desde el diagnóstico inicial hasta el cierre exitoso."
          light
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-[1px] bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESO_PASOS.map((paso, i) => (
              <motion.div
                key={paso.numero}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col"
              >
                <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
                  {/* Step number circle */}
                  <div className="w-16 h-16 rounded-full border border-dorado/40 flex items-center justify-center mb-5 bg-azul relative z-10">
                    <span className="font-serif text-xl font-semibold text-dorado">
                      {paso.numero}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-white mb-2">
                    {paso.titulo}
                  </h3>

                  <p className="font-sans text-sm text-white/60 leading-relaxed">
                    {paso.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
