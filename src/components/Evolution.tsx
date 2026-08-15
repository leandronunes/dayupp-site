import { EvolutionCanvas } from "./EvolutionCanvas";

const STATS = [
  { label: "Assinantes ativos no marketplace", value: "1.245", delta: "↑ 18%" },
  { label: "Treinos concluídos este mês", value: "8.930", delta: "↑ 9%" },
  { label: "Nota média dos programas", value: "4.8", delta: "↑ 0.2" },
];

export function Evolution() {
  return (
    <section className="border-y border-border bg-card py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-12 flex max-w-[640px] flex-col gap-3.5">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="inline-block h-px w-3.5 bg-primary" />
            Evolua todos os dias
          </span>
          <h2 className="text-[1.7rem] font-bold md:text-[2.35rem]">
            Cada atendimento vira dado. Cada dado vira progresso visível.
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-9 rounded-xl border border-border bg-background p-8 shadow-elevated lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col gap-5.5">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-[0.82rem] text-muted-foreground">{s.label}</div>
                <div className="flex items-baseline gap-2 font-mono text-[1.9rem] font-bold text-foreground tabular-nums">
                  {s.value} <span className="font-sans text-[0.85rem] font-semibold text-success">{s.delta}</span>
                </div>
              </div>
            ))}
          </div>
          <EvolutionCanvas />
        </div>
      </div>
    </section>
  );
}
