import type { Meta, StoryObj } from "@storybook/react";
import { Illustration, illustrationNames } from "./Illustration";

const meta = {
  title: "Icons/Illustration (Isometric Scenes)",
  component: Illustration,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },
  argTypes: {
    name: { control: "select", options: illustrationNames },
  },
  args: { name: "growth-stairs" },
} satisfies Meta<typeof Illustration>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="bg-true-950 p-12 rounded-2xl max-w-md">
      <Illustration {...args} />
    </div>
  ),
};

export const All: Story = {
  render: () => (
    <div className="bg-true-950 p-8 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {illustrationNames.map((name) => (
          <div key={name} className="bg-true-900 border border-true-800 rounded-2xl p-4 flex flex-col gap-3">
            <Illustration name={name} className="w-full" />
            <code className="text-xs text-true-400">{name}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const BowtieJourney: Story = {
  args: { name: "bowtie-journey" },
  render: (args) => (
    <div className="bg-true-950 p-12 rounded-2xl">
      <Illustration {...args} className="max-w-3xl mx-auto" />
    </div>
  ),
};
