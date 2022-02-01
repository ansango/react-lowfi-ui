/**
 * ?Icon Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconBase = Template.bind({});

IconBase.args = {
  icon: "AcademicCapIcon",
};

export const CustomClass = Template.bind({});

CustomClass.args = {
  icon: "AcademicCapIcon",
  className: "text-red-800 h-16 w-16",
};
