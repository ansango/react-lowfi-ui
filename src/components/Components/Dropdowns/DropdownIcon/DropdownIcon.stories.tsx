/**
 * ?DropdownIcon Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import DropdownIcon from "./DropdownIcon";

export default {
  title: "Components/Dropdowns/Dropdown Icon",
  component: DropdownIcon,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof DropdownIcon>;

const Template: ComponentStory<typeof DropdownIcon> = (args) => <DropdownIcon {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  button: {
    label: "Dropdown",
    icon: "ChevronDownIcon",
    classIcon: "h-5 w-5",
  },
  placement: "bottom-start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};

export const B_Divider = Template.bind({});

B_Divider.args = {
  button: {
    label: "Dropdown",
    icon: "ChevronDownIcon",
    classIcon: "h-5 w-5",
  },
  placement: "bottom-start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
  divider: {
    label: "Divider",
    action: () => alert("Divider clicked"),
  },
};

export const C_Header = Template.bind({});

C_Header.args = {
  button: {
    label: "Dropdown",
    icon: "ChevronDownIcon",
    classIcon: "h-5 w-5",
  },
  placement: "bottom-start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
  header: {
    label: "Header",
    content: "Header content",
  },
  divider: {
    label: "Divider",
    action: () => alert("Divider clicked"),
  },
};

export const D_Custom = Template.bind({});

D_Custom.args = {
  button: {
    classButton: "flex items-center text-gray-800 dark:text-gray-600",
    icon: "ChevronDownIcon",
    classIcon: "h-4 w-4",
  },
  placement: "bottom-start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};

export const E_SizeSmall = Template.bind({});

E_SizeSmall.args = {
  button: {
    icon: "ChevronDownIcon",
  },
  size: "small",
  placement: "bottom-start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};

export const F_SizeLarge = Template.bind({});

F_SizeLarge.args = {
  button: {
    icon: "ChevronDownIcon",
  },
  size: "large",
  placement: "bottom-start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};
