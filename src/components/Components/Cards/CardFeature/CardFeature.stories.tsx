/**
 * ?CardFeature Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardFeature from "./CardFeature";

export default {
  title: 'Components/Cards/Card Feature',
  component: CardFeature,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardFeature>;

const Template: ComponentStory<typeof CardFeature> = (args) => <CardFeature {...args} />;

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