/**
 * ?Breadcrumb Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FC, ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const OptionOne = Template.bind({});

const Link: FC<{ to: string; children?: ReactNode }> = ({ children, to }) => (
  <a href={to}>{children}</a>
);

OptionOne.args = {
  routes: [
    {
      level: 1,
      title: "Home",
      path: "/",
      LinkElement: ({ children }: { children: ReactNode }) => <Link to="/">{children}</Link>,
    },
    {
      level: 2,
      title: "Course",
      path: "/course",
      LinkElement: ({ children }: { children: ReactNode }) => <Link to="/course">{children}</Link>,
    },
    {
      level: 3,
      title: "React",
      path: "/react",
      LinkElement: ({ children }: { children: ReactNode }) => <Link to="/course">{children}</Link>,
    },
    {
      level: 4,
      title: "React Hooks",
      path: "/course",
      current: true,
    },
  ],
};
