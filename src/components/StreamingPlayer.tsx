import { useReducedMotion, motion } from "framer-motion";
import playerBackground from "@/assets/player_bg.webp";

const playerIframeUrl = "https://player.svrdedicado.org/player-topo-html5/7752/000000";

export function StreamingPlayer() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="player"
      className="relative py-20 overflow-hidden bg-linear-to-b from-background via-muted/50 to-background"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 rounded-full gradient-brand-glow opacity-30" />

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-ink mb-4">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Rádio ao vivo
          </span>
          <h2 className="font-headline text-3xl font-bold text-foreground md:text-5xl tracking-tight">
            <span className="text-gradient-brand">A7 Sertanejo Universitário FM</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base">
            O som da galera. Dê o play e curta ao vivo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-texas-dark/30"
        >
          {/* Fotografia exclusiva do player */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            <img
              src={playerBackground}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 bg-linear-to-t from-texas-dark via-texas-dark/10 to-transparent" />

            {/* Equalizer bars */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-end gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 rounded-full bg-secondary/80"
                  animate={{
                    height: reducedMotion ? 12 : [8, 10 + ((i * 7) % 30), 8],
                  }}
                  transition={{
                    duration: 0.8 + (i % 4) * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Player oficial hospedado pelo provedor */}
          <div className="relative bg-texas-dark">
            <iframe
              src={playerIframeUrl}
              title="A7 Sertanejo Universitário FM - Player ao vivo"
              className="h-20 w-full border-0"
              allow="autoplay"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
