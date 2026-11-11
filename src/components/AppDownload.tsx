import { motion } from "framer-motion";

const downloadLink = "https://player.svrdedicado.org/player-app-multi-plataforma/7752";
import appPrint from "@/assets/app-print.webp";

export function AppDownload() {
  return (
    <section id="app" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-secondary/90 to-texas-dark" />
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-primary/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-black text-secondary-foreground md:text-5xl tracking-tight leading-tight">
              A Rádio Que Pulsa
              <br />
              no Seu <span className="opacity-90">Bolso</span>
            </h2>
            <p className="mt-6 text-lg text-secondary-foreground/70 max-w-md">
              Leve a A7 Sertanejo Universitário FM com você. Acesse a transmissão pelo aplicativo e
              continue curtindo o som da galera no seu dispositivo.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-texas-dark/80 backdrop-blur-sm px-5 py-3 text-secondary-foreground transition-all duration-300 hover:scale-105 hover:bg-texas-dark border border-primary-foreground/10"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.707l2.108 1.22a1 1 0 0 1 0 1.56l-2.108 1.22-2.537-2.5 2.537-2.5zM5.864 3.458L16.8 9.79l-2.302 2.302-8.635-8.635z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60 tracking-wider">Acesse para</div>
                  <div className="font-display text-sm font-bold">Android</div>
                </div>
              </a>
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-texas-dark/80 backdrop-blur-sm px-5 py-3 text-secondary-foreground transition-all duration-300 hover:scale-105 hover:bg-texas-dark border border-primary-foreground/10"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60 tracking-wider">Acesse para</div>
                  <div className="font-display text-sm font-bold">iOS</div>
                </div>
              </a>
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-texas-dark/80 backdrop-blur-sm px-5 py-3 text-secondary-foreground transition-all duration-300 hover:scale-105 hover:bg-texas-dark border border-primary-foreground/10"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60 tracking-wider">Acesse para</div>
                  <div className="font-display text-sm font-bold">Windows</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center lg:justify-end items-center h-162.5"
            style={{ perspective: "1500px" }} // Perspectiva aumentada para efeito 3D mais profundo
          >
            <motion.div
              className="relative w-75 h-152.5"
              animate={{
                y: -10,
                rotateX: 12,
                rotateY: -22,
                rotateZ: 4,
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              style={{ transformStyle: "preserve-3d" }} // Essencial para renderizar as camadas em 3D
            >
              {/* --- CONSTRUÇÃO DO CORPO 3D (FRAME LATERAL) --- */}
              {/* Criamos "fatias" do telefone deslocadas no eixo Z para formar a lateral */}
              {[...Array(50)].map((_, index) => (
                <div
                  key={index}
                  className="absolute inset-0 bg-[#222] rounded-[50px] border border-black/10"
                  style={{
                    transform: `translateZ(${-index - 1}px)`,
                    // Brilho metálico na lateral conforme o ângulo
                    backgroundImage: `linear-gradient(${135 + index * 2}deg, #333 0%, #1a1a1a 40%, #333 60%, #1a1a1a 100%)`,
                    boxShadow: index === 15 ? "10px 10px 30px rgba(0,0,0,0.5)" : "none",
                  }}
                />
              ))}

              {/* --- CAMADA FRONTAL (TELA E BEZEL) --- */}
              <div
                className="absolute inset-0 bg-black rounded-[50px] p-2.5 overflow-hidden border-2 border-[#444]"
                style={{ transform: "translateZ(0px)" }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-40 border border-black/50 shadow-inner" />

                {/* Tela do App (com print real) */}
                <div className="absolute inset-0 w-full h-full rounded-[38px] overflow-hidden z-20 mt-1">
                  <img
                    src={appPrint}
                    alt="Aplicativo oficial da A7 Sertanejo Universitário FM"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Reflexo de vidro na tela */}
                <div className="absolute -inset-10 bg-linear-to-br from-white/10 via-transparent to-black/30 z-30 rounded-[50px] pointer-events-none" />
              </div>

              {/* Glow vermelho atrás do telefone para dar profundidade */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-foreground/20 blur-3xl -z-20"
                style={{ transform: "translateZ(-50px)" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
