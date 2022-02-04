/**
 * ?SpinnerGradient Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpinnerGradient from "./SpinnerGradient";

export default {
  title: "Components/Spinners/Spinner Gradient",
  component: SpinnerGradient,
} as ComponentMeta<typeof SpinnerGradient>;

const Template: ComponentStory<typeof SpinnerGradient> = (args) => <SpinnerGradient {...args} />;

export const A_Monochrome_Spinner = Template.bind({});

A_Monochrome_Spinner.args = {};
