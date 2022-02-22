/**
 * ?CardForm Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FC } from "react";
import { Button } from "../../Buttons";
import { Checkbox, Form, Input } from "../../Forms";
import CardForm from "./CardForm";

export default {
  title: "Components/Cards/Card Form",
  component: CardForm,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardForm>;

const Template: ComponentStory<typeof CardForm> = (args) => (
  <div style={{ width: "500px" }}>
    <CardForm {...args} />
  </div>
);

export const A_Default = Template.bind({});

const Header: FC = () => (
  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
);

const Footer: FC = () => (
  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
    Not registered?{" "}
    <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
      Create account
    </a>
  </div>
);

A_Default.args = {
  header: <Header />,
  children: (
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
  footer: <Footer />,
};
