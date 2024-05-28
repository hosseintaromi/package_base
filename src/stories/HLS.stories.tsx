import { Meta, Story } from "@storybook/react";

type DemoProps = {
  length: number;
};

const Demo = ({ length }: DemoProps) => {
  return (
    <p>hello</p>
  );
};

const meta: Meta = {
  title: "base",
  component: Demo,
  argTypes: {
    length: {
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DemoProps> = (args) => <Demo length={22} />;
export const Default = Template.bind({});
