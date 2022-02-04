/**
 * ?Spinner Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from "./Spinner";

export default {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classSpinner: { control: false },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const A_Regular_Spinner = Template.bind({});

A_Regular_Spinner.args = {};

export const B_Custom_Spinner = Template.bind({});

B_Custom_Spinner.args = {
  classSpinner: "inline h-10 w-10 mr-2 text-purple-300 animate-spin fill-purple-800",
};
