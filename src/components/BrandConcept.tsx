const PILLARS = [
  { letters: "DAY", title: "Todos os dias.", text: "A rotina do seu atendimento, organizada dia após dia." },
  { letters: "UP", title: "Sempre evoluindo.", text: "Progresso visível — pra você e para cada aluno seu." },
  { letters: "APP", title: "Tecnologia que acompanha.", text: "Um só aplicativo, do primeiro contato à receita recorrente." },
];

export function BrandConcept() {
  return (
    <section className="border-y border-border bg-card py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mx-auto mb-14 flex max-w-[640px] flex-col items-center gap-3.5 text-center">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="inline-block h-px w-3.5 bg-primary" />O significado do nome
          </span>
          <h2 className="text-[1.7rem] font-bold md:text-[2.35rem]">Day + Up. Um propósito em cada letra.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.letters} className="rounded-lg border border-border bg-background p-7 text-center">
              <div className="font-mono text-[2rem] font-bold tracking-tight text-primary">{p.letters}</div>
              <h3 className="mt-3 text-[1.02rem] font-semibold">{p.title}</h3>
              <p className="mt-2 text-[0.88rem] text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-[52ch] text-center text-[1.15rem] font-medium text-foreground">
          Dayupp é o parceiro que acompanha você{" "}
          <span className="text-primary">todos os dias na sua evolução.</span>
        </p>
      </div>
    </section>
  );
}
