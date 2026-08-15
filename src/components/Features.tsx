import { AgendaPhoneScreen } from "./AgendaPhoneScreen";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";
import { IconAgenda, IconClients, IconFinance, IconWorkout } from "./icons";
import type { ComponentType, SVGProps } from "react";

const FEATURES: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; text: string }[] = [
  {
    icon: IconClients,
    title: "Gestão de alunos",
    text: "Histórico completo, avaliações e acompanhamento.",
  },
  {
    icon: IconWorkout,
    title: "Treinos personalizados",
    text: "Monte, prescreva e ajuste treinos com facilidade.",
  },
  {
    icon: IconAgenda,
    title: "Agenda inteligente",
    text: "Organize consultas e treinos de forma prática.",
  },
  {
    icon: IconFinance,
    title: "Financeiro simplificado",
    text: "Controle ganhos, recebimentos e relatórios.",
  },
];

export function Features() {
  return (
    <section id="produto" className="py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[auto_1fr_1fr] lg:gap-10">
          <div className="mx-auto shrink-0 lg:mx-0">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-8 -z-10 rounded-full opacity-70 blur-3xl"
                style={{ background: "radial-gradient(closest-side, oklch(0.84 0.17 85 / 0.10), transparent)" }}
              />
              <PhoneFrame>
                <AgendaPhoneScreen />
              </PhoneFrame>
            </div>
          </div>

          <Reveal className="flex flex-col gap-3.5">
            <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="inline-block h-px w-3.5 bg-primary" />O aplicativo
            </span>
            <h2 className="text-[1.7rem] font-bold md:text-[2.2rem]">
              Tudo o que o seu atendimento precisa, <span className="text-primary">em um app só.</span>
            </h2>
            <p className="max-w-[42ch] text-[1rem] text-muted-foreground">
              Tenha mais tempo para o que realmente importa: seus alunos. O Dayupp cuida do resto.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <Reveal key={f.title}>
                <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-white/15">
                  <div className="flex size-10 items-center justify-center rounded-[10px] bg-primary/12 text-primary">
                    <f.icon className="size-5" />
                  </div>
                  <h3 className="text-[0.98rem] font-semibold">{f.title}</h3>
                  <p className="text-[0.86rem] text-muted-foreground">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
