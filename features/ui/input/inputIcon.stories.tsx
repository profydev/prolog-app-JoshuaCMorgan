import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "UI/Input/InputIcons",
};

export default meta;

type Story = StoryObj<typeof Input>;

export const EmptyWithIcon: Story = {
  args: {
    placeholder: "olivia@untiledui.com",
    disabled: false,
    iconSrc: "/icons/mail.svg",
  },
};

export const FilledWithIcon: Story = {
  args: {
    ...EmptyWithIcon.args,
    value: "olivia@untitledui.com",
  },
};

export const DisabledWithIcon: Story = {
  args: {
    ...EmptyWithIcon.args,
    disabled: true,
  },
};
