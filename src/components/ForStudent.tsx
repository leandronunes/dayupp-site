import { PhoneFrame } from "./PhoneFrame";
import { StudentPhoneScreen } from "./StudentPhoneScreen";
import { IconCheck } from "./icons";

const BULLETS = [
  "Treino do dia sempre à mão, com progresso em tempo real",
  "Evolução, medidas e desempenho registrados automaticamente",
  "Acesso direto ao marketplace para descobrir novos programas",
];

export function ForStudent() {
  return (
    <section className="py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-fit lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -inset-8 -z-10 rounded-full opacity-70 blur-3xl"
                style={{ background: "radial-gradient(closest-side, oklch(0.84 0.17 85 / 0.10), transparent)" }}
              />
              <PhoneFrame>
                <StudentPhoneScreen />
              </PhoneFrame>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="inline-block h-px w-3.5 bg-primary" />
              Para o aluno
            </span>
            <h2 className="text-[1.7rem] font-bold md:text-[2.2rem]">
              Seu aluno também <span className="text-primary">evolui com o Dayupp.</span>
            </h2>
            <p className="max-w-[48ch] text-[1rem] text-muted-foreground">
              O Dayupp não é só um sistema administrativo para o personal — é o parceiro digital do aluno durante
              a evolução dele: treino do dia, progresso, medidas, desempenho e comunicação direta, tudo no
              mesmo app.
            </p>

            <div className="mt-1 flex flex-col gap-3">
              {BULLETS.map((b) => (
                <div key={b} className="flex items-start gap-3 text-[0.92rem] text-muted-foreground">
                  <IconCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
