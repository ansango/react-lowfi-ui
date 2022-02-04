/**
 * ?ButtonMonochrome Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonMonochrome from "./ButtonMonochrome";

export default {
  title: "Components/Buttons/Gradient Monochrome",
  component: ButtonMonochrome,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classIcon: { control: false },
    classButton: { control: false },
  },
} as ComponentMeta<typeof ButtonMonochrome>;

const Template: ComponentStory<typeof ButtonMonochrome> = (args) => <ButtonMonochrome {...args} />;

export const A_Regular = Template.bind({});

A_Regular.args = {
  label: "Button",
}

