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
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const A_Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
A_Primary.args = {
  kind: "primary",
  label: "Button",
};

export const B_Secondary = Template.bind({});

B_Secondary.args = {
  label: "Button",
  kind: "secondary",
};

export const C_Outline = Template.bind({});

C_Outline.args = {
  label: "Button",
  subKind: "outline",
};

export const D_WithIcon = Template.bind({});

D_WithIcon.args = {
  label: "Button",
  icon: "AcademicCapIcon",
  iconDirection: "right",
};

export const E_CustomClass = Template.bind({});

E_CustomClass.args = {
  label: "Button",
  className: "bg-red-500 px-4 py-2 rounded text-white",
};

export const F_CustomClassWithIcon = Template.bind({});

F_CustomClassWithIcon.args = {
  label: "Button",
  className: "flex items-center bg-green-600 px-2 py-3 rounded-full text-white font-bold",
  icon: "AcademicCapIcon",
  iconDirection: "right",
};
