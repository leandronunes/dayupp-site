import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", title: "Organize", text: "Cadastre seus alunos, monte a agenda e organize sua rotina." },
  { n: "02", title: "Prescreva", text: "Crie avaliações e treinos personalizados para cada aluno." },
  { n: "03", title: "Acompanhe", text: "Veja evolução, desempenho e resultados em tempo real." },
  { n: "04", title: "Evolua", text: "Conquiste melhores resultados e novas receitas no marketplace." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-14 flex max-w-[640px] flex-col gap-3.5">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="inline-block h-px w-3.5 bg-primary" />
            Como funciona
          </span>
          <h2 className="text-[1.7rem] font-bold md:text-[2.35rem]">
            Comece a atender e a vender treinos na mesma tarde.
          </h2>
          <p className="max-w-[62ch] text-[1.05rem] text-muted-foreground">
            Sem burocracia de configuração. Sem depender de site próprio, checkout ou infraestrutura de
            pagamento.
          </p>
        </div>

        <div className="relative">
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-4 hidden h-[60px] w-full lg:block"
          >
            <polyline
              points="60,50 310,38 560,26 940,8"
              fill="none"
              stroke="oklch(0.84 0.17 85 / 0.4)"
              strokeWidth="2"
              strokeDasharray="1 9"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <Reveal key={s.n}>
                <div className="relative pt-2">
                  <span className="relative z-10 flex size-9 items-center justify-center rounded-full border border-primary/30 bg-background font-mono text-[0.78rem] font-semibold text-primary">
                    {s.n}
                  </span>
                  <h3 className="mt-3.5 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[0.88rem] text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
