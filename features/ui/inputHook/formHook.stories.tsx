import { Meta, StoryObj } from "@storybook/react";
import { UserFormHook } from "./formHook";

const meta: Meta<typeof UserFormHook> = {
  component: UserFormHook,
  title: "UI/UserFormHook",
};

export default meta;

type Story = StoryObj<typeof UserFormHook>;

export const Default: Story = {
  render: () => <UserFormHook />,
};
