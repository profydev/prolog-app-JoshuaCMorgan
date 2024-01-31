import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "UI/Input/InputFocus",
};

export default meta;

type Story = StoryObj<typeof Input>;

export const FocusDefault: Story = {
  args: {
    value: "olivia@untiledui.com",
    hasError: false,
  },
  parameters: { pseudo: { focus: true } },
  render: (args) => <Input {...args} />,
};

export const FocusWithIcon: Story = {
  args: {
    ...FocusDefault.args,
    iconSrc: "/icons/mail.svg",
  },
  parameters: { pseudo: { focus: true } },
  render: (args) => <Input {...args} />,
};

export const FocusWithError: Story = {
  args: {
    value: "olivia@untiledui.com",
    hasError: true,
  },
  parameters: { pseudo: { focus: true } },
  render: (args) => <Input {...args} />,
};

export const FocusWithErrorMessage: Story = {
  args: {
    ...FocusWithError.args,
    errorMessage: "This is an error message.",
  },
  parameters: { pseudo: { focus: true } },
  render: (args) => <Input {...args} />,
};

export const FocusWithErrorIcon: Story = {
  args: {
    ...FocusWithErrorMessage.args,
    iconSrc: "/icons/mail.svg",
  },
  parameters: { pseudo: { focus: true } },
  render: (args) => <Input {...args} />,
};
