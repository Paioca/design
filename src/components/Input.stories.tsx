import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: { label: "E-mail", placeholder: "voce@empresa.com" },
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: "Usaremos apenas para contato comercial." } };
export const WithError: Story = { args: { error: "E-mail inválido." } };
export const Disabled: Story = { args: { disabled: true, value: "voce@empresa.com" } };
