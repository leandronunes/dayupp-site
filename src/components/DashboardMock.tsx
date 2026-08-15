import { IconAgenda, IconClients, IconEvolution, IconFinance, IconWorkout } from "./icons";

const KPIS = [
  { label: "Clientes ativos", value: "86", delta: "↑ 6%" },
  { label: "Treinos da semana", value: "142", delta: "↑ 11%" },
  { label: "Faturamento do mês", value: "R$ 12.4k", delta: "↑ 9%" },
  { label: "Avaliações pendentes", value: "3", delta: null },
];

const AREAS = [
  { icon: IconAgenda, label: "Agenda" },
  { icon: IconClients, label: "Clientes" },
  { icon: IconWorkout, label: "Treinos" },
  { icon: IconEvolution, label: "Avaliações" },
  { icon: IconFinance, label: "Financeiro" },
];

export function DashboardMock() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.84 0.17 85 / 0.10), transparent)" }}
      />
      <div className="surface-gradient rounded-xl border border-border p-5 shadow-elevated">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[0.82rem] font-semibold text-foreground">Sua operação, em um painel</span>
          <span className="flex size-7 items-center justify-center rounded-full bg-secondary text-[0.7rem] font-semibold text-muted-foreground">
            RP
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {KPIS.map((k) => (
            <div key={k.label} className="rounded-lg border border-border bg-card p-3.5">
              <div className="text-[0.7rem] text-muted-foreground">{k.label}</div>
              <div className="mt-1 flex items-baseline gap-1.5 font-mono text-[1.05rem] font-bold tabular-nums">
                {k.value}
                {k.delta && <span className="font-sans text-[0.66rem] font-semibold text-success">{k.delta}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2 border-t border-border pt-3.5">
          {AREAS.map((a) => (
            <span
              key={a.label}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1.5 text-[0.72rem] text-muted-foreground"
            >
              <a.icon className="size-3.5 text-primary" />
              {a.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
