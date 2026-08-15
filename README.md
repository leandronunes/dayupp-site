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
index.html              # meta tags, OG, JSON-LD, GTM, preload de fontes
src/
  main.tsx              # entry point
  App.tsx                # composição das seções da página
  index.css              # tokens do tema dayupp + @font-face do Poppins self-hosted
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
  favicon.svg, favicon.ico, apple-touch-icon.png, icon-512.png
  og-image.png             # 1200×630, usado em og:image / twitter:image
  fonts/Poppins-{400,500,600,700}.woff2   # self-hosted, subset latin
  robots.txt, sitemap.xml
assets-src/
  app-icon.svg, og-image.svg  # fontes editáveis dos PNGs gerados em public/
```

## Design system

O tema é **dark-first**, sem versão clara equivalente — os tokens em `src/index.css` são uma cópia fiel de `clinic-for-life/src/styles/themes.css` (bloco `[data-theme="dayupp"]`), fixados direto em `:root` já que este site não precisa de troca de tema white-label.

Regras principais (ver `clinic-for-life` para o design system completo):

- Cor de marca: `--primary` (dourado, `oklch(0.84 0.17 85)`), usado com moderação — ação, progresso, foco, nunca como cor de fundo geral
- Tipografia única: **Poppins**, self-hosted (`public/fonts`, subset latin, mesmas `unicode-range` do Google Fonts) — sem request para `fonts.googleapis.com`
- Não hardcodar cores: usar as classes Tailwind semânticas (`bg-primary`, `text-muted-foreground`, `border-border`, `brand-gradient`, `shadow-glow` etc.) já mapeadas em `@theme inline`
- Qualquer novo componente deve reutilizar esses tokens antes de introduzir cor/gradiente/sombra nova

## SEO, analytics e performance

Características técnicas trazidas do [`clinic-for-life-site`](../clinic-for-life-site) (o site institucional já em produção no Render), adaptadas ao contexto do Dayupp:

- **Meta tags completas**: description, keywords, robots, canonical, Open Graph e Twitter Card, todas apontando para `dayupp.com.br` (não para o domínio da clínica)
- **JSON-LD**: `Organization` + `SoftwareApplication` + `WebSite` — o site da clínica usa `MedicalBusiness`/`LocalBusiness` (endereço físico, geo, horário), o que não se aplica a um SaaS sem endereço público; por isso o schema foi trocado, não copiado
- **Favicons completos**: `favicon.svg` (mesmo ícone do tema `dayupp`) + `favicon.ico` multi-resolução (16/32/48) + `apple-touch-icon.png` (180×180) + `icon-512.png`, gerados a partir de `assets-src/app-icon.svg` (base dourada `#FFC107` + símbolo escuro `#111111`, conforme DS §36)
- **`og-image.png`** (1200×630) gerado a partir de `assets-src/og-image.svg`, renderizado com a Poppins real — evita preview social genérico/quebrado
- **Fontes self-hosted** com `font-display: swap` e `unicode-range` (subset latin), + `<link rel="preload">` só dos dois pesos críticos do hero (400/700), igual à estratégia de performance do site da clínica
- **`robots.txt`** + **`sitemap.xml`** apontando para `dayupp.com.br`
- **Google Tag Manager**: snippet já integrado em `index.html`, mas com **container placeholder (`GTM-XXXXXXX`)** — não reaproveitar o `GTM-KR6WHPH9` do Núcleo For Life, ele reportaria o tráfego do Dayupp na conta errada

### TODO antes de ir para produção

- [ ] Trocar `GTM-XXXXXXX` (2 ocorrências em `index.html`) pelo container GTM real do Dayupp
- [ ] Trocar `TODO_GOOGLE_SITE_VERIFICATION` pelo token gerado no Google Search Console para `dayupp.com.br`
- [ ] Definir `sameAs` (Instagram, WhatsApp etc.) no JSON-LD de `Organization` quando os canais oficiais existirem
- [ ] Preço/tabela de assinatura: a seção "Como o Dayupp gera receita" descreve o modelo (gestão gratuita + comissão sobre vendas no marketplace) sem valores fixos, porque ainda não há tabela de preços definida
- [ ] Deploy/DNS de `dayupp.com.br` (o site da clínica está hospedado no Render — replicar o mesmo setup se fizer sentido)
