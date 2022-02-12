/**
 * ?Dropdown Component
 */

import { FC } from "react";
import * as cn from "./DropdownStyles";

export type DropdownProps = {
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
 * Description of Dropdown component displayed in Storybook
 */

const Dropdown: FC<DropdownProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Dropdown</span>
    </div>
  );
};

export default Dropdown;
