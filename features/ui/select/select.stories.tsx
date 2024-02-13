import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "UI/Select",
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: "Select team member",
    name: "name",
    disabled: false,
    options: [
      { name: "Pheonix Baker", id: 1 },
      { name: "Olivia Rhye", id: 2 },
      { name: "Lana Steiner", id: 3 },
      { name: "Demi Wilkinson", id: 4 },
      { name: "Candice Wu", id: 5 },
      { name: "Natali Craig", id: 6 },
      { name: "Drew Cano", id: 7 },
    ],
  },
};

export const Label: Story = {
  ...Default,
  args: {
    ...Default.args,
    labelText: "Team member",
  },
};

export const Disabled: Story = {
  ...Label,
  args: {
    ...Label.args,
    disabled: true,
  },
};

export const Icon: Story = {
  ...Default,
  args: {
    ...Default.args,
    icon: (
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6666 16.5V14.8333C14.6666 13.9493 14.3154 13.1014 13.6903 12.4763C13.0652 11.8512 12.2173 11.5 11.3333 11.5H4.66658C3.78253 11.5 2.93468 11.8512 2.30956 12.4763C1.68444 13.1014 1.33325 13.9493 1.33325 14.8333V16.5M11.3333 4.83333C11.3333 6.67428 9.84087 8.16667 7.99992 8.16667C6.15897 8.16667 4.66658 6.67428 4.66658 4.83333C4.66658 2.99238 6.15897 1.5 7.99992 1.5C9.84087 1.5 11.3333 2.99238 11.3333 4.83333Z"
          stroke="#667085"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
};
