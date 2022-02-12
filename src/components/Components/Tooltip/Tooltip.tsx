/**
 * ?Tooltip Component
 */

import { FC } from "react";
import * as cn from "./TooltipStyles";

export type TooltipProps = {
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
 * Description of Tooltip component displayed in Storybook
 */

const Tooltip: FC<TooltipProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Tooltip</span>
    </div>
  );
};

export default Tooltip;
