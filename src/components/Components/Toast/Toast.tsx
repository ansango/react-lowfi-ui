/**
 * ?Toast Component
 */

import { FC } from "react";
import * as cn from "./ToastStyles";

export type ToastProps = {
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
 * Description of Toast component displayed in Storybook
 */

const Toast: FC<ToastProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Toast</span>
    </div>
  );
};

export default Toast;
