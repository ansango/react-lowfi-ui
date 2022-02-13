/**
 * ?ButtonGroupLink Component
 */

import { FC } from "react";
import * as cn from "./ButtonGroupLinkStyles";

export type ButtonGroupLinkProps = {
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
 * Description of ButtonGroupLink component displayed in Storybook
 */

const ButtonGroupLink: FC<ButtonGroupLinkProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>ButtonGroupLink</span>
    </div>
  );
};

export default ButtonGroupLink;
