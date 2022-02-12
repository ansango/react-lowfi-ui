/**
 * ?ButtonGroup Component
 */

import { FC } from "react";
import * as cn from "./ButtonGroupStyles";

export type ButtonGroupProps = {
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
 * Description of ButtonGroup component displayed in Storybook
 */

const ButtonGroup: FC<ButtonGroupProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>ButtonGroup</span>
    </div>
  );
};

export default ButtonGroup;
