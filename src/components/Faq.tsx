import { useState } from "react";

const ITEMS = [
  {
    q: "Preciso ter uma clínica ou empresa para usar o Dayupp?",
    a: "Não. O Dayupp foi generalizado para atender personal trainers avulsos, sem qualquer vínculo com clínicas ou academias específicas. Você usa o aplicativo por conta própria, com seus próprios clientes.",
  },
  {
    q: "Como funciona a assinatura de um treino no marketplace?",
    a: 'O aluno encontra o programa na vitrine pública, assina mensalmente por cartão, PIX ou PIX automático e, assim que o pagamento é aprovado, o treino é liberado automaticamente na área "Meus Treinos" dele dentro do aplicativo.',
  },
  {
    q: "Quem pode avaliar e perguntar sobre um programa?",
    a: "Qualquer visitante pode navegar, ler avaliações e perguntas. Para perguntar é preciso estar autenticado; para avaliar com nota é preciso ter assinado o programa e concluído ao menos 20% dele.",
  },
  {
    q: "O aplicativo tem versão para o aluno e para o personal?",
    a: "Sim. O mesmo aplicativo, em app.dayupp.com.br, atende os dois perfis: o personal gerencia atendimento e marketplace, e o aluno acompanha treinos, evolução e assinaturas.",
  },
  {
    q: "Posso migrar meus clientes e treinos atuais para o Dayupp?",
    a: "Sim, o cadastro de clientes e a prescrição de treinos ficam disponíveis logo após a criação da conta, para você reorganizar seu atendimento dentro da plataforma.",
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[0.98rem] font-semibold text-foreground"
      >
        {q}
        <span
          className={`flex size-5.5 shrink-0 items-center justify-center rounded-full border border-white/15 text-primary transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && <div className="max-w-[68ch] px-6 pb-5.5 text-[0.92rem] text-muted-foreground">{a}</div>}
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-y border-border bg-card/40 py-22">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mx-auto mb-12 flex max-w-[640px] flex-col items-center gap-3.5 text-center">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="inline-block h-px w-3.5 bg-primary" />
            Perguntas frequentes
          </span>
          <h2 className="text-[1.7rem] font-bold md:text-[2.35rem]">O que você precisa saber antes de começar</h2>
        </div>

        <div className="mx-auto flex max-w-[760px] flex-col gap-px overflow-hidden rounded-lg border border-border bg-border">
          {ITEMS.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
