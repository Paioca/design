import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Novo" },
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="rev">rev</Badge>
      <Badge variant="true">true</Badge>
      <Badge variant="subtle">subtle</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="warning">warning</Badge>
      <Badge variant="danger">danger</Badge>
    </div>
  ),
};
