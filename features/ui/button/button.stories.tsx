import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonColor } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    size: ButtonSize.sm,
    color: ButtonColor.primary,
    children: "Button CTO",
  },
  parameters: {
    pseudo: { focus: false, hover: false },
  },
};
