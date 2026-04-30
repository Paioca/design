# RevTrue Design System

> Identidade visual e biblioteca de componentes oficial da **RevTrue** — pronta para construir sites e produtos modernos. Stack: React + TypeScript + Tailwind CSS.

**Use este repositório como referência ao gerar interfaces** (Claude, v0, Lovable, Figma Make, etc). As seções abaixo descrevem cores, tipografia, escala e componentes — copie tokens e padrões diretamente.

---

## TL;DR — Resumo da marca (para LLMs)

**Nome:** RevTrue
**Setor:** Consultoria de vendas
**Conceito:** Crescimento, energia, confiança, agilidade, transformação
**Personalidade dual:** *rev* (energia, ação, laranja) + *true* (sinceridade, confiança, cinza escuro)

**Cores primárias:**
- `#F15A24` — laranja avermelhado (`rev`) — usado em CTAs, destaques, links, ícones de ação
- `#2F3E47` — cinza escuro / charcoal (`true`) — usado em fundos escuros, texto principal, elementos institucionais
- Branco `#FFFFFF` e neutros derivados de `true`

**Tipografia:**
- **Hongkong** (display, geométrica, com seta na letra "e") — para títulos, headings, números grandes
- **Roboto / Roboto Condensed** (UI / texto corrido) — para body, formulários, navegação

**Princípios visuais:**
- Tipografia bastonada e geométrica — moderna, descomplicada
- Equilíbrio entre os pesos das palavras "rev" (light) e "true" (bold)
- Seta ascendente sutil — comunica progresso e trajetória positiva
- Generosidade de espaço (kerning amplo, padding alto, fontes leves)

---

## Cores

### Marca
| Token | Hex | Uso |
|---|---|---|
| `rev` | `#F15A24` | Primária — CTAs, destaque, ações |
| `true` | `#2F3E47` | Secundária — fundos escuros, texto, institucional |

### Escala laranja (`rev-*`)
`50: #FEF3EE` · `100: #FDE3D5` · `200: #FAC1A1` · `300: #F69466` · `400: #F37A45` · **`500: #F15A24`** · `600: #D9430F` · `700: #B5340D` · `800: #912A11` · `900: #762512` · `950: #401007`

### Escala charcoal (`true-*`)
`50: #F5F7F8` · `100: #E7ECED` · `200: #D0D8DD` · `300: #A8B7BF` · `400: #7A8E99` · `500: #5C7280` · `600: #4A5C68` · `700: #3D4B55` · **`800: #2F3E47`** · `900: #21303A` · `950: #131D24`

### Semântico
- Background: `#FFFFFF` · Background sutil: `true-50`
- Texto: `true-900` · Texto secundário: `true-600`
- Borda: `true-200`
- Primário: `rev-500` · Hover: `rev-600` · Active: `rev-700`

### Gradientes oficiais
- `rev-gradient`: `linear-gradient(135deg, #F15A24 0%, #D9430F 100%)`
- `true-gradient`: `linear-gradient(135deg, #2F3E47 0%, #131D24 100%)`
- `rev-true-gradient`: `linear-gradient(135deg, #F15A24 0%, #2F3E47 100%)`

---

## Tipografia

```
Display / Headings  →  Hongkong (100, 200, 300, 400, 500, 700, 900 + italics)
Body / UI           →  Roboto (300, 400, 500, 700, 900 + italic)
Condensed UI        →  Roboto Condensed (400, 500, 700)
```

**Escala** (Tailwind padrão): `xs 12 · sm 14 · base 16 · lg 18 · xl 20 · 2xl 24 · 3xl 30 · 4xl 36 · 5xl 48 · 6xl 60 · 7xl 72 · 8xl 96 · 9xl 128`

**Pesos recomendados:**
- Hero / mega títulos: `font-display font-black` (900) ou `font-bold` (700)
- Section headings: `font-display font-bold` (700)
- Body: `font-sans` regular (400)
- Microcopy / labels: `font-sans` medium (500), uppercase, tracking-wider

---

## Espaçamento, raio e sombras

- **Spacing:** base 4px (Tailwind padrão)
- **Radius:** `none · sm 4px · md 8px · lg 12px · xl 16px · 2xl 24px · 3xl 32px · full`
- **Sombras:** `sm · md · lg · xl · 2xl · glow` (todas com matiz `true` para integração visual)

