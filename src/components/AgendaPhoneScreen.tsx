import { IconAgenda } from "./icons";

const DAYS = [
  { d: "Seg", n: 12 },
  { d: "Ter", n: 13 },
  { d: "Qua", n: 14 },
  { d: "Qui", n: 15 },
  { d: "Sex", n: 16 },
];

export function AgendaPhoneScreen() {
  return (
    <div className="flex h-full flex-col gap-4 bg-background px-4 pb-4 pt-8 text-foreground">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold">Agenda</span>
        <span className="flex size-6 items-center justify-center rounded-md bg-secondary text-primary">
          <IconAgenda className="size-3.5" />
        </span>
      </div>

      <div className="flex justify-between">
        {DAYS.map((day) => (
          <div
            key={day.d}
            className={`flex w-9 flex-col items-center gap-1 rounded-lg py-1.5 text-center ${
              day.n === 14 ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            <span className="text-[7.5px] font-medium uppercase">{day.d}</span>
            <span className="text-[11px] font-semibold">{day.n}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="text-[8.5px] font-semibold text-muted-foreground">09:00</div>
        <div className="rounded-lg border border-border bg-card p-2.5">
          <div className="flex items-center gap-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-[8px] font-semibold">
              A
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[9px] font-medium">Ana Beatriz</div>
              <div className="truncate text-[7.5px] text-muted-foreground/70">Avaliação física</div>
            </div>
            <span className="shrink-0 rounded-full bg-success/15 px-1.5 py-0.5 text-[6.5px] font-semibold text-success">
              Confirmado
            </span>
          </div>
        </div>

        <div className="mt-1 text-[8.5px] font-semibold text-muted-foreground">10:30</div>
        <div className="rounded-lg border border-border bg-card p-2.5">
          <div className="flex items-center gap-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-[8px] font-semibold">
              J
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[9px] font-medium">João Pedro</div>
              <div className="truncate text-[7.5px] text-muted-foreground/70">Treino — Pernas</div>
            </div>
            <span className="shrink-0 rounded-full bg-primary/15 px-1.5 py-0.5 text-[6.5px] font-semibold text-primary">
              Pendente
            </span>
          </div>
        </div>

        <div className="mt-1 text-[8.5px] font-semibold text-muted-foreground">14:00</div>
        <div className="rounded-lg border border-border bg-card p-2.5">
          <div className="flex items-center gap-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-[8px] font-semibold">
              M
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[9px] font-medium">Marina Duarte</div>
              <div className="truncate text-[7.5px] text-muted-foreground/70">Treino — Costas</div>
            </div>
            <span className="shrink-0 rounded-full bg-success/15 px-1.5 py-0.5 text-[6.5px] font-semibold text-success">
              Confirmado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
