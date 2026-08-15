import { EvolutionCanvas } from "./EvolutionCanvas";
import { HeroPhoneScreen } from "./HeroPhoneScreen";
import { PhoneFrame } from "./PhoneFrame";
import { IconFinance, IconWorkout } from "./icons";

const CHART_DATA = [18, 22, 19, 28, 34, 30, 40, 46, 42, 52, 58, 55, 63, 70];

/**
 * Composição visual do Hero: cards flutuantes com dados reais do
 * produto + mockup de celular, todos lidos como parte da mesma
 * interface (ponto 2 do brief) em vez de imagens soltas.
 */
export function HeroShowcase() {
  return (
    <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center gap-5 lg:mx-0 lg:max-w-none lg:justify-end">
      <div className="hidden w-[240px] shrink-0 flex-col gap-4 sm:flex">
        <div className="rounded-xl border border-border bg-card p-4 shadow-elevated">
          <div className="flex items-center justify-between">
            <span className="text-[0.72rem] font-semibold whitespace-nowrap text-foreground">Evolução dos alunos</span>
            <span className="shrink-0 rounded-sm bg-secondary px-2 py-1 text-[0.62rem] whitespace-nowrap text-muted-foreground">
              7 dias
            </span>
          </div>
          <EvolutionCanvas className="mt-2 h-[90px] w-full" data={CHART_DATA} showGrid={false} />
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-elevated">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary/12 text-primary">
            <IconWorkout className="size-4.5" />
          </span>
          <div>
            <div className="text-[0.72rem] text-muted-foreground">Treinos concluídos</div>
            <div className="flex items-baseline gap-1.5 font-mono text-[1.15rem] font-bold tabular-nums">
              1.245 <span className="font-sans text-[0.68rem] font-semibold text-success">↑ 18%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-elevated">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary/12 text-primary">
            <IconFinance className="size-4.5" />
          </span>
          <div>
            <div className="text-[0.72rem] text-muted-foreground">Faturamento</div>
            <div className="flex items-baseline gap-1.5 font-mono text-[1.15rem] font-bold tabular-nums">
              R$ 48.690 <span className="font-sans text-[0.68rem] font-semibold text-success">↑ 15%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(closest-side, oklch(0.84 0.17 85 / 0.10), transparent)" }}
        />
        <PhoneFrame>
          <HeroPhoneScreen />
        </PhoneFrame>
      </div>
    </div>
  );
}
