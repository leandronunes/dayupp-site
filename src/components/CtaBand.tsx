import { APP_URL } from "./Header";

export function CtaBand() {
  return (
    <section className="py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="brand-gradient shadow-glow flex flex-col items-start gap-8 rounded-xl p-9 sm:flex-row sm:items-center sm:justify-between sm:p-14">
          <div>
            <h2 className="text-[1.7rem] font-bold text-primary-foreground md:text-[2.1rem]">
              Comece a evoluir todos os dias.
            </h2>
            <p className="mt-2 max-w-[46ch] text-[1.02rem]" style={{ color: "oklch(0.30 0.05 85)" }}>
              Crie sua conta, organize seu atendimento e publique seu primeiro treino no marketplace.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={APP_URL}
              className="inline-flex h-13 items-center justify-center rounded-sm bg-[oklch(0.18_0_90)] px-6.5 text-base font-semibold text-primary transition-transform hover:-translate-y-px"
            >
              Começar grátis
            </a>
            <a
              href="#marketplace"
              className="inline-flex h-13 items-center justify-center rounded-sm border px-6.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.18_0_90_/_0.08)]"
              style={{ borderColor: "oklch(0.18 0 90 / 0.35)" }}
            >
              Ver o marketplace
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
