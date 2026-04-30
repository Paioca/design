# Criando ilustrações no padrão RevTrue

Guia para adicionar **novas ilustrações isométricas** mantendo a consistência visual do design system. O estilo é inspirado no Winning By Design, adaptado à dualidade **rev** (energia/laranja) + **true** (confiança/charcoal).

## Mapeamento conceito → componente

Use esta tabela ao construir LP / apresentação comercial. Cada conceito da narrativa RevTrue tem ilustração dedicada:

| Camada | Conceito | Componente |
|---|---|---|
| **Funil (P1)** | Marketing — canais, oferta, posicionamento | `funnel-marketing` |
| | Qualificação — inbound, outbound, ICP | `funnel-qualification` |
| | Vendas — pessoas, processo, rituais | `funnel-sales` |
| | Pós-venda — onboarding, jornada, CS | `funnel-postsale` |
| | Expansão — upsell, retenção, NRR | `funnel-expansion` |
| **Pilares (P2)** | AI — núcleo inteligente | `pillar-ai` |
| | Dados — camadas / cubo grid | `pillar-data` |
| | Método — planta baixa / blueprint | `pillar-method` |
| **Sessão (P3)** | Sessão de Receita | `revenue-session` |
| | Plano priorizado | `priority-plan` |
| | Diagnóstico / gargalo | `bottleneck-diagnosis` |
| **Cross-cutting (P4)** | CRM / hub central | `connected-system` |
| | Automação | `automation-flow` |
| | Rituais comerciais | `commercial-ritual` |
| | Metas | `goal-target` |
| **Problema/Caminho (P5)** | Vazamento de receita | `revenue-leak` |
| | Cliente solo | `path-solo` |
| | Operar junto | `path-together` |
| **Base / jornada** | Bowtie completo | `bowtie-journey` |
| | Crescimento / trajetória | `growth-stairs` |
| | Jornada do cliente | `map-route` |
| | Construção de operação | `stack-build` |
| | Funil de aquisição | `funnel-wings` |

---

## DNA visual — checklist de consistência

Toda ilustração nova precisa cumprir todos os itens abaixo:

| Atributo | Regra |
|---|---|
| **Background** | Transparente. A ilustração vive sobre `true-950` (`#131D24`) ou `true-900` (`#21303A`). Nunca desenhe um retângulo de fundo na própria SVG. |
| **Projeção** | Isométrica 30°/30° (mais natural) ou "cabinet projection" leve com skew ~22px para depth. Evite perspectiva 1-ponto. |
| **Cor "ativa"** | Gradiente laranja `#F8A07A → #F15A24 → #B5340D` (id `rev-grad`). Para topo de superfícies use `#FAC1A1 → #D9430F` (id `rev-strong`). Para faces laterais sombreadas use `#B5340D → #762512` (id `rev-shade`). |
| **Cor "passiva"** | Gradiente charcoal `#3D4B55 → #131D24` (id `true-grad`). Use para superfícies "de contexto" — em segundo plano, não em destaque. |
| **Frame / limite** | Linha `stroke="#FFFFFF"` com `stroke-opacity="0.55"`, `stroke-width="1.5"`, `stroke-dasharray="5 4"`, `fill="none"`. Use para indicar plataforma, área de drop, contorno fantasma. |
| **Rota / caminho** | `stroke="#FFFFFF"`, `stroke-width="1.75"`, `stroke-dasharray="6 4"`, `stroke-linecap="round"`. Use para conexões "ativas" (ex.: rota entre pins). |
| **Link / conexão** | `stroke="#FFFFFF"` com `opacity="0.7"`, `stroke-width="1.25"`, `stroke-dasharray="2 3"`. Use para grafos / conexões fracas. |
| **Glow** | Use o radial gradient `rev-glow` por baixo da cena para um halo laranja sutil. Ajuda na "presença" sem poluir. |
| **Luz** | Vem de cima-frente. Faces superiores claras (`rev-strong`), frontais médias (`rev-grad`), laterais escuras (`rev-shade`). |
| **Sombra de chão** | `<ellipse>` largo e baixo, fill `url(#rev-glow)` ou preto com 25% opacity. |
| **Tipografia interna** | Se a ilustração tiver labels, use `font-family="Roboto, system-ui, sans-serif"`, `font-weight="600"`, `font-size="11"`. |
| **viewBox** | Padrão `0 0 400 320` (4:3.2). Para cenas largas, `0 0 800 440`. Sempre proporcional. |
| **Stroke uniforme** | Não misture stroke-width. Use 1, 1.25, 1.5, 1.75, ou 2 — escolha 1 e mantenha. |

