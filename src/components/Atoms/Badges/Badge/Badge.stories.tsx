/**
 * ?Badge Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";

export default {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classBadge: {
      control: false,
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  label: "Badge",
};

export const B_Larger = Template.bind({});

B_Larger.args = {
  label: "Badge",
  size: "larger",
}

export const C_WithIcon = Template.bind({});

C_WithIcon.args = {
  label: "Badge",
  kind: "withIcon",
  icon: "ArrowLeftIcon",
}

export const D_IconOnly = Template.bind({});

D_IconOnly.args = {
  label: "Badge",
  kind: "iconOnly",
  icon: "ArrowLeftIcon",
}

export const E_Link = Template.bind({});

E_Link.args = {
  label: "Badge",
  kind: "withIcon",
  icon: "ArrowLeftIcon",
  link: true,
}

export const F_CustomClass = Template.bind({});

F_CustomClass.args = {
  label: "Badge",
  kind: "withIcon",
  icon: "ArrowLeftIcon",
  classBadge:
    "inline-flex items-center text-indigo-900 bg-indigo-100 dark:bg-indigo-200 dark:text-indigo-900 rounded-full px-2 py-0.5 text-sm hover:bg-indigo-200 dark:hover:bg-indigo-300 cursor-pointer",
};