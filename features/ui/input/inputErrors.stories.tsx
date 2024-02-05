import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "UI/Input/InputErrors",
};

export default meta;

type Story = StoryObj<typeof Input>;

export const empty: Story = {
  args: {
    placeholder: "olivia@untiledui.com",
    disabled: false,
    hasError: true,
  },
};

export const filled: Story = {
  args: {
    ...empty.args,
    value: "olivia@untiledui.com",
  },
};

export const disabled: Story = {
  args: {
    ...filled.args,
    disabled: true,
  },
};

export const EmptyWithIcon: Story = {
  args: {
    ...empty.args,
    iconSrc: "/icons/mail.svg",
  },
};
