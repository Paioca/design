import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";
import { Button } from "./Button";

const meta = {
  title: "Patterns/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    eyebrow: "Consultoria de vendas",
    title: <>Resultados <span className="text-rev-500">reais</span> começam aqui.</>,
    subtitle: "Diagnóstico, ação e crescimento sustentável.",
    actions: (
      <>
        <Button>Começar agora</Button>
        <Button variant="outline">Ver cases</Button>
      </>
    ),
  },
};

export const Dark: Story = { args: { ...Light.args, tone: "dark" } };
export const Brand: Story = { args: { ...Light.args, tone: "brand" } };
export const Centered: Story = { args: { ...Light.args, align: "center" } };
