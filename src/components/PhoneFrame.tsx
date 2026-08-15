import type { ReactNode } from "react";

/**
 * Chrome de smartphone reutilizável — usado no Hero, na seção do
 * aplicativo e na seção do aluno para mostrar telas reais do Dayupp
 * em vez de blocos de texto (DS §26, ponto 6 do brief: "mostrar muito
 * mais o produto").
 */
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-[248px] shrink-0 rounded-[2.4rem] border border-white/15 bg-[#0b0b0a] p-2.5 shadow-elevated ${className}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/70" />
      <div className="relative aspect-[9/19.3] overflow-hidden rounded-[1.9rem] bg-background">{children}</div>
    </div>
  );
}
