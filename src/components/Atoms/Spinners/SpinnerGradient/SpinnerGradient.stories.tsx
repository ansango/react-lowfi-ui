/**
 * ?SpinnerGradient Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpinnerGradient from "./SpinnerGradient";

export default {
  title: "Atoms/Spinners/Spinner Gradient",
  component: SpinnerGradient,
} as ComponentMeta<typeof SpinnerGradient>;

const Template: ComponentStory<typeof SpinnerGradient> = (args) => <SpinnerGradient {...args} />;

export const A_Monochrome_Spinner = Template.bind({});

A_Monochrome_Spinner.args = {
  kind: "monochrome",
  style: "red"
};

export const B_Duotone_Spinner = Template.bind({});

B_Duotone_Spinner.args = {
  kind: "duotone",
  style: "red",
};
