/**
 * ?CardPricing Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardPricing from "./CardPricing";

export default {
  title: "Components/Cards/Card Pricing",
  component: CardPricing,
} as ComponentMeta<typeof CardPricing>;

const Template: ComponentStory<typeof CardPricing> = (args) => <CardPricing {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  title: "Basic plan",
  price: "19",
  currency: "€",
  period: "month",
  features: [
    {
      title: "2 team members",
      included: true,
    },
    {
      title: "Unlimited projects",
      included: true,
    },
    {
      title: "Unlimited storage",
      included: false,
    },
    {
      title: "Unlimited users",
      included: false,
    },
    {
      title: "24/7 support",
      included: false,
    },
  ],
  action: {
    label: "Choose plan",
    action: () => alert("Button clicked"),
  },
};
