import { Meta, StoryObj } from "@storybook/react";
import { FormHookZod } from "./formHookZod";

const meta: Meta<typeof FormHookZod> = {
  component: FormHookZod,
  title: "UI/FormHookZod",
};

export default meta;

type Story = StoryObj<typeof FormHookZod>;

export const Default: Story = {
  render: () => <FormHookZod />,
};
