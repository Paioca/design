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
