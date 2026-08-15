import { EvolutionCanvas } from "./EvolutionCanvas";
import { IconWorkout } from "./icons";

const MINI_DATA = [30, 34, 32, 40, 44, 42, 50, 55, 53, 60, 66, 64, 70];

export function StudentPhoneScreen() {
  return (
    <div className="flex h-full flex-col gap-4 bg-background px-4 pb-4 pt-8 text-foreground">
      <div>
        <div className="text-[13px] font-semibold">Olá, Ana 👋</div>
        <div className="text-[10px] text-muted-foreground">Pronta pro seu treino de hoje?</div>
      </div>

      <div className="rounded-xl border border-primary/25 bg-primary/10 p-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[8px] font-semibold uppercase tracking-wide text-primary/80">Treino de hoje</div>
            <div className="mt-1 text-[12px] font-semibold">Pernas e Glúteos</div>
            <div className="text-[9px] text-muted-foreground">5 exercícios · 40 min</div>
          </div>
          <div className="flex size-6 items-center justify-center rounded-md bg-primary/20 text-primary">
            <IconWorkout className="size-3.5" />
          </div>
        </div>
        <div className="mt-2.5 inline-flex h-6 items-center rounded-md bg-primary px-2.5 text-[9px] font-semibold text-primary-foreground">
          Começar treino
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-3">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold text-foreground">Sua evolução</span>
          <span className="text-[9px] font-semibold text-success">↑ 12%</span>
        </div>
        <EvolutionCanvas className="mt-1.5 h-[52px] w-full" data={MINI_DATA} showGrid={false} />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-xl border border-border bg-card p-2.5">
          <div className="text-[8px] text-muted-foreground">Peso</div>
          <div className="text-[11px] font-semibold">68,4 kg</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-2.5">
          <div className="text-[8px] text-muted-foreground">Sequência</div>
          <div className="text-[11px] font-semibold">12 dias</div>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between rounded-xl border border-border bg-card p-2.5">
        <div>
          <div className="text-[8.5px] font-semibold">Marketplace</div>
          <div className="text-[7.5px] text-muted-foreground/70">Novos treinos pra você</div>
        </div>
        <span className="rounded-md bg-secondary px-2 py-1 text-[7.5px] font-semibold text-foreground">Ver</span>
      </div>
    </div>
  );
}
