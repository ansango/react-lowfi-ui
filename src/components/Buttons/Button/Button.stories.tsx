import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classIcon: { control: false },
    classButton: { control: false },
    classSpinner: { control: false },
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
};

export const I_CustomClassButtonIcon = Template.bind({});

I_CustomClassButtonIcon.args = {
  label: "Button",
  classButton: "flex items-center bg-purple-600 px-4 py-2 rounded text-white",
  classIcon: "text-purple-200 w-5 h-5",
  icon: "AcademicCapIcon",
};

export const J_CustomClassLoader = Template.bind({});

J_CustomClassLoader.args = {
  label: "Button",
  classButton: "flex items-center bg-red-500 px-4 py-2 rounded text-white",
  classSpinner: "w-6 h-6 text-red-400 fill-red-800 animate-spin",
  loading: true,
};

export const K_CustomClassBadge = Template.bind({});

K_CustomClassBadge.args = {
  label: "Button",
  classButton: "flex items-center bg-red-500 px-4 py-2 rounded text-white",
  badge: 2,
  classBadge: "inline-flex justify-center items-center w-4 h-4 text-xs font-semibold rounded-full text-red-500 bg-red-100",
};
