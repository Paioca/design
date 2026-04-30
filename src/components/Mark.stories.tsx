import type { Meta, StoryObj } from "@storybook/react";
import { Mark, markNames } from "./Mark";

const meta = {
  title: "Icons/Mark (Brand Graphics)",
  component: Mark,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "select", options: markNames },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
  },
  args: { name: "arrow-up-right", size: "md" },
} satisfies Meta<typeof Mark>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {markNames.map((name) => (
        <div
          key={name}
          className="flex flex-col items-center justify-end gap-3 p-4 rounded-2xl bg-white border border-true-100 h-32"
        >
          <Mark name={name} size="md" />
          <code className="text-xs text-true-700">{name}</code>
        </div>
      ))}
    </div>
  ),
};
