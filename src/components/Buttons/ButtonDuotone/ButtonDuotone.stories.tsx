/**
 * ?ButtonDuotone Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonDuotone from "./ButtonDuotone";

export default {
  title: "Components/Buttons/Gradient Duotone",
  component: ButtonDuotone,
} as ComponentMeta<typeof ButtonDuotone>;

const Template: ComponentStory<typeof ButtonDuotone> = (args) => <ButtonDuotone {...args} />;

export const A_Regular = Template.bind({});

A_Regular.args = {
  label: "Button",
};
