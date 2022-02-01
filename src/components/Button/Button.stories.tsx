import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    className: { control: false },
  },
  parameters: {
    layout: "centered",
  },
  includeStories: ["Primary", "Secondary", "Outline"],
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  kind: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Button",
  kind: "secondary",
};

export const Outline = Template.bind({});

Outline.args = {
  label: "Button",
  subKind: "outline",
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  label: "Button",
  icon: "AcademicCapIcon",
  iconDirection: "right",
};

export const CustomClass = Template.bind({});

CustomClass.args = {
  label: "Button",
  className: "bg-red-500 px-4 py-2 rounded text-white",
};

export const CustomClassWithIcon = Template.bind({});

CustomClassWithIcon.args = {
  label: "Button",
  className: "flex items-center bg-green-600 px-2 py-3 rounded-full text-white font-bold",
  icon: "AcademicCapIcon",
  iconDirection: "right",
};
