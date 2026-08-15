import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", title: "Crie sua conta", text: "Cadastre seu perfil, especialidades e CREF em poucos minutos." },
  {
    n: "02",
    title: "Organize seu atendimento",
    text: "Importe ou cadastre clientes, monte a agenda e prescreva os primeiros treinos.",
  },
  {
    n: "03",
    title: "Publique no marketplace",
    text: "Transforme um programa validado em produto: capa, vídeo de apresentação e preço mensal.",
  },
  {
    n: "04",
    title: "Acompanhe os resultados",
    text: "Assinantes, receita, avaliações e conversão em um painel só seu.",
  },
];

export function HowItWorks() {
  return (
    <section id="personais" className="py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-12 flex max-w-[640px] flex-col gap-3.5">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="inline-block h-px w-3.5 bg-primary" />
            Para você, personal
          </span>
          <h2 className="text-[1.7rem] font-bold md:text-[2.35rem]">
            Comece a atender e a vender treinos na mesma tarde.
          </h2>
          <p className="max-w-[62ch] text-[1.05rem] text-muted-foreground">
            Sem burocracia de configuração. Sem depender de site próprio, checkout ou infraestrutura de
            pagamento.
          </p>
        </div>

        <div className="mb-10 h-px bg-border" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <Reveal key={s.n}>
              <div className="pt-2">
                <span className="font-mono text-[0.78rem] font-semibold tracking-wide text-primary">{s.n}</span>
                <h3 className="mt-2.5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-[0.88rem] text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
