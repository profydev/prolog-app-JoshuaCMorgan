import { Meta, StoryObj } from "@storybook/react";
import { UserFormHookZod } from "./formHookZod";

const meta: Meta<typeof UserFormHookZod> = {
  component: UserFormHookZod,
  title: "UI/UserFormHookZod",
};

export default meta;

type Story = StoryObj<typeof UserFormHookZod>;

export const Default: Story = {
  render: () => <UserFormHookZod />,
};
