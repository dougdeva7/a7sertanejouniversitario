import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Início", link: "#hero" },
  { label: "Ao Vivo", link: "#player" },
  { label: "Conteúdo", link: "#content" },
  { label: "Sobre", link: "#about" },
  { label: "App", link: "#app" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  // Laranja extraído do logotipo oficial, com azul marinho como base.
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 not-italic bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 lg:px-8 relative">
        {/* Menu Esquerda */}
        <nav className="hidden gap-8 md:flex absolute left-8">
          {menuItems.slice(0, 3).map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="font-body text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-ink text-[#002366]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Logo Central */}
        <a href="#hero" className="flex items-center">
          <img
            src="/images/logo-a7sertanejouniversitario.webp"
            alt="A7 Sertanejo Universitário FM"
            width={256}
            height={256}
            className="h-20 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105 sm:h-24"
          />
        </a>

        {/* Menu Direita */}
        <nav className="hidden gap-6 lg:gap-8 md:flex absolute right-8 items-center">
          {menuItems.slice(3).map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="font-body text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-ink text-[#002366]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#player"
            className="rounded-full brand-button bg-secondary px-6 py-2 text-xs font-black uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-brand-hover hover:shadow-xl"
          >
            Ouça Agora
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-4 transition-colors text-[#002366]"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Glass Effect) */}
      {open && (
        <nav
          id="mobile-menu"
          className="flex flex-col gap-6 bg-white/95 backdrop-blur-xl px-8 py-10 md:hidden border-b border-gray-200 animate-in fade-in slide-in-from-top-4"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              onClick={() => setOpen(false)}
              className="font-body text-lg font-bold uppercase tracking-widest text-[#002366] transition-colors hover:text-brand-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#player"
            onClick={() => setOpen(false)}
            className="w-full text-center rounded-lg brand-button bg-secondary py-4 text-sm font-black uppercase text-white"
          >
            Ouça Agora Ao Vivo
          </a>
        </nav>
      )}
    </header>
  );
}
