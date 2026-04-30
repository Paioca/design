# USAGE — Exemplos prontos

## Botões

```tsx
import { Button } from "./components";

<Button>Começar agora</Button>
<Button variant="secondary">Saiba mais</Button>
<Button variant="outline" size="lg">Ver cases</Button>
<Button variant="ghost">Cancelar</Button>
<Button variant="link">Política de privacidade</Button>
```

## Card com CTA

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "./components";

<Card variant="elevated" className="max-w-md">
  <CardHeader>
    <CardTitle>Diagnóstico de vendas</CardTitle>
    <CardDescription>Em 5 dias úteis, plano de ação priorizado.</CardDescription>
  </CardHeader>
  <CardContent>
    Mapeamos onde sua operação trava e entregamos um plano objetivo.
  </CardContent>
  <CardFooter>
    <Button>Quero esse</Button>
  </CardFooter>
</Card>
```

## Hero com gradiente da marca

```tsx
import { Hero, Button } from "./components";

<Hero
  tone="brand"
  eyebrow="Consultoria de vendas"
  title={<>Resultados <em className="not-italic text-white">reais</em> começam aqui.</>}
  subtitle="Diagnóstico, ação e crescimento sustentável."
  actions={
    <>
      <Button variant="secondary">Começar</Button>
      <Button variant="outline" className="text-white border-white">Ver cases</Button>
    </>
  }
/>
```

## Página completa de aterrissagem

```tsx
import { Nav, Hero, Section, Card, Button, Footer } from "./components";

export default function Landing() {
  return (
    <>
      <Nav
        sticky
        links={[
          { label: "Sobre", href: "#sobre" },
          { label: "Serviços", href: "#servicos" },
          { label: "Contato", href: "#contato" },
        ]}
        cta={<Button size="sm">Falar com vendas</Button>}
      />
      <Hero
        eyebrow="Consultoria"
        title="Crescimento ascendente, do diagnóstico à execução."
        subtitle="Para empresas que querem sair do achismo e operar com método."
        actions={<Button size="lg">Quero um diagnóstico</Button>}
      />
      <Section tone="subtle" id="servicos">
        {/* … cards de serviços … */}
      </Section>
      <Footer />
    </>
  );
}
```

## Tokens — em CSS puro (sem Tailwind)

```css
@import "/tokens/tokens.css";

.cta {
  background: var(--rev);
  color: var(--color-on-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-family: var(--font-display);
  font-weight: 700;
  transition: background var(--duration-base) var(--ease-rev-out);
}
.cta:hover { background: var(--rev-600); }
```

## Tokens — em Tailwind

```jsx
<button className="bg-rev-500 hover:bg-rev-600 text-white font-display font-bold px-6 py-3 rounded-md transition">
  Começar agora
</button>
```

## Ícones — qual componente usar?

```tsx
import { Icon, BrandIcon, Mark } from "./components";

// 1. Icon — UI / interação. SVG inline, herda currentColor.
<button className="text-rev-500 hover:text-rev-600">
  Próximo <Icon name="arrow-right" size="sm" />
</button>

// 2. BrandIcon — ilustração temática da marca. Use em cards de valor.
<Card>
  <BrandIcon name="funnel" size="lg" />
  <CardTitle>Otimização de funil</CardTitle>
</Card>

// 3. Mark — grafismo abstrato da identidade. Use como acento.
<div className="flex items-center gap-2">
  <Mark name="arrow-up-right" size="sm" />
  <span>Crescimento de 240% em 6 meses</span>
</div>
```

### Lista de "o que fazemos" usando BrandIcon

```tsx
const services = [
  { icon: "funnel", title: "Diagnóstico de funil" },
  { icon: "team-growth", title: "Capacitação de time" },
  { icon: "workflow", title: "Desenho de processo" },
  { icon: "deal-handshake", title: "Fechamento consultivo" },
] as const;

<div className="grid md:grid-cols-4 gap-6">
  {services.map((s) => (
    <Card key={s.title}>
      <BrandIcon name={s.icon} size="lg" />
      <CardTitle className="mt-4">{s.title}</CardTitle>
    </Card>
  ))}
</div>
```

### Lista com checks usando Icon

```tsx
<ul className="space-y-2">
  <li className="flex items-center gap-2">
    <Icon name="check-circle" className="text-emerald-500" /> Diagnóstico em 5 dias
  </li>
  <li className="flex items-center gap-2">
    <Icon name="check-circle" className="text-emerald-500" /> Plano priorizado
  </li>
</ul>
```

## Cabeçalho típico de landing

```tsx
<h1 className="font-display font-black text-6xl md:text-7xl text-true-900 leading-[1.05] tracking-tight">
  Resultados <span className="text-rev-500">reais</span> começam aqui.
</h1>
```
