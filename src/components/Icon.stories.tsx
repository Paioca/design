import type { Meta, StoryObj } from "@storybook/react";
import { Icon, iconNames, type IconName } from "./Icon";
import { Button } from "./Button";

const meta = {
  title: "Icons/Icon (UI / System)",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "select", options: iconNames },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
    strokeWidth: { control: { type: "range", min: 1, max: 3, step: 0.25 } },
  },
  args: { name: "arrow-right", size: "lg" },
} satisfies Meta<typeof Icon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 max-w-4xl">
      {iconNames.map((name) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 p-3 rounded-xl border border-true-100 text-true-700 hover:border-rev-300 hover:text-rev-500 transition"
        >
          <Icon name={name as IconName} size="lg" />
          <code className="text-[10px] text-true-500 break-all text-center">{name}</code>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4 text-true-700">
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((s) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <Icon name="rocket" size={s} />
          <code className="text-xs text-true-500">{s}</code>
        </div>
      ))}
    </div>
  ),
};

export const Colored: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Icon name="check-circle" size="xl" className="text-emerald-500" />
      <Icon name="alert" size="xl" className="text-amber-500" />
      <Icon name="x-circle" size="xl" className="text-red-500" />
      <Icon name="rocket" size="xl" className="text-rev-500" />
      <Icon name="target" size="xl" className="text-true-800" />
    </div>
  ),
};

export const InsideButton: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button>
        Começar <Icon name="arrow-right" size="sm" />
      </Button>
      <Button variant="outline">
        <Icon name="download" size="sm" /> Baixar
      </Button>
      <Button variant="ghost">
        <Icon name="settings" size="sm" /> Configurar
      </Button>
    </div>
  ),
};
