/**
 * ?Modal Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Buttons";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    opened: { control: false },
    element: { control: false },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  opened: false,
  element: <Button label="Test" />,
};
