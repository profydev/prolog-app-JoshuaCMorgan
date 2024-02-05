import { Meta, StoryObj } from "@storybook/react";
import { Form } from "./form";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "UI/Form",
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => <Form />,
};
