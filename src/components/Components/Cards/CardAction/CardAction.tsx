/**
 * ?CardAction Component
 */

import { FC } from "react";
import * as cn from "./CardActionStyles";

export type CardActionProps = {
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
 * Description of CardAction component displayed in Storybook
 */

const CardAction: FC<CardActionProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>CardAction</span>
    </div>
  );
};

export default CardAction;
