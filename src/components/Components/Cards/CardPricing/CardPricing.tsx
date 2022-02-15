/**
 * ?CardPricing Component
 */

import { FC } from "react";
import { Icon } from "../../../..";
import { Button } from "../../Buttons";
// import * as cn from "./CardPricingStyles";

export type CardPricingProps = {
  /**
   * string
   */
  title: string;
  /**
   * string
   */
  price: string;
  /**
   * string
   */
  currency: string;
  /**
   * string
   */
  period: string;
  /**
   * {title: string; included: boolean}[]
   */
  features: {
    title: string;
    included: boolean;
  }[];
  /**
   * { title: string; action: () => void }
   */
  action: {
    label: string;
    action: () => void;
  };
};

/**
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardPricing: FC<CardPricingProps> = ({
  title,
  price,
  currency,
  period,
  features,
  action,
}) => {
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h3 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="text-3xl font-semibold">{currency}</span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/{period}</span>
      </div>

      <ul role="list" className="my-7 space-y-5">
        {features.map(({ title, included }, index) => (
          <li
            key={index}
            className={
              included ? "flex space-x-3" : "flex space-x-3 line-through decoration-gray-500"
            }
          >
            <Icon
              icon="CheckCircleIcon"
              classIcon={
                included
                  ? "flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  : "flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
              }
            />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {title}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Button label={action.label} fullWidth action={action.action} />
      </div>
    </div>
  );
};

export default CardPricing;