---

## Helpers já no `Illustration.tsx`

Antes de escrever SVG do zero, reutilize:

### `<IsoBox gx={} gy={} w={} h={} d={18} active={false} />`
Caixa isométrica completa (3 faces). `gx/gy` é o canto inferior-frontal-esquerdo. `active` aplica gradiente laranja, default usa charcoal.

### `<Flag x={} y={} size={1} color="url(#rev-strong)" />`
Bandeirinha pequena (~22px). Use como marcador de marco/meta. `size` escala proporcional.

## Primitivas (recipes prontos)

### Caixa isométrica (cabinet projection)

Largura `W`, altura `H`, profundidade `D` (skew). Posição `(gx, gy)` é o canto inferior-frontal-esquerdo.

```jsx
const skew = 22;
<g>
  {/* Front face */}
  <polygon points={`${gx},${gy-H} ${gx+W},${gy-H} ${gx+W},${gy} ${gx},${gy}`} fill="url(#rev-grad)" />
  {/* Right face */}
  <polygon points={`${gx+W},${gy-H} ${gx+W+skew},${gy-H-skew} ${gx+W+skew},${gy-skew} ${gx+W},${gy}`} fill="url(#rev-shade)" />
  {/* Top face */}
  <polygon points={`${gx},${gy-H} ${gx+W},${gy-H} ${gx+W+skew},${gy-H-skew} ${gx+skew},${gy-H-skew}`} fill="url(#rev-strong)" />
</g>
```

### Plataforma horizontal (top view tilted)

```jsx
<polygon
  points={`${gx},${gy} ${gx+W},${gy} ${gx+W+skew},${gy-skew} ${gx+skew},${gy-skew}`}
  fill="url(#true-grad)"
  stroke="#FFFFFF"
  strokeOpacity="0.5"
/>
```

### Frame fantasma (placeholder)

```jsx
<polygon points="..." stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
```

### Pin / map marker

```jsx
<g transform={`translate(${cx},${cy})`}>
  <path d="M 0 -28 a 12 12 0 1 1 0.1 0 z M -4 -28 l 4 6 l 4 -6 z" fill="url(#rev-grad)" />
  <circle cx="0" cy="-30" r="4" fill="#131D24" />
</g>
```

### Glow de chão

```jsx
<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="url(#rev-glow)" opacity="0.7" />
```

---

## Como adicionar uma nova ilustração

**1.** Abra `src/components/Illustration.tsx`.

**2.** Adicione o nome à union `IllustrationName` e ao array `illustrationNames`:

```tsx
export type IllustrationName =
  | "bowtie-journey"
  | ...
  | "minha-nova";          // ← novo
```

**3.** Crie a função do componente seguindo o padrão:

```tsx
function MinhaNova() {
  return (
    <g>
      {/* glow de chão */}
      <ellipse cx="200" cy="280" rx="160" ry="18" fill="url(#rev-glow)" opacity="0.7" />
      {/* ... primitivas ... */}
    </g>
  );
}
```

**4.** Registre no `registry`:

```tsx
const registry: Record<IllustrationName, Entry> = {
  ...
  "minha-nova": { Render: MinhaNova, viewBox: "0 0 400 320" },
};
```

**5.** Pronto — `<Illustration name="minha-nova" />` já funciona em qualquer lugar.

