/**
 * ?CardEcommerce Component
 */

import { FC } from "react";
import * as cn from "./CardEcommerceStyles";

export type CardEcommerceProps = {
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
 * Description of CardEcommerce component displayed in Storybook
 */

const CardEcommerce: FC<CardEcommerceProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>CardEcommerce</span>
    </div>
  );
};

export default CardEcommerce;
