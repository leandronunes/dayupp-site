# Dayupp — site institucional

Landing page pública do **Dayupp**, publicada em [dayupp.com.br](https://dayupp.com.br). Divulga o produto — gestão de atendimento para personal trainers avulsos + marketplace público de treinos por assinatura — e direciona para o aplicativo em [app.dayupp.com.br](https://app.dayupp.com.br).

Este site é uma peça de marketing separada do aplicativo em si. O app (agenda, clientes, treinos, avaliações, financeiro, marketplace) vive em [`clinic-for-life`](../clinic-for-life), rodando com o tema `dayupp`; este repositório só existe para apresentar o produto e capturar cadastros.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`, tokens via `@theme inline`)
- Sem backend, sem roteamento — SPA de página única, tudo em `src/App.tsx`

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173 (ou próxima porta livre)
```

Outros scripts:

```bash
npm run build     # tsc -b && vite build → dist/
npm run preview   # serve o build de produção localmente
npm run lint       # eslint
```

## Estrutura

```
index.html              # meta tags, OG, fonte Poppins (Google Fonts)
src/
  main.tsx              # entry point
  App.tsx                # composição das seções da página
  index.css              # tokens do tema dayupp (Tailwind v4 @theme)
  components/
    Header.tsx            # nav fixa + CTA para app.dayupp.com.br
    Hero.tsx / HeroCanvas.tsx     # hero + curva ascendente animada (canvas)
    Features.tsx           # grid de funcionalidades do app
    Marketplace.tsx         # vitrine pública de treinos (spotlight)
    HowItWorks.tsx          # fluxo de 4 passos para o personal
    Evolution.tsx / EvolutionCanvas.tsx  # card de métricas + sparkline
    BusinessModel.tsx        # como a plataforma gera receita
    Faq.tsx                 # perguntas frequentes (accordion)
    CtaBand.tsx              # chamada final em gradient-brand
    Footer.tsx
    Logo.tsx / icons.tsx     # marca e ícones lineares reutilizáveis
  hooks/
    useReveal.ts            # IntersectionObserver p/ animação de entrada
public/
  favicon.svg              # ícone oficial do tema dayupp
```

## Design system

O tema é **dark-first**, sem versão clara equivalente — os tokens em `src/index.css` são uma cópia fiel de `clinic-for-life/src/styles/themes.css` (bloco `[data-theme="dayupp"]`), fixados direto em `:root` já que este site não precisa de troca de tema white-label.

Regras principais (ver `clinic-for-life` para o design system completo):

- Cor de marca: `--primary` (dourado, `oklch(0.84 0.17 85)`), usado com moderação — ação, progresso, foco, nunca como cor de fundo geral
- Tipografia única: **Poppins** (carregada via Google Fonts em `index.html`)
- Não hardcodar cores: usar as classes Tailwind semânticas (`bg-primary`, `text-muted-foreground`, `border-border`, `brand-gradient`, `shadow-glow` etc.) já mapeadas em `@theme inline`
- Qualquer novo componente deve reutilizar esses tokens antes de introduzir cor/gradiente/sombra nova

## Pendências conhecidas

- Preços de assinatura: a seção "Como o Dayupp gera receita" descreve o modelo (gestão gratuita + comissão sobre vendas no marketplace) sem valores fixos, porque ainda não há tabela de preços definida
- Deploy/DNS de `dayupp.com.br` ainda não configurado
