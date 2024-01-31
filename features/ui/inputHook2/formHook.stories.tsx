import { Meta, StoryObj } from "@storybook/react";
import { UserFormHookRef } from "./formHookRef";

const meta: Meta<typeof UserFormHookRef> = {
  component: UserFormHookRef,
  title: "UI/UserFormHookRef",
};

export default meta;

type Story = StoryObj<typeof UserFormHookRef>;

export const Default: Story = {
  render: () => <UserFormHookRef />,
};
