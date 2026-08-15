import { DashboardMock } from "./DashboardMock";
import { IconCheck } from "./icons";
import { APP_URL } from "./Header";

const BULLETS = [
  "Agenda e clientes organizados em um só lugar",
  "Treinos e avaliações sem depender de planilha",
  "Financeiro, recebimentos e relatórios sob controle",
];

export function ForProfessional() {
  return (
    <section id="personal" className="border-y border-border bg-card py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="inline-block h-px w-3.5 bg-primary" />
              Para o personal
            </span>
            <h2 className="text-[1.7rem] font-bold md:text-[2.2rem]">
              Você cuida dos seus alunos. <span className="text-primary">O Dayupp cuida da sua operação.</span>
            </h2>
            <p className="max-w-[48ch] text-[1rem] text-muted-foreground">
              Agenda, clientes, treinos, avaliações, financeiro e relatórios — tudo organizado para que a
              complexidade do dia a dia fique com a plataforma, e o seu foco fique só com o aluno.
            </p>

            <div className="mt-1 flex flex-col gap-3">
              {BULLETS.map((b) => (
                <div key={b} className="flex items-start gap-3 text-[0.92rem] text-muted-foreground">
                  <IconCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-1">
              <a
                href={APP_URL}
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px hover:bg-accent"
              >
                Conhecer o Dayupp
              </a>
            </div>
          </div>

          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
