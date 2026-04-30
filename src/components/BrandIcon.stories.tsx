import type { Meta, StoryObj } from "@storybook/react";
import { BrandIcon, brandIconNames } from "./BrandIcon";

const meta = {
  title: "Icons/BrandIcon (Themed)",
  component: BrandIcon,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "select", options: brandIconNames },
    size: { control: "select", options: ["sm", "md", "lg", "xl", "2xl"] },
  },
  args: { name: "handshake", size: "lg" },
} satisfies Meta<typeof BrandIcon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
      {brandIconNames.map((name) => (
        <div
          key={name}
          className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-true-50"
        >
          <BrandIcon name={name} size="md" />
          <code className="text-xs text-true-700">{name}</code>
        </div>
      ))}
    </div>
  ),
};
