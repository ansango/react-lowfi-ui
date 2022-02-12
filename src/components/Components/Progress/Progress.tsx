/**
 * ?Progress Component
 */

import { FC } from "react";
import * as cn from "./ProgressStyles";

export type ProgressProps = {
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
 * Description of Progress component displayed in Storybook
 */

const Progress: FC<ProgressProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Progress</span>
    </div>
  );
};

export default Progress;