---

## Prompt-template para gerar ilustrações com IA

Cole o prompt abaixo em **Claude / v0 / Lovable / Figma Make / Midjourney** quando quiser uma ilustração nova nesse padrão. Substitua `{TEMA}` pela ideia (ex: "um time alinhando metas", "um pipeline de vendas", "diagnóstico de funil", etc).

> ### Prompt para gerar ilustração isométrica RevTrue
>
> Gere uma ilustração SVG **isométrica 30°/30°** representando: **{TEMA}**.
>
> **Estilo obrigatório (RevTrue / consultoria de vendas, inspirada em Winning By Design):**
> - Fundo: transparente (a ilustração será aplicada sobre fundo escuro charcoal `#131D24` ou `#21303A`)
> - Paleta primária — laranja vivo: gradiente vertical `#F8A07A → #F15A24 → #B5340D`. Topos mais claros: `#FAC1A1 → #D9430F`. Faces sombreadas: `#B5340D → #762512`
> - Paleta secundária — charcoal (para elementos passivos / contexto): gradiente `#3D4B55 → #131D24`
> - Linhas de "frame / limite": brancas tracejadas (`stroke-dasharray: 5 4`), `opacity 0.55`, `stroke-width 1.5`
> - Linhas de "rota / caminho": brancas tracejadas (`stroke-dasharray: 6 4`), `opacity 1`, `stroke-width 1.75`, com extremidades arredondadas
> - Glow sutil sob os elementos: radial gradient laranja (`#F15A24` 45% no centro → 0% nas bordas)
> - Sem texto na ilustração, exceto labels muito curtos com Roboto 600, 11px, em segmentos de funil/jornada
> - Aplique a regra de luz: superfícies superiores claras, frontais médias, laterais escuras
> - Composição construída com primitivas geométricas: cubos isométricos, plataformas em paralelogramo, cilindros, esferas, cones
> - Use **laranja apenas para o que está "em ação / em foco"**; tudo "passivo / contexto" em charcoal
> - Use **brackets / cantos arredondados** ao invés de cantos completamente afiados quando possível (referência ao bracket-frame da marca)
>
> **Saída**: um único elemento `<svg viewBox="0 0 400 320">` com `<defs>` no topo (gradients reutilizáveis com ids `rev-grad`, `rev-strong`, `rev-shade`, `true-grad`, `rev-glow`) seguido de `<g>` com a cena. Sem `<style>`, sem JS, sem links externos. Tamanho do SVG abaixo de 8KB.

### Como usar a saída no projeto

1. Cole o conteúdo do `<g>` retornado dentro de uma nova função em `Illustration.tsx`
2. Se a IA gerou novos `<defs>`, prefira **reutilizar** os globais já em `Defs()`. Adicione novos só se realmente necessário (e dê um id único).
3. Cole o passo 4 acima (registry).

---

## Critérios de aceitação

Antes de commitar uma nova ilustração, valide:

- [ ] Renderiza bem sobre `bg-true-950` E `bg-true-900` (testar nos dois)
- [ ] Não tem fundo retangular próprio (transparente)
- [ ] Usa apenas os 5 gradients globais (`rev-grad`, `rev-strong`, `rev-shade`, `true-grad`, `rev-glow`) — exceto se claramente justificado
- [ ] Strokes brancos respeitam a tabela de larguras/dasharray
- [ ] viewBox proporcional (4:3 ou 16:9)
- [ ] Funciona no `npm run storybook` (adicione uma story se for usar muito)
- [ ] `npx tsc -b && npx vite build` passam

---

## Quando NÃO usar `<Illustration />`

- **Ícone de UI** (botão, navegação, label) → `<Icon />`
- **Símbolo isolado da marca** (bracket, seta-pra-cima como acento) → `<Mark />`
- **Foto / imagem rasterizada** (screenshots, fotos de pessoas) → `<img />` direto
- **Logo da marca** → `<Logo />`
