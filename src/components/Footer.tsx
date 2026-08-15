import { Logo } from "./Logo";
import { APP_URL } from "./Header";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border py-14 pb-8">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex max-w-[300px] flex-col gap-3.5">
            <a href="#top">
              <Logo />
            </a>
            <p className="text-[0.88rem] text-muted-foreground">
              Evolua todos os dias. Gestão de atendimento e marketplace de treinos para personal trainers avulsos.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground/70">
              Produto
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#produto" className="text-[0.88rem] text-muted-foreground hover:text-foreground">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#marketplace" className="text-[0.88rem] text-muted-foreground hover:text-foreground">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#modelo" className="text-[0.88rem] text-muted-foreground hover:text-foreground">
                  Como funciona
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground/70">
              Para personais
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={APP_URL} className="text-[0.88rem] text-muted-foreground hover:text-foreground">
                  Criar conta
                </a>
              </li>
              <li>
                <a href="#personais" className="text-[0.88rem] text-muted-foreground hover:text-foreground">
                  Publicar treino
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[0.88rem] text-muted-foreground hover:text-foreground">
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground/70">
              Aplicativo
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={APP_URL} className="text-[0.88rem] text-muted-foreground hover:text-foreground">
                  Acessar app
                </a>
              </li>
              <li>
                <a href={APP_URL} className="text-[0.88rem] text-muted-foreground hover:text-foreground">
                  App do aluno
                </a>
              </li>
              <li>
                <a href={APP_URL} className="text-[0.88rem] text-muted-foreground hover:text-foreground">
                  App do personal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-[0.8rem] text-muted-foreground/70">
          <span>
            © {YEAR} Dayupp. Todos os direitos reservados.
          </span>
          <span className="flex gap-4">
            <a href="https://dayupp.com.br" className="hover:text-primary">
              dayupp.com.br
            </a>
            <a href={APP_URL} className="hover:text-primary">
              app.dayupp.com.br
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
