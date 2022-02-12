/**
 * ?Card Component
 */

import { FC } from "react";
import * as cn from "./CardStyles";

export type CardProps = {
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
 * Description of Card component displayed in Storybook
 */

const Card: FC<CardProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Card</span>
    </div>
  );
};

export default Card;
