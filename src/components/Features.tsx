import { Reveal } from "./Reveal";
import { IconAgenda, IconClients, IconEvolution, IconFinance, IconFocus, IconWorkout } from "./icons";
import type { ComponentType, SVGProps } from "react";

const FEATURES: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; text: string }[] = [
  {
    icon: IconAgenda,
    title: "Agenda inteligente",
    text: "Horários, remarcações e lembretes automáticos para reduzir faltas e manter a semana sob controle.",
  },
  {
    icon: IconClients,
    title: "Clientes e histórico",
    text: "Ficha completa, anamnese, comorbidades e evolução de cada aluno, sempre à mão antes do atendimento.",
  },
  {
    icon: IconWorkout,
    title: "Prescrição de treinos",
    text: "Monte programas por fases, com séries, cargas, descanso e vídeo — reaproveite modelos entre alunos.",
  },
  {
    icon: IconEvolution,
    title: "Avaliações físicas",
    text: "Medidas, composição corporal e desempenho registrados ao longo do tempo, com evolução visual clara.",
  },
  {
    icon: IconFinance,
    title: "Financeiro",
    text: "Pagamentos, recorrência, inadimplência e faturamento organizados sem depender de planilha.",
  },
  {
    icon: IconFocus,
    title: "Modo execução",
    text: "Tela de treino imersiva para o aluno treinar sozinho, com séries, descanso e progresso em tempo real.",
  },
];

export function Features() {
  return (
    <section id="produto" className="py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-12 flex max-w-[640px] flex-col gap-3.5">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="inline-block h-px w-3.5 bg-primary" />O aplicativo
          </span>
          <h2 className="text-[1.7rem] font-bold md:text-[2.35rem]">
            Tudo o que o seu atendimento precisa, em um app só.
          </h2>
          <p className="max-w-[62ch] text-[1.05rem] text-muted-foreground">
            Do primeiro contato ao acompanhamento de longo prazo: Dayupp foi pensado para o personal que atua por
            conta própria e precisa de uma ferramenta tão organizada quanto ele.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Reveal key={f.title}>
              <div className="flex h-full flex-col gap-3.5 rounded-lg border border-border bg-card p-6.5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-white/15">
                <div className="flex size-10.5 items-center justify-center rounded-[10px] bg-primary/12 text-primary">
                  <f.icon className="size-5.5" />
                </div>
                <h3 className="text-[1.05rem] font-semibold">{f.title}</h3>
                <p className="text-[0.92rem] text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
