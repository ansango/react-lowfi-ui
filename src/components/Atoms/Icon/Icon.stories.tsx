/**
 * ?Icon Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const A_IconBase = Template.bind({});

A_IconBase.args = {
  icon: "AcademicCapIcon",
};

export const B_CustomClass = Template.bind({});

B_CustomClass.args = {
  icon: "AcademicCapIcon",
  classIcon: "text-red-800 h-16 w-16",
};
