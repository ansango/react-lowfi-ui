/**
 * ?CardCallAction Component
 */

import { FC } from "react";
import * as cn from "./CardCallActionStyles";

export type CardCallActionProps = {
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
 * Description of CardCallAction component displayed in Storybook
 */

const CardCallAction: FC<CardCallActionProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>CardCallAction</span>
    </div>
  );
};

export default CardCallAction;
