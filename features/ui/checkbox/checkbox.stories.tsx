import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxSize } from "./checkbox";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "UI/Checkbox",
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    size: CheckboxSize.sm,
    children: "Label",
    checked: false,
    disabled: false,
    indeterminate: false,
  },

  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ checked: !checked });
    }
    console.log(args);

    return <Checkbox {...args} checked={checked} onChange={onChange} />;
  },
};

export const BasicWithLabel: Story = {
  args: {
    size: CheckboxSize.sm,
    children: "Label",
    checked: false,
    disabled: false,
    indeterminate: false,
  },

  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ checked: !checked });
    }

    return (
      <div>
        <Checkbox {...args} checked={false} onChange={onChange}>
          unchecked{" "}
        </Checkbox>
        <br />
        <Checkbox {...args} onChange={onChange} checked={true}>
          checked{" "}
        </Checkbox>
        <br />
        <Checkbox {...args} onChange={onChange} indeterminate={true}>
          partly checked{" "}
        </Checkbox>
      </div>
    );
  },
};

export const Sizes: Story = {
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
  },

  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ checked: !checked });
    }

    return (
      <table style={{ width: "35%" }}>
        <thead>
          <tr>
            <th></th>
            <th>small</th>
            <th>medium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>unchecked</td>
            <td>
              <Checkbox
                {...args}
                checked={false}
                onChange={onChange}
              ></Checkbox>
            </td>
            <td>
              <Checkbox
                {...args}
                checked={false}
                size={CheckboxSize.md}
                onChange={onChange}
              ></Checkbox>
            </td>
          </tr>
          <tr>
            <td>checked</td>
            <td>
              <Checkbox {...args} checked={true} onChange={onChange}></Checkbox>
            </td>
            <td>
              <Checkbox
                {...args}
                size={CheckboxSize.md}
                checked={true}
                onChange={onChange}
              ></Checkbox>
            </td>
          </tr>
          <tr>
            <td>partly checked</td>
            <td>
              <Checkbox
                {...args}
                indeterminate={true}
                onChange={onChange}
              ></Checkbox>
            </td>
            <td>
              <Checkbox
                {...args}
                indeterminate={true}
                size={CheckboxSize.md}
                onChange={onChange}
              ></Checkbox>
            </td>
          </tr>
        </tbody>
      </table>
    );
  },
};

export const disabledState: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },

  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ checked: !checked });
    }

    return (
      <div>
        <Checkbox {...args} checked={false} onChange={onChange}>
          unchecked{" "}
        </Checkbox>
        <br />
        <Checkbox {...args} onChange={onChange} checked={true}>
          checked{" "}
        </Checkbox>
        <br />
        <Checkbox {...args} onChange={onChange} indeterminate={true}>
          partly checked{" "}
        </Checkbox>
      </div>
    );
  },
};

export const hoverState: Story = {
  args: {
    ...Default.args,
  },

  parameters: { pseudo: { hover: true } },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ checked: !checked });
    }

    return (
      <div>
        <Checkbox {...args} checked={false} onChange={onChange}>
          unchecked{" "}
        </Checkbox>
        <br />
        <Checkbox {...args} onChange={onChange} checked={true}>
          checked{" "}
        </Checkbox>
        <br />
        <Checkbox {...args} onChange={onChange} indeterminate={true}>
          partly checked{" "}
        </Checkbox>
      </div>
    );
  },
};

export const focusState: Story = {
  args: {
    ...Default.args,
  },

  parameters: { pseudo: { focus: true } },

  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ checked: !checked });
    }

    return (
      <div>
        <Checkbox {...args} checked={false} onChange={onChange}>
          unchecked{" "}
        </Checkbox>
        <br />
        <Checkbox {...args} onChange={onChange} checked={true}>
          checked{" "}
        </Checkbox>
        <br />
        <Checkbox {...args} onChange={onChange} indeterminate={true}>
          partly checked{" "}
        </Checkbox>
      </div>
    );
  },
};
