import { APP_URL } from "./Header";

export function CtaBand() {
  return (
    <section className="py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="brand-gradient shadow-glow flex flex-col items-start gap-8 rounded-xl p-9 sm:flex-row sm:items-center sm:justify-between sm:p-14">
          <div>
            <h2 className="text-[1.7rem] font-bold text-primary-foreground md:text-[2.1rem]">
              Pronto para levar sua gestão para o próximo nível?
            </h2>
            <p className="mt-2 max-w-[46ch] text-[1.02rem]" style={{ color: "oklch(0.30 0.05 85)" }}>
              Organize sua rotina, acompanhe seus alunos e transforme seu conhecimento em novas oportunidades.
            </p>
            <p className="mt-4 text-[0.82rem] font-medium" style={{ color: "oklch(0.30 0.05 85)" }}>
              Sem cartão de crédito • Comece em poucos minutos
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={APP_URL}
              className="inline-flex h-13 items-center justify-center rounded-sm bg-[oklch(0.18_0_90)] px-6.5 text-base font-semibold text-primary transition-transform hover:-translate-y-px"
            >
              Começar grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
