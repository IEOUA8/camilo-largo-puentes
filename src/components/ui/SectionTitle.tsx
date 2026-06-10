interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`font-sans text-xs font-semibold tracking-widest uppercase mb-3 ${
            light ? "text-dorado" : "text-dorado"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? "text-white" : "text-azul"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-base leading-relaxed mt-4 max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-gris-texto/80"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-[2px] w-12 bg-dorado ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
