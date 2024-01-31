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
    value: "",
    name: "",
    disabled: false,
  },

  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ value: value });
    }
    console.log(args);

    return <Input {...args} onChange={onChange} />;
  },
};

export const BasicWithLabel: Story = {
  args: {
    placeholder: "olivia@untiledui.com",
    labelText: "Email",
  },
};
