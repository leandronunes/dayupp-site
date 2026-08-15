import { HeroCanvas } from "./HeroCanvas";
import { APP_URL } from "./Header";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border py-22 md:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(680px 420px at 82% 8%, oklch(0.84 0.17 85 / 0.14), transparent 60%), radial-gradient(520px 360px at 0% 100%, oklch(0.29 0.004 197 / 0.5), transparent 65%)",
        }}
      />
      <HeroCanvas />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <div className="flex max-w-[640px] flex-col gap-5">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="inline-block h-px w-3.5 bg-primary" />
            Para personal trainers avulsos
          </span>

          <h1 className="text-[2.35rem] leading-[1.06] font-bold md:text-[3.1rem] lg:text-[3.6rem]">
            Sua rotina de personal, organizada.{" "}
            <span className="text-primary">Sua evolução, todos os dias.</span>
          </h1>

          <p className="max-w-[62ch] text-[1.05rem] text-muted-foreground">
            Dayupp reúne agenda, clientes, treinos, avaliações e financeiro em um só lugar — e abre um novo canal
            de receita com o marketplace público de treinos, onde qualquer pessoa pode encontrar e assinar o seu
            programa.
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-3.5">
            <a
              href={APP_URL}
              className="inline-flex h-13 items-center justify-center rounded-sm bg-primary px-6.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-px hover:bg-accent"
            >
              Começar grátis
            </a>
            <a
              href="#marketplace"
              className="inline-flex h-13 items-center justify-center rounded-sm border border-white/15 px-6.5 text-base font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
            >
              Conhecer o marketplace
            </a>
          </div>

          <span className="flex items-center gap-2 text-[0.82rem] text-muted-foreground/80">
            <span className="size-1.5 shrink-0 rounded-full bg-success" />
            Sem cartão de crédito para começar · leva menos de 5 minutos
          </span>
        </div>
      </div>
    </section>
  );
}
