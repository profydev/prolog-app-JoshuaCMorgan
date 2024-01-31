import { Meta, StoryObj } from "@storybook/react";
import { UserForm } from "./form";

const meta: Meta<typeof UserForm> = {
  component: UserForm,
  title: "UI/UserForm",
};

export default meta;

type Story = StoryObj<typeof UserForm>;

export const Default: Story = {
  render: () => <UserForm />,
};
