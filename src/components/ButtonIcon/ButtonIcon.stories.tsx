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

export const Primary = Template.bind({});

Primary.args = {
  icon: "ArrowLeftIcon",
  kind: "primary",
  subKind: "solid",
};

export const ClassButton = Template.bind({});


ClassButton.args = {
  icon: "ArchiveIcon",
  classButton: "bg-yellow-500 text-white font-bold py-3 px-3 rounded max-w-lg cursor-pointer",
};

export const ClassIcon = Template.bind({});

ClassIcon.args = {
  icon: "ArrowCircleUpIcon",
  classIcon: "text-yellow-500 h-6 w-6",
};

export const ClassIconButton = Template.bind({});

ClassIconButton.args = {
  icon: "ArrowUpIcon",
  classButton: "bg-green-800 text-white font-bold py-3 px-3 rounded-lg max-w-lg cursor-pointer",
  classIcon: "text-green-300 h-6 w-6",
};
