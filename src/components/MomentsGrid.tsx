import { motion } from "framer-motion";
import descansa from "@/assets/momento_descansa.webp";
import estrada from "@/assets/momento_estrada2.webp";
import festa from "@/assets/momento_festa.webp";

const moments = [
  {
    title: "Enquanto Descansa",
    image: descansa,
    description: "Melodias sertanejas para desacelerar e recarregar as energias.",
  },
  {
    title: "Na Estrada",
    image: estrada,
    description: "Sua trilha sertaneja para acompanhar novos caminhos.",
  },
  {
    title: "Na Festa",
    image: festa,
    description: "Energia e diversão com o sertanejo universitário que a galera canta junto.",
  },
];

export function MomentsGrid() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl font-black text-foreground md:text-5xl tracking-tight">
            Música Para Todos os Seus <span className="text-gradient-red">Momentos</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {moments.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-3d group relative h-96 overflow-hidden rounded-3xl"
            >
              <img
                src={m.image}
                alt={m.title}
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-texas-dark/70 via-texas-dark/10 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <h3 className="font-display text-2xl font-black text-primary-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{m.description}</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-secondary/15 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
