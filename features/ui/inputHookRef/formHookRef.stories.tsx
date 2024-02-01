import { Meta, StoryObj } from "@storybook/react";
import { FormHookRef } from "./formHookRef";

const meta: Meta<typeof FormHookRef> = {
  component: FormHookRef,
  title: "UI/FormHookRef",
};

export default meta;

type Story = StoryObj<typeof FormHookRef>;

export const Default: Story = {
  render: () => <FormHookRef />,
};
