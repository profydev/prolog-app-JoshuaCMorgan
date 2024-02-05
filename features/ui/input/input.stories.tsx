import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "UI/Input",
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "olivia@untiledui.com",
    disabled: false,
  },

  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => updateArgs({ value: e.target.value })}
      />
    );
  },
};

export const BasicWithLabel: Story = {
  args: {
    ...Default.args,
    labelText: "Email",
  },
};

export const BasicWithHint: Story = {
  args: {
    ...BasicWithLabel.args,
    hint: "This is a hint text to help user.",
  },
};
