import clubeLogo from "@/assets/cluberadios.webp";
import { RadioName } from "@/components/RadioName";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="h-1 w-full bg-linear-to-r from-transparent via-secondary to-transparent" />

      <div className="bg-linear-to-b from-texas-dark to-texas-dark/95 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center gap-8 text-center">
            <img
              src="/images/logo-a7sertanejouniversitario.webp"
              alt="A7 Sertanejo Universitário FM"
              width={256}
              height={256}
              className="h-36 w-36 object-contain sm:h-40 sm:w-40"
            />
            <p className="font-editorial text-lg font-bold text-primary-foreground/80 tracking-wide">
              O som da galera
            </p>
            <p className="text-lg text-primary-foreground/40">
              Seu sertanejo universitário, onde você estiver.
            </p>

            <div
              className="w-full my-8 pt-6 border-t border-current/10 text-center"
              aria-label="Parceiros"
            >
              <h3 className="mb-5 font-editorial text-base font-bold text-primary-foreground">
                Parceiros
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                <a
                  key="myTuner Radio"
                  href="https://mytuner-radio.com/pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="myTuner Radio"
                  className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
                >
                  <img
                    src={"/mytuner.webp"}
                    alt="myTuner Radio"
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto max-w-[130px] object-contain brightness-0 invert"
                  />
                </a>
                <a
                  key="Clube de Rádios"
                  href="https://www.cluberadios.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Clube de Rádios"
                  className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
                >
                  <img
                    src={clubeLogo}
                    alt="Clube de Rádios"
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto max-w-[130px] object-contain"
                  />
                </a>
                <a
                  key="Online Radio Box"
                  href="https://onlineradiobox.com/br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Online Radio Box"
                  className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
                >
                  <img
                    src={"/radiobox.webp"}
                    alt="Online Radio Box"
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto max-w-[130px] object-contain"
                  />
                </a>
                <a
                  key="RádiosNet"
                  href="https://www.radios.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RádiosNet"
                  className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
                >
                  <img
                    src={"/radiosnet.webp"}
                    alt="RádiosNet"
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </a>
                <a
                  key="Streema"
                  href="https://streema.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Streema"
                  className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
                >
                  <img
                    src={"/streema.webp"}
                    alt="Streema"
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto max-w-[130px] object-contain"
                  />
                </a>
              </div>
            </div>
            <div className="w-full border-t border-primary-foreground/10 pt-8 mt-4">
              <p className="text-xs text-primary-foreground/30">
                © {new Date().getFullYear()} <RadioName />. Todos os direitos reservados.
              </p>
              <p className="mt-2 text-xs text-primary-foreground/20">
                Desenvolvido por{" "}
                <a
                  href="https://smartlocal.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/40 hover:text-secondary transition-colors"
                >
                  Douglas Borges - Smart Local
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
