/**
 * ?BadgeGradient Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import BadgeGradient from "./BadgeGradient";

export default {
  title: "Atoms/Badges/Badge Gradient",
  component: BadgeGradient,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof BadgeGradient>;

const Template: ComponentStory<typeof BadgeGradient> = (args) => <BadgeGradient {...args} />;

export const A_Monochrome_Badge = Template.bind({});

A_Monochrome_Badge.args = {
  kind: "monochrome",
  style: "red",
  counter: 1,
};

export const B_Duotone_Badge = Template.bind({});

B_Duotone_Badge.args = {
  kind: "duotone",
  style: "red",
  counter: 1,
};
