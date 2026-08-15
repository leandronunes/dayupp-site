import { useState } from "react";
import { Logo } from "./Logo";
import { IconClose, IconMenu } from "./icons";

const APP_URL = "https://app.dayupp.com.br";

const NAV_LINKS = [
  { href: "#produto", label: "Produto" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#personais", label: "Para personais" },
  { href: "#modelo", label: "Como funciona" },
  { href: "#faq", label: "Perguntas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-6 px-6">
        <a href="#top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={APP_URL}
            className="inline-flex h-11 items-center justify-center rounded-sm border border-white/15 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
          >
            Entrar
          </a>
          <a
            href={APP_URL}
            className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px hover:bg-accent"
          >
            Começar grátis
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-sm border border-white/15 text-foreground md:hidden"
        >
          {open ? <IconClose className="size-4.5" /> : <IconMenu className="size-4.5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Navegação principal (mobile)"
          className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-sm font-medium text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
            <a
              href={APP_URL}
              className="inline-flex h-11 items-center justify-center rounded-sm border border-white/15 px-5 text-sm font-semibold text-foreground"
            >
              Entrar
            </a>
            <a
              href={APP_URL}
              className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Começar grátis
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export { APP_URL };
