/**
 * ?ButtonIcon Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonIcon from "./ButtonIcon";

export default {
  title: "Components/Button Icon",
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const A_Primary = Template.bind({});

A_Primary.args = {
  icon: "ArrowLeftIcon",
  kind: "primary",
  subKind: "solid",
};

export const B_ClassButton = Template.bind({});


B_ClassButton.args = {
  icon: "ArchiveIcon",
  classButton: "bg-yellow-500 text-white font-bold py-3 px-3 rounded max-w-lg cursor-pointer",
};

export const C_ClassIcon = Template.bind({});

C_ClassIcon.args = {
  icon: "ArrowCircleUpIcon",
  classIcon: "text-yellow-500 h-6 w-6",
};

export const D_ClassIconButton = Template.bind({});

D_ClassIconButton.args = {
  icon: "ArrowUpIcon",
  classButton: "bg-green-800 text-white font-bold py-3 px-3 rounded-lg max-w-lg cursor-pointer",
  classIcon: "text-green-300 h-6 w-6",
};
