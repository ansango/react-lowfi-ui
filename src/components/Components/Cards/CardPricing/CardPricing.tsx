/**
 * ?CardPricing Component
 */

import { FC } from "react";
import * as cn from "./CardPricingStyles";

export type CardPricingProps = {
  /**
   * Description of options in Storybook
   */
  option?: "option__one" | "option__two" | "option__three";
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Class Name override
   */
  className?: string;
};

/**
 * Description of CardPricing component displayed in Storybook
 */

const CardPricing: FC<CardPricingProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>CardPricing</span>
    </div>
  );
};

export default CardPricing;
