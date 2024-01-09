import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer";

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: "UI/Footer",
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    // <div style={{ width: 1280 }}>
    <Footer></Footer>
    // </div>
  ),
};
