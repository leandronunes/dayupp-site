import { Reveal } from "./Reveal";

const CARDS = [
  {
    tag: "Gestão",
    title: "Uso do aplicativo",
    text: "Agenda, clientes, treinos, avaliações e financeiro para o seu atendimento particular.",
    items: ["Sem taxa por atendimento", "Seus clientes continuam seus"],
    highlight: false,
  },
  {
    tag: "Marketplace",
    title: "Assinatura dos seus programas",
    text: "Você define o valor mensal do treino publicado na vitrine pública.",
    items: ["Pagamento via cartão, PIX ou PIX automático", "Liberação e cobrança recorrente automáticas"],
    highlight: true,
  },
  {
    tag: "Comissão",
    title: "Percentual por assinatura vendida",
    text: "A plataforma fica com uma comissão apenas sobre as vendas realizadas no marketplace.",
    items: ["Sem venda, sem comissão", "Extrato transparente no seu painel"],
    highlight: false,
  },
];

export function BusinessModel() {
  return (
    <section id="precos" className="py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-12 flex max-w-[640px] flex-col gap-3.5">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="inline-block h-px w-3.5 bg-primary" />
            Como o Dayupp gera receita
          </span>
          <h2 className="text-[1.7rem] font-bold md:text-[2.35rem]">
            Um modelo simples: você define o preço, a plataforma cuida do resto.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {CARDS.map((c) => (
            <Reveal key={c.tag}>
              <div
                className={
                  c.highlight
                    ? "brand-gradient shadow-glow flex h-full flex-col gap-3 rounded-lg p-7"
                    : "flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-7"
                }
              >
                <span
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: c.highlight ? "var(--gradient-brand-accent)" : "var(--color-primary)" }}
                >
                  {c.tag}
                </span>
                <h3
                  className="text-[1.15rem] font-bold"
                  style={{ color: c.highlight ? "var(--color-primary-foreground)" : undefined }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-[0.9rem]"
                  style={{ color: c.highlight ? "oklch(0.30 0.05 85)" : "var(--color-muted-foreground)" }}
                >
                  {c.text}
                </p>
                <ul className="flex flex-col gap-2 text-[0.86rem]">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2"
                      style={{ color: c.highlight ? "oklch(0.30 0.05 85)" : "var(--color-muted-foreground)" }}
                    >
                      <span
                        className="shrink-0"
                        style={{ color: c.highlight ? "var(--gradient-brand-accent)" : "var(--color-primary)" }}
                      >
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
