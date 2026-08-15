// Números ilustrativos até existir telemetria real do produto — trocar
// pelas métricas verdadeiras assim que a plataforma tiver uso em produção.
const STATS = [
  { value: "328+", label: "Clientes ativos" },
  { value: "1.245+", label: "Treinos realizados" },
  { value: "86+", label: "Avaliações" },
  { value: "R$ 48 mil+", label: "Movimentados" },
];

export function Stats() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-2 gap-8 rounded-xl border border-border bg-card px-8 py-10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono text-[1.9rem] font-bold text-primary tabular-nums sm:text-[2.2rem]">
                {s.value}
              </div>
              <div className="mt-1.5 text-[0.82rem] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
