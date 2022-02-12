/**
 * ?Timeline Component
 */

import { FC } from "react";
import * as cn from "./TimelineStyles";

export type TimelineProps = {
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
 * Description of Timeline component displayed in Storybook
 */

const Timeline: FC<TimelineProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Timeline</span>
    </div>
  );
};

export default Timeline;
