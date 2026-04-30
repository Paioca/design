import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";
import { Button } from "./Button";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof meta>;

const sample = (
  <>
    <CardHeader>
      <CardTitle>Diagnóstico de vendas</CardTitle>
      <CardDescription>Mapeamos onde sua operação trava.</CardDescription>
    </CardHeader>
    <CardContent>
      Em 5 dias úteis você recebe um plano com pontos de melhoria priorizados.
    </CardContent>
    <CardFooter>
      <Button size="sm">Quero esse</Button>
      <Button size="sm" variant="ghost">Saiba mais</Button>
    </CardFooter>
  </>
);

export const Default: Story = { render: () => <Card className="max-w-sm">{sample}</Card> };
export const Elevated: Story = { render: () => <Card variant="elevated" className="max-w-sm">{sample}</Card> };
export const Outline: Story = { render: () => <Card variant="outline" className="max-w-sm">{sample}</Card> };
export const Filled: Story = { render: () => <Card variant="filled" className="max-w-sm">{sample}</Card> };
export const Brand: Story = {
  render: () => (
    <Card variant="brand" className="max-w-sm">
      <CardHeader>
        <CardTitle className="text-white">Diagnóstico de vendas</CardTitle>
        <CardDescription className="text-white/80">Mapeamos onde sua operação trava.</CardDescription>
      </CardHeader>
      <CardContent>Para chamadas decisivas e CTAs principais.</CardContent>
      <CardFooter>
        <Button size="sm" variant="secondary">Começar</Button>
      </CardFooter>
    </Card>
  ),
};
