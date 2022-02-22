/**
 * ?ModalForm Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../Buttons";
import { Checkbox, Form, Input } from "../../Forms";
import ModalForm from "./ModalForm";

export default {
  title: "Components/Modals/Modal Form",
  component: ModalForm,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ModalForm>;

const Template: ComponentStory<typeof ModalForm> = (args) => <ModalForm {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  element: <Button label="Test" />,
  form: (
    <Form onSubmit={(data) => console.log(data)} className="space-y-6">
      <Input
        name="email"
        label="Email"
        type="email"
        options={{
          required: { value: true, message: "Email is required" },
          pattern:
            // email regex from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
            {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Insert an email valid",
            },
        }}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        options={{
          required: { value: true, message: "Password is required" },
        }}
      />
      <div className="flex items-start">
        <Checkbox name="remember" label="Remember me" />
        <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
          Lost Password?
        </a>
      </div>
      <Button label="Login to your account" fullWidth type="submit" />
    </Form>
  ),
};
