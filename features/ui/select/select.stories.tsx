import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "UI/Select",
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    name: "name",
    disabled: false,
    options: [
      { name: "Pheonix Baker", id: 1 },
      { name: "Olivia Rhye", id: 2 },
      { name: "Lana Steiner", id: 3 },
      { name: "Demi Wilkinson", id: 4 },
      { name: "Candice Wu", id: 5 },
      { name: "Natali Craig", id: 6 },
      { name: "Drew Cano", id: 7 },
    ],
  },
};

export const Label: Story = {
  ...Default,
  args: {
    ...Default.args,
    labelText: "Team member",
  },
};

export const Disabled: Story = {
  ...Label,
  args: {
    ...Label.args,
    disabled: true,
  },
};
