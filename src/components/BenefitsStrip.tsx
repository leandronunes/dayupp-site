import type { ComponentType, SVGProps } from "react";
import { IconAgenda, IconClients, IconEvolution, IconFinance, IconWorkout } from "./icons";

const ITEMS: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; text: string }[] = [
  { icon: IconAgenda, title: "Tudo em um só lugar", text: "Gestão completa do seu negócio." },
  { icon: IconEvolution, title: "Mais resultados", text: "Acompanhe a evolução e engaje seus alunos." },
  { icon: IconClients, title: "Mais receita", text: "Venda treinos e programas no marketplace." },
  { icon: IconFinance, title: "Segurança total", text: "Seus dados protegidos com criptografia." },
  { icon: IconWorkout, title: "App moderno", text: "Experiência rápida, intuitiva e sempre com você." },
];

export function BenefitsStrip() {
  return (
    <div id="recursos" className="border-b border-border bg-card/60">
      <div className="mx-auto max-w-[1180px] px-6 py-7">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-border">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex items-start gap-3 lg:pl-6 lg:first:pl-0">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/25 text-primary">
                <item.icon className="size-4.5" />
              </span>
              <div>
                <div className="text-[0.88rem] font-semibold text-foreground">{item.title}</div>
                <div className="text-[0.78rem] leading-snug text-muted-foreground">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
