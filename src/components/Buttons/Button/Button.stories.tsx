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
  style: "purple",
  rounded: "pill",
};

export const E_WithIcon = Template.bind({});

E_WithIcon.args = {
  label: "Button",
  icon: "AcademicCapIcon",
  iconDirection: "right",
};

export const F_WithLoader = Template.bind({});

F_WithLoader.args = {
  label: "Button",
  loading: true,
  kind: "solid",
  style: "yellow",
};

export const G_CustomClass = Template.bind({});

G_CustomClass.args = {
  label: "Button",
  classButton: "bg-red-500 px-4 py-2 rounded text-white",
};

export const H_CustomClassWithIcon = Template.bind({});

H_CustomClassWithIcon.args = {
  label: "Button",
  classButton: "flex items-center bg-green-600 px-2 py-3 rounded-full text-white font-bold",
  icon: "AcademicCapIcon",
  iconDirection: "right",
};
