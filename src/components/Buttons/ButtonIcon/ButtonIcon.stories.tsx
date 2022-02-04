/**
 * ?ButtonIcon Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonIcon from "./ButtonIcon";

export default {
  title: "Components/Buttons/Button Icon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classIcon: { control: false },
    classButton: { control: false },
  },
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const A_Regular = Template.bind({});

A_Regular.args = {
  icon: "ArrowLeftIcon",
};

export const B_Outline = Template.bind({});

B_Outline.args = {
  icon: "ArrowLeftIcon",
  kind: "outline",
};

export const C_Style = Template.bind({});

C_Style.args = {
  icon: "ArrowLeftIcon",
  style: "green",
};

export const D_Round = Template.bind({});

D_Round.args = {
  icon: "ArrowLeftIcon",
  rounded: "pill",
};

export const E_ClassButton = Template.bind({});

E_ClassButton.args = {
  icon: "ArrowLeftIcon",
  classButton:
    "bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300",
};

export const F_ClassButtonIcon = Template.bind({});

F_ClassButtonIcon.args = {
  icon: "BookmarkIcon",
  classIcon: "text-yellow-800 h-5 w-5",
  classButton:
    "bg-yellow-500 p-4 rounded-full text-white hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300",
};
