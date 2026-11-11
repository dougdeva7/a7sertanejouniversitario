import { useState, useEffect } from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import hero01 from "@/assets/hero_01.webp";
import hero02 from "@/assets/hero_02.webp";
import hero03 from "@/assets/hero_03.webp";
import hero04 from "@/assets/hero_04.webp";
import hero05 from "@/assets/hero_05.webp";
import hero06 from "@/assets/hero_06.webp";

const slides = [
  { image: hero01, alt: "Mulher sorrindo com chapéu em luz de fim de tarde" },
  { image: hero02, alt: "Três amigos sorrindo ao ar livre" },
  { image: hero03, alt: "Detalhe de um violão sendo tocado" },
  { image: hero04, alt: "Homem ouvindo música com fones ao ar livre" },
  { image: hero05, alt: "Amigos se divertindo sob luzes de festa" },
  { image: hero06, alt: "Chapéu sobre uma cerca ao pôr do sol" },
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-texas-dark"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-x-0 bottom-0 top-24 sm:top-28 xl:inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].alt}
            className="h-full w-full object-contain object-top xl:object-cover xl:object-center"
            width={1920}
            height={1080}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays mantidos iguais */}
      <div className="absolute inset-0 bg-linear-to-b from-texas-dark/40 via-texas-navy/20 to-texas-dark/70" />
      <div className="absolute inset-0 bg-linear-to-r from-texas-dark/40 via-transparent to-texas-dark/40" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent" />

      {/* Conteúdo com Padding Top para respeitar o Header */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-28 pb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full glass px-6 py-2.5 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground animate-pulse-badge"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
          Ao Vivo Agora
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-headline text-4xl font-bold leading-[1.05] tracking-tight text-primary-foreground md:text-7xl lg:text-8xl"
        >
          <span className="block">Aqui o sertanejo</span>
          <span className="block mt-2">
            <span className="text-gradient-red">não para!</span>
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-primary-foreground font-editorial font-bold tracking-normal mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            O som da galera
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 max-w-lg text-base text-primary-foreground/70 font-normal tracking-wide md:text-lg"
        >
          Os sucessos do sertanejo universitário em uma rádio feita para acompanhar você. Dê o play
          e curta sua música onde estiver.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          href="#player"
          className="mt-8 group inline-flex items-center gap-3 rounded-full bg-secondary px-10 py-4 font-display text-base font-bold uppercase tracking-wider text-secondary-foreground shadow-xl shadow-secondary/30 transition-all duration-300 hover:scale-105"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-foreground/20">
            ▶
          </span>
          Ouça Agora
        </motion.a>
      </div>
    </section>
  );
}
