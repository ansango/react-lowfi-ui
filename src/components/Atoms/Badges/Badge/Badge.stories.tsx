/**
 * ?Badge Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";

export default {
  title: "Atoms/Badges/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  counter: 1,
}
