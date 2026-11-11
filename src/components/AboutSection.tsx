import { motion } from "framer-motion";
import { RadioName } from "@/components/RadioName";
import aboutImg from "@/assets/about_studio.webp";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-texas-dark via-primary to-texas-dark" />
      <div className="absolute top-0 right-0 w-150 h-150 rounded-full gradient-red-glow opacity-20" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-headline text-4xl font-bold text-primary-foreground md:text-5xl tracking-tight leading-tight">
            Sua playlist sertaneja <span className="text-gradient-red">não tem fim</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
            Tem sempre uma boa música para combinar com o seu momento. A <RadioName /> reúne a
            energia e o estilo do sertanejo universitário em uma experiência online feita para quem
            gosta de ouvir, cantar junto e aproveitar.
          </p>
          <p className="mt-4 text-base text-primary-foreground/50">
            Em casa, no trabalho, na estrada ou com os amigos, dê o play e deixe o som da galera
            acompanhar você.
          </p>
          <a
            href="#player"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-secondary-foreground shadow-xl shadow-secondary/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/30"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-foreground/20 text-xs">
              ▶
            </span>
            Ouça Agora
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-texas-dark/50">
            <img
              src={aboutImg}
              alt="Microfone e mesa de áudio em um estúdio de rádio moderno"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Decorative glow */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/30 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
