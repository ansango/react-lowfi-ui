/**
 * ?Badge Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";

export default {
  title: "Atoms/Badges/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classBadge: { control: false },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  counter: 1,
}

export const B_CustomBadge = Template.bind({});

B_CustomBadge.args = {
  counter: 1,
  classBadge:
    "inline-flex justify-center items-center w-4 h-4 text-xs font-semibold rounded-full text-red-200 bg-red-600",
};