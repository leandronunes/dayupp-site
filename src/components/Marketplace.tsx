import { IconCheck, IconEvolution, IconFocus, IconSearch, IconWorkout } from "./icons";
import { APP_URL } from "./Header";

const BULLETS = [
  {
    title: "Receita recorrente",
    text: "assinatura mensal liberada automaticamente após o pagamento.",
  },
  {
    title: "Busca por objetivo, tag ou comorbidade",
    text: 'do "core para lombalgia" ao "hipertrofia avançada".',
  },
  {
    title: "Avaliações e perguntas públicas",
    text: "prova social que constrói reputação ao longo do tempo.",
  },
  {
    title: "Liberação automática",
    text: "o treino entra na conta do aluno assim que o pagamento é aprovado.",
  },
];

const PROGRAMS = [
  {
    icon: IconWorkout,
    title: "Hipertrofia Avançada",
    sub: "Lucas Personal · 12 semanas · 812 alunos",
    price: "R$ 49,90/mês",
    rating: "★★★★★ 4.9",
  },
  {
    icon: IconEvolution,
    title: "Core para Lombalgia",
    sub: "Fernanda Ortiz · Contínuo · 634 alunos",
    price: "R$ 39,90/mês",
    rating: "★★★★★ 4.8",
  },
  {
    icon: IconFocus,
    title: "Mobilidade Diária",
    sub: "Rafael Andrade · 30 dias · 391 alunos",
    price: "R$ 19,90/mês",
    rating: "★★★★★ 4.7",
  },
];

export function Marketplace() {
  return (
    <section id="marketplace" className="border-y border-border bg-card py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="inline-block h-px w-3.5 bg-primary" />
              Marketplace Dayupp
            </span>
            <h2 className="text-[1.7rem] font-bold md:text-[2.35rem]">
              Transforme seu treino em <span className="text-primary">uma nova fonte de receita.</span>
            </h2>
            <p className="max-w-[62ch] text-[1.05rem] text-muted-foreground">
              Continue atendendo seus alunos particulares e, ao mesmo tempo, venda programas de treino para
              qualquer pessoa através do Marketplace Dayupp — uma vitrine pública, nos moldes de uma vitrine de
              cursos, onde qualquer pessoa navega, compara, avalia e assina sem precisar te conhecer antes.
            </p>

            <div className="mt-1 flex flex-col gap-3.5">
              {BULLETS.map((b) => (
                <div key={b.title} className="flex items-start gap-3 text-[0.94rem] text-muted-foreground">
                  <IconCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
                  <span>
                    <b className="font-semibold text-foreground">{b.title}</b> — {b.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-3">
              <a
                href={APP_URL}
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px hover:bg-accent"
              >
                Publicar meu primeiro treino
              </a>
              <a
                href={APP_URL}
                className="inline-flex h-12 items-center justify-center rounded-sm border border-white/15 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
              >
                Conhecer marketplace
              </a>
            </div>
          </div>

          <div className="surface-gradient rounded-xl border border-border p-5 shadow-elevated">
            <div className="mb-4 flex h-9.5 items-center gap-2 rounded-sm border border-border bg-secondary px-3 text-[0.82rem] text-muted-foreground/70">
              <IconSearch className="size-3.75 shrink-0" />
              Lombalgia, hipertrofia, corrida…
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="flex h-7 items-center rounded-full bg-primary px-3 text-[0.76rem] font-medium text-primary-foreground">
                Todos
              </span>
              {["Hipertrofia", "Emagrecimento", "Mobilidade", "Reabilitação"].map((c) => (
                <span
                  key={c}
                  className="flex h-7 items-center rounded-full border border-border bg-secondary px-3 text-[0.76rem] font-medium text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              {PROGRAMS.map((p) => (
                <div key={p.title} className="flex items-center gap-3 rounded-md border border-border bg-card p-3">
                  <div className="flex size-13 shrink-0 items-center justify-center rounded-[10px] border border-border bg-gradient-to-br from-secondary to-card text-primary">
                    <p.icon className="size-5.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[0.88rem] font-semibold text-foreground">{p.title}</div>
                    <div className="truncate text-[0.76rem] text-muted-foreground/70">{p.sub}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="font-mono text-[0.82rem] font-semibold text-primary tabular-nums">
                      {p.price}
                    </div>
                    <div className="text-[0.72rem] text-muted-foreground/70">{p.rating}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
