import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Buttons/Button",
  component: Button,
  argTypes: {
    className: { control: false },
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const A_Regular = Template.bind({});

A_Regular.args = {
  label: "Button",
};

export const B_Outline = Template.bind({});

B_Outline.args = {
  label: "Button",
  kind: "outline",
};

export const C_Style = Template.bind({});

C_Style.args = {
  label: "Button",
  style: "green",
};

export const D_Round = Template.bind({});

D_Round.args = {
  label: "Button",
  rounded: "pill",
};

export const E_WithIcon = Template.bind({});

E_WithIcon.args = {
  label: "Button",
  icon: "AcademicCapIcon",
  iconDirection: "right",
};

export const F_CustomClass = Template.bind({});

F_CustomClass.args = {
  label: "Button",
  className: "bg-red-500 px-4 py-2 rounded text-white",
};

export const G_CustomClassWithIcon = Template.bind({});

G_CustomClassWithIcon.args = {
  label: "Button",
  className: "flex items-center bg-green-600 px-2 py-3 rounded-full text-white font-bold",
  icon: "AcademicCapIcon",
  iconDirection: "right",
};
