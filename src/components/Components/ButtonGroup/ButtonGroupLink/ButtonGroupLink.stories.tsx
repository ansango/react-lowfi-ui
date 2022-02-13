/**
 * ?ButtonGroupLink Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonGroupLink from "./ButtonGroupLink";

export default {
  title: "Components/Button Group/Button Group Link",
  component: ButtonGroupLink,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ButtonGroupLink>;

const Template: ComponentStory<typeof ButtonGroupLink> = (args) => <ButtonGroupLink {...args} />;

export const OptionOne = Template.bind({});

OptionOne.args = {
  option: "option__one",
};

export const OptionTwo = Template.bind({});

OptionTwo.args = {
  option: "option__two",
};

export const OptionThree = Template.bind({});

OptionThree.args = {
  option: "option__three",
};

export const CustomClass = Template.bind({});

CustomClass.args = {
  className: "bg-yellow-500 text-white font-bold py-2 px-4 rounded max-w-lg cursor-pointer",
};