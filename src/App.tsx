import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Logo,
  Section,
  Hero,
  Nav,
  Footer,
  Icon,
  iconNames,
  BrandIcon,
  brandIconNames,
  Mark,
  markNames,
  Illustration,
  illustrationNames,
} from "./components";

const palette = [
  { name: "rev-500", hex: "#F15A24", textDark: false },
  { name: "rev-600", hex: "#D9430F", textDark: false },
  { name: "rev-100", hex: "#FDE3D5", textDark: true },
  { name: "true-900", hex: "#21303A", textDark: false },
  { name: "true-800", hex: "#2F3E47", textDark: false },
  { name: "true-100", hex: "#E7ECED", textDark: true },
  { name: "white", hex: "#FFFFFF", textDark: true },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav
        sticky
        links={[
          { label: "Sobre", href: "#sobre" },
          { label: "Serviços", href: "#servicos" },
          { label: "Cases", href: "#cases" },
          { label: "Contato", href: "#contato" },
        ]}
        cta={<Button size="sm">Fale conosco</Button>}
      />

      <Hero
        eyebrow="Design System"
        title={
          <>
            Resultados reais começam com <span className="text-rev-500">visão clara</span>.
          </>
        }
        subtitle="A identidade visual e a biblioteca de componentes oficial da RevTrue, prontos para construir sites e produtos modernos."
        actions={
          <>
            <Button size="lg">Começar agora</Button>
            <Button size="lg" variant="outline">
              Ver componentes
            </Button>
          </>
        }
      />

      {/* Brand */}
      <Section tone="subtle" id="sobre">
        <div className="flex flex-col gap-4 mb-10">
          <Badge variant="subtle">Marca</Badge>
          <h2 className="font-display font-black text-4xl md:text-5xl text-true-900">
            A dualidade rev + true
          </h2>
          <p className="font-sans text-lg text-true-600 max-w-2xl">
            Energia e movimento (laranja) encontram sinceridade e confiança (cinza escuro).
            Esta é a base de tudo que construímos.
          </p>
        </div>
        <div className="flex items-center gap-8 mb-12">
          <Logo variant="primary" className="h-14 w-auto" />
          <Logo variant="orange" className="h-14 w-auto" />
          <Logo variant="charcoal" className="h-14 w-auto" />
          <Logo variant="icon" className="h-14 w-auto" />
        </div>
      </Section>

      {/* Palette */}
      <Section>
        <Badge variant="subtle" className="mb-4">Cores</Badge>
        <h2 className="font-display font-black text-4xl mb-8">Paleta</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {palette.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl p-6 h-32 flex flex-col justify-between border border-true-100"
              style={{ background: c.hex, color: c.textDark ? "#21303A" : "#FFF" }}
            >
              <span className="font-display font-bold uppercase">{c.name}</span>
              <span className="font-sans text-xs opacity-80">{c.hex}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Type */}
      <Section tone="subtle">
        <Badge variant="subtle" className="mb-4">Tipografia</Badge>
        <h2 className="font-display font-black text-4xl mb-8">Hongkong + Roboto</h2>
        <div className="space-y-6 max-w-3xl">
          <div>
            <span className="font-sans text-xs uppercase tracking-wider text-true-500">Display 7xl / Black</span>
            <p className="font-display font-black text-7xl text-true-900 leading-none">RevTrue</p>
          </div>
          <div>
            <span className="font-sans text-xs uppercase tracking-wider text-true-500">Display 4xl / Bold</span>
            <p className="font-display font-bold text-4xl text-true-900">Crescimento ascendente.</p>
          </div>
          <div>
            <span className="font-sans text-xs uppercase tracking-wider text-true-500">Body lg / Regular</span>
            <p className="font-sans text-lg text-true-700">
              A tipografia bastonada com curvas suaves transmite modernidade, acessibilidade e fluidez —
              reforçando o conceito de algo descomplicado.
            </p>
          </div>
        </div>
      </Section>

      {/* Solutions — WBD-style dark cards with isometric illustrations */}
      <Section tone="dark" className="bg-true-950">
        <Badge variant="rev" className="mb-4">Soluções</Badge>
        <h2 className="font-display font-black text-4xl md:text-5xl mb-3">
          Diagnose <span className="text-rev-500">·</span> Design <span className="text-rev-500">·</span> Deploy
        </h2>
        <p className="font-sans text-true-300 mb-12 max-w-2xl">
          Três cartões de solução no padrão visual da marca — fundo escuro, ilustração
          isométrica, gradiente laranja para o "ativo", linhas brancas tracejadas para o "limite".
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <Card variant="solution" className="flex flex-col gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl mb-3">
                <span className="text-rev-500">Diagnose</span> · Diagnóstico
              </h3>
              <p className="font-sans text-true-300">
                Mapeamos o panorama do funil de vendas ponta-a-ponta e revelamos onde a performance
                está travando.
              </p>
              <a href="#" className="inline-flex items-center gap-1 mt-4 font-display font-bold text-rev-500 hover:text-rev-400">
                Ver onde estão os gargalos <Icon name="arrow-right" size="sm" />
              </a>
            </div>
            <Illustration name="funnel-wings" className="mt-auto" />
          </Card>

          <Card variant="solution" className="flex flex-col gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl mb-3">
                <span className="text-rev-500">Design</span> · Desenho
              </h3>
              <p className="font-sans text-true-300">
                Redesenhamos seu modelo de operação comercial — frameworks, processos e plays para
                escalar previsivelmente.
              </p>
              <a href="#" className="inline-flex items-center gap-1 mt-4 font-display font-bold text-rev-500 hover:text-rev-400">
                Desenhar meu modelo <Icon name="arrow-right" size="sm" />
              </a>
            </div>
            <Illustration name="map-route" className="mt-auto" />
          </Card>

          <Card variant="solution" className="flex flex-col gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl mb-3">
                <span className="text-rev-500">Deploy</span> · Execução
              </h3>
              <p className="font-sans text-true-300">
                Treinamos e habilitamos seu time para executar consistentemente, transformando
                método em comportamento diário.
              </p>
              <a href="#" className="inline-flex items-center gap-1 mt-4 font-display font-bold text-rev-500 hover:text-rev-400">
                Equipar meu time <Icon name="arrow-right" size="sm" />
              </a>
            </div>
            <Illustration name="growth-stairs" className="mt-auto" />
          </Card>
        </div>

        {/* Bowtie journey full-width */}
        <div className="mt-16">
          <Card variant="solution" className="text-center">
            <h3 className="font-display font-bold text-2xl mb-2">Bowtie da jornada</h3>
            <p className="font-sans text-true-300 mb-8 max-w-xl mx-auto">
              Da consciência à expansão — o framework completo de receita previsível.
            </p>
            <Illustration name="bowtie-journey" className="max-w-3xl mx-auto" />
          </Card>
        </div>
      </Section>

      {/* Illustrations gallery — categorized by RevTrue narrative */}
      <Section tone="dark" className="bg-true-950">
        <Badge variant="rev" className="mb-4">Ícones · Ilustrações</Badge>
        <h2 className="font-display font-black text-4xl mb-2">Illustration</h2>
        <p className="font-sans text-true-300 mb-12 max-w-2xl">
          {illustrationNames.length} cenas isométricas em SVG inline, organizadas pela narrativa
          comercial da RevTrue — funil, pilares, sessão de receita, infra cross-cutting e
          conceitos de problema/caminho.
        </p>

        {[
          {
            badge: "P1 · Funil de Receita (5 etapas)",
            names: ["funnel-marketing", "funnel-qualification", "funnel-sales", "funnel-postsale", "funnel-expansion"] as const,
          },
          {
            badge: "P2 · Pilares do Método (AI · Dados · Método)",
            names: ["pillar-ai", "pillar-data", "pillar-method"] as const,
          },
          {
            badge: "P3 · Sessão de Receita & Entregáveis",
            names: ["revenue-session", "priority-plan", "bottleneck-diagnosis"] as const,
          },
          {
            badge: "P4 · Cross-cutting (infra)",
            names: ["automation-flow", "commercial-ritual", "goal-target", "connected-system"] as const,
          },
          {
            badge: "P5 · Problema & Caminhos",
            names: ["revenue-leak", "path-solo", "path-together"] as const,
          },
          {
            badge: "Base · Jornada & Construção",
            names: ["bowtie-journey", "growth-stairs", "map-route", "stack-build", "funnel-wings"] as const,
          },
        ].map((group) => (
          <div key={group.badge} className="mb-12 last:mb-0">
            <h3 className="font-display font-bold text-rev-500 text-sm uppercase tracking-wider mb-6">
              {group.badge}
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.names.map((name) => (
                <div
                  key={name}
                  className="rounded-2xl bg-true-900 border border-true-800 p-6 flex flex-col gap-4 hover:border-rev-500/40 transition"
                >
                  <Illustration name={name} className="aspect-[4/3] w-full" />
                  <code className="font-sans text-xs text-true-400">{name}</code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* Brand icons (themed illustrations) */}
      <Section>
        <Badge variant="subtle" className="mb-4">Ícones · Temáticos</Badge>
        <h2 className="font-display font-black text-4xl mb-2">BrandIcon</h2>
        <p className="font-sans text-true-600 mb-8 max-w-2xl">
          Ilustrações de conceito com a moldura "bracket" da marca. Use em cards de valor,
          seções "o que fazemos" e blocos de serviço.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {brandIconNames.map((name) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-true-50 hover:bg-true-100 transition-colors"
            >
              <BrandIcon name={name} size="md" />
              <code className="font-sans text-xs text-true-700 text-center">{name}</code>
            </div>
          ))}
        </div>
      </Section>

      {/* Brand marks (graphic elements) */}
      <Section tone="subtle">
        <Badge variant="subtle" className="mb-4">Ícones · Grafismos</Badge>
        <h2 className="font-display font-black text-4xl mb-2">Mark</h2>
        <p className="font-sans text-true-600 mb-8 max-w-2xl">
          Elementos gráficos abstratos da identidade — brackets, setas, plus, escada de crescimento.
          Use como acento decorativo, divisor de seção ou destaque visual.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {markNames.map((name) => (
            <div
              key={name}
              className="flex flex-col items-center justify-end gap-3 p-4 rounded-2xl bg-white border border-true-100 h-36"
            >
              <Mark name={name} size="md" />
              <code className="font-sans text-xs text-true-700 text-center">{name}</code>
            </div>
          ))}
        </div>
      </Section>

      {/* System icons */}
      <Section>
        <Badge variant="subtle" className="mb-4">Ícones · Sistema</Badge>
        <h2 className="font-display font-black text-4xl mb-2">Icon (UI)</h2>
        <p className="font-sans text-true-600 mb-8 max-w-2xl">
          {iconNames.length} ícones de linha, monocromáticos, em SVG inline. Herdam <code>currentColor</code>{" "}
          e escalam perfeitamente. Use em botões, navegação, labels, tabelas.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {iconNames.map((name) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-true-100 hover:border-rev-300 hover:text-rev-500 text-true-700 transition-colors"
            >
              <Icon name={name} size="lg" />
              <code className="font-sans text-[10px] text-true-500 text-center break-all">{name}</code>
            </div>
          ))}
        </div>

        {/* Icon usage examples */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Em botões</CardTitle>
              <CardDescription>Tamanho e cor herdam do contexto.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 items-start">
              <Button>
                Começar agora <Icon name="arrow-right" size="sm" />
              </Button>
              <Button variant="outline">
                <Icon name="download" size="sm" /> Baixar manual
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="settings" size="sm" /> Configurações
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Em listas</CardTitle>
              <CardDescription>Status, contato, dados.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-true-700">
                <li className="flex items-center gap-2">
                  <Icon name="check-circle" className="text-emerald-500" /> Diagnóstico em 5 dias
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check-circle" className="text-emerald-500" /> Plano priorizado
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="x-circle" className="text-true-300" /> Sem fidelidade longa
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="mail" className="text-rev-500" /> contato@revtrue.com
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="brand">
            <CardHeader>
              <CardTitle className="text-white">Em destaque</CardTitle>
              <CardDescription className="text-white/80">
                Combinados com tipografia e cor da marca.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-start gap-3">
              <Icon name="rocket" size="2xl" />
              <div>
                <p className="font-display font-bold text-xl">Crescimento ascendente</p>
                <p className="font-sans text-sm text-white/80">
                  Resultados reais, não promessas vazias.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Components */}
      <Section id="servicos">
        <Badge variant="subtle" className="mb-4">Componentes</Badge>
        <h2 className="font-display font-black text-4xl mb-8">Biblioteca</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Botões</CardTitle>
              <CardDescription>Variantes para cada contexto.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 items-start">
              <Button>Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>Formulário focado e claro.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Input label="Nome" placeholder="Seu nome" />
              <Input label="E-mail" type="email" placeholder="voce@empresa.com" />
              <Input label="Telefone" placeholder="(11) 99999-9999" hint="Apenas para contato comercial." />
            </CardContent>
          </Card>

          <Card variant="brand">
            <CardHeader>
              <CardTitle className="text-white">CTA destacado</CardTitle>
              <CardDescription className="text-white/80">
                Use o gradiente rev-true para chamadas decisivas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary">Quero um diagnóstico</Button>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="rev">Novo</Badge>
              <Badge variant="true">Beta</Badge>
              <Badge variant="subtle">Em alta</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Sucesso</Badge>
              <Badge variant="warning">Atenção</Badge>
              <Badge variant="danger">Crítico</Badge>
            </CardContent>
          </Card>

          <Card variant="filled">
            <CardHeader>
              <CardTitle>Card filled</CardTitle>
              <CardDescription>Com fundo neutro suave.</CardDescription>
            </CardHeader>
            <CardContent>Conteúdo interno do card preenchido.</CardContent>
          </Card>

          <Card variant="outline">
            <CardHeader>
              <CardTitle>Card outline</CardTitle>
              <CardDescription>Borda em destaque.</CardDescription>
            </CardHeader>
            <CardContent>Quando o card precisa fazer barulho sem fundo.</CardContent>
          </Card>
        </div>
      </Section>

      <Footer
        columns={[
          {
            title: "Produto",
            links: [
              { label: "Componentes", href: "#" },
              { label: "Tokens", href: "#" },
              { label: "Roadmap", href: "#" },
            ],
          },
          {
            title: "Marca",
            links: [
              { label: "Identidade", href: "#" },
              { label: "Logo", href: "#" },
              { label: "Tipografia", href: "#" },
            ],
          },
        ]}
      />
    </div>
  );
}
