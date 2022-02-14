/**
 * ?Form Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from "./Form";

export default {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const OptionOne = Template.bind({});

OptionOne.args = {};
