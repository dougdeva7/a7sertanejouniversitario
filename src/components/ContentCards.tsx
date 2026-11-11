import { useState } from "react";
import { RadioName } from "@/components/RadioName";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import content01 from "@/assets/content_01.webp";
import content02 from "@/assets/content_02.webp";
import content03 from "@/assets/content_03.webp";
import content04 from "@/assets/content_04.webp";
import content05 from "@/assets/content_05.webp";
import content06 from "@/assets/content_06.webp";

const cards = [
  {
    title: "Os Hits do Momento",
    summary: "Os sucessos do sertanejo universitário que combinam com a sua vibe.",
    full: "Tem música que começa a tocar e já muda o clima. O sertanejo universitário reúne refrões marcantes, melodias envolventes e aquela energia que faz todo mundo querer cantar junto. Na A7 Sertanejo Universitário FM, a música acompanha você em cada momento.",
    image: content01,
  },
  {
    title: "Só Dá Sertanejo",
    summary: "Uma boa seleção sertaneja para acompanhar o seu dia.",
    full: "Seja para começar o dia, trabalhar, relaxar ou aproveitar o tempo livre, sempre existe uma boa música sertaneja para entrar no clima. A A7 é sua companhia online para quem gosta do ritmo e não abre mão de uma boa trilha sonora.",
    image: content02,
  },
  {
    title: "Aumenta o Som!",
    summary: "Batidas animadas e refrões para levantar o astral.",
    full: "Algumas músicas pedem volume mais alto. O sertanejo universitário tem ritmo, energia e refrões que transformam momentos comuns em boas lembranças. Aperte o play, aumente o som e aproveite.",
    image: content03,
  },
  {
    title: "Sertanejo Pra Curtir",
    summary: "Boa música para encontros, viagens e momentos especiais.",
    full: "Um encontro com os amigos, uma viagem de fim de semana ou um momento só seu. O sertanejo universitário combina com diferentes ocasiões e cria a trilha sonora perfeita para aproveitar a vida com leveza.",
    image: content04,
  },
  {
    title: "Na Batida da Galera",
    summary: "A energia do sertanejo que todo mundo gosta de cantar junto.",
    full: "Tem refrão que une a galera e música que faz qualquer encontro ficar mais animado. É essa conexão que torna o sertanejo universitário tão presente no dia a dia de quem gosta de música e diversão.",
    image: content05,
  },
  {
    title: "Sua Rádio, Seu Ritmo",
    summary: "Sertanejo universitário online para ouvir onde você quiser.",
    full: "A A7 Sertanejo Universitário FM acompanha você pela internet. Acesse pelo site ou utilize o aplicativo oficial e curta a transmissão da rádio em seus momentos favoritos, com praticidade e liberdade.",
    image: content06,
  },
];

export function ContentCards() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="content" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-20 right-0 w-125 h-125 rounded-full gradient-red-glow opacity-20" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-editorial text-3xl font-bold text-foreground md:text-5xl tracking-tight">
            Sertanejo Universitário <span className="text-gradient-red">do Seu Jeito</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Uma trilha sonora para entrar no clima, curtir o momento e deixar a música rolar.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.button
              type="button"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="card-3d group relative text-left h-72 cursor-pointer overflow-hidden rounded-2xl bg-texas-dark"
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-texas-dark via-texas-dark/10 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="font-editorial text-xl font-bold text-primary-foreground">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/70 line-clamp-2">
                  {card.summary}
                </p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-secondary/20 to-transparent" />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <AnimatePresence>
          {selected !== null && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-texas-dark/80 backdrop-blur-md p-4"
                  onClick={() => setSelected(null)}
                >
                  <Dialog.Content asChild aria-describedby="editorial-description">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative w-full max-w-lg max-h-[85dvh] overflow-y-auto rounded-3xl bg-card shadow-2xl"
                    >
                      <img
                        src={cards[selected].image}
                        alt={cards[selected].title}
                        width={1200}
                        height={900}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <div className="absolute top-0 left-0 right-0 aspect-[4/3] bg-linear-to-t from-card to-transparent" />
                      <button
                        aria-label="Fechar conteúdo"
                        onClick={() => setSelected(null)}
                        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full glass text-primary-foreground hover:bg-secondary transition-colors"
                      >
                        <X size={20} />
                      </button>
                      <div className="p-8 -mt-12 relative z-10">
                        <Dialog.Title className="font-editorial text-2xl font-bold text-foreground">
                          {cards[selected].title}
                        </Dialog.Title>
                        <Dialog.Description
                          id="editorial-description"
                          className="mt-4 text-muted-foreground leading-relaxed"
                        >
                          <RadioName text={cards[selected].full} />
                        </Dialog.Description>
                        <a
                          href="#player"
                          onClick={() => setSelected(null)}
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold uppercase tracking-wider text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/30"
                        >
                          ▶ Ouça Agora
                        </a>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </motion.div>
              </Dialog.Overlay>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
