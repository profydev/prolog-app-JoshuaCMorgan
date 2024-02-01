import { Meta, StoryObj } from "@storybook/react";
import { FormHook } from "./formHook";

const meta: Meta<typeof FormHook> = {
  component: FormHook,
  title: "UI/FormHook",
};

export default meta;

type Story = StoryObj<typeof FormHook>;

export const Default: Story = {
  render: () => <FormHook />,
};