---

## Componentes incluídos

| Componente | Variantes |
|---|---|
| `Button` | primary, secondary, outline, ghost, link · sizes sm/md/lg/xl |
| `Input` | default + label/hint/error |
| `Card` | default, elevated, outline, filled, brand (gradiente) |
| `Badge` | rev, true, subtle, outline, success, warning, danger |
| `Logo` | primary, charcoal, orange, icon, icon-orange |
| `Icon` | 50+ ícones de UI em SVG inline (currentColor, sizes xs-2xl) |
| `BrandIcon` | 7 ilustrações temáticas da marca (handshake, funnel, workflow…) |
| `Mark` | 12 grafismos abstratos (brackets, setas, plus, growth-steps) |
| `Illustration` | 6 cenas isométricas em SVG (estilo Winning By Design adaptado) |
| `Section` | default, subtle, dark, brand |
| `Hero` | light, dark, brand · align left/center |
| `Nav` | light, dark, sticky |
| `Footer` | colunas configuráveis |

### Sistema de ícones (3 níveis)

| Quando usar | Componente | Formato | Exemplos |
|---|---|---|---|
| UI / interação (botões, navegação, status) | `<Icon />` | SVG inline, currentColor | `arrow-right`, `chevron-down`, `check`, `x`, `menu`, `search`, `mail`, `rocket`, `chart`, `target` |
| Cards de valor / "o que fazemos" | `<BrandIcon />` | PNG ilustrativo da marca | `handshake`, `deal-handshake`, `funnel`, `workflow`, `team-growth`, `briefcase-swap` |
| Acentos visuais / dividers | `<Mark />` | PNG grafismo abstrato | `arrow-up-right`, `bracket-frame`, `plus`, `growth-steps`, `chevron-circle` |
| Cenas isométricas para sections "soluções" / dark mode | `<Illustration />` | SVG inline isométrico | `bowtie-journey`, `growth-stairs`, `map-route`, `connected-system`, `stack-build`, `funnel-wings` |

> Para criar **novas ilustrações** mantendo o padrão (incluindo prompt-template para gerar com IA), veja [`docs/CREATING_VISUALS.md`](./docs/CREATING_VISUALS.md).

---

## Como usar

### Como referência para IA (Claude, v0, Lovable, etc)
Cole o link deste repositório quando a ferramenta pedir uma referência. Pontos de leitura recomendados:

1. **`README.md`** (este arquivo) — resumo de marca, paleta, tipografia
2. **`tokens/tokens.json`** — tokens em formato W3C
3. **`tokens/tokens.css`** — variáveis CSS
4. **`tailwind.config.js`** — config Tailwind pronta
5. **`src/components/`** — implementação de referência dos componentes
6. **`docs/BRAND.md`** — voz, conceito, do/don't

### Localmente

```bash
npm install
npm run dev          # preview em http://localhost:5173
npm run storybook    # catálogo de componentes em http://localhost:6006
```

### Em outro projeto (copy-paste)

1. Copie `tokens/tokens.css` e importe no seu CSS global, **OU** copie `tailwind.config.js`.
2. Copie a pasta `src/fonts/hongkong/` e os `@font-face` de `src/styles/globals.css`.
3. Copie os componentes de `src/components/` que precisar.

---

## Estrutura

```
revtrue-design-system/
├── README.md
├── docs/                       BRAND.md, USAGE.md
├── tokens/                     tokens.json, tokens.css
├── tailwind.config.js
├── src/
│   ├── components/             Button, Card, Input, Badge, Logo, Hero, Nav, Footer, Section
│   ├── styles/globals.css      @font-face + reset + tokens
│   ├── fonts/hongkong/         WOFF2 (14 pesos)
│   ├── logo/                   SVG (primary, charcoal, orange, icon)
│   ├── icons/                  PNG @4x (19 ícones da marca)
│   └── graphics/               grafismos + pattern
└── examples/
```

---

## Licença

Ver `LICENSE`. Marca e identidade visual RevTrue — todos os direitos reservados. O código de referência (componentes, tokens, scripts) pode ser estudado e adaptado em projetos da RevTrue e parceiros autorizados.
