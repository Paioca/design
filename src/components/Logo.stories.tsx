import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta = {
  title: "Brand/Logo",
  component: Logo,
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;
export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-8 p-6 bg-white">
        <Logo variant="primary" className="h-14 w-auto" />
        <span className="font-sans text-sm text-true-500">primary</span>
      </div>
      <div className="flex items-center gap-8 p-6 bg-white">
        <Logo variant="charcoal" className="h-14 w-auto" />
        <span className="font-sans text-sm text-true-500">charcoal</span>
      </div>
      <div className="flex items-center gap-8 p-6 bg-true-900">
        <Logo variant="orange" className="h-14 w-auto" />
        <span className="font-sans text-sm text-true-300">orange (sobre fundo escuro)</span>
      </div>
      <div className="flex items-center gap-8 p-6 bg-white">
        <Logo variant="icon" className="h-14 w-auto" />
        <Logo variant="icon-orange" className="h-14 w-auto" />
        <span className="font-sans text-sm text-true-500">ícones</span>
      </div>
    </div>
  ),
};
