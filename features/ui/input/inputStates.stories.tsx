import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "UI/Input/InputStates",
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Empty: Story = {
  args: {
    placeholder: "olivia@untiledui.com",
    name: "name",
    disabled: false,
  },
};

export const Filled: Story = {
  args: {
    value: "olivia@untiledui.com",
  },
};

export const Disabled: Story = {
  args: {
    value: "olivia@untiledui.com",
    disabled: true,
  },

  render: (args) => <Input {...args} />,
};
