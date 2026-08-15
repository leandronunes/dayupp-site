import { IconWorkout } from "./icons";

export function HeroPhoneScreen() {
  return (
    <div className="flex h-full flex-col gap-4 bg-background px-4 pb-4 pt-8 text-foreground">
      <div className="flex items-center justify-between text-[9px] font-semibold text-muted-foreground/70">
        <span>9:41</span>
        <span className="flex items-center gap-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
          <span className="h-1.5 w-2.5 rounded-full bg-muted-foreground/70" />
          <span className="h-1.5 w-3.5 rounded-sm bg-success" />
        </span>
      </div>

      <div>
        <div className="text-[13px] font-semibold">Olá, Rafael! 👋</div>
        <div className="text-[10px] text-muted-foreground">Pronto para evoluir hoje?</div>
      </div>

      <div className="rounded-xl border border-primary/25 bg-primary/10 p-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[8px] font-semibold uppercase tracking-wide text-primary/80">Treino de hoje</div>
            <div className="mt-1 text-[12px] font-semibold">Peito e Tríceps</div>
            <div className="text-[9px] text-muted-foreground">6 exercícios</div>
          </div>
          <div className="flex size-6 items-center justify-center rounded-md bg-primary/20 text-primary">
            <IconWorkout className="size-3.5" />
          </div>
        </div>
        <div className="mt-2.5 inline-flex h-6 items-center rounded-md bg-primary px-2.5 text-[9px] font-semibold text-primary-foreground">
          Iniciar treino
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between">
          <span className="text-[9px] text-muted-foreground">Progresso da semana</span>
          <span className="text-[9px] font-semibold text-foreground">67%</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[67%] rounded-full bg-primary" />
        </div>
        <div className="mt-1 text-[8px] text-muted-foreground/70">4 de 6 treinos</div>
      </div>

      <div className="flex-1">
        <div className="text-[9px] font-semibold text-muted-foreground">Próximas consultas</div>
        <div className="mt-2 flex flex-col gap-2">
          {[
            { name: "Ana Beatriz", sub: "Avaliação física", time: "09:00" },
            { name: "João Pedro", sub: "Consulta médica", time: "10:00" },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-2 rounded-lg bg-card px-2 py-1.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-[8px] font-semibold text-muted-foreground">
                {c.name.charAt(0)}
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[9px] font-medium">{c.name}</div>
                <div className="truncate text-[7.5px] text-muted-foreground/70">{c.sub}</div>
              </div>
              <span className="shrink-0 text-[8px] text-muted-foreground/70">{c.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
