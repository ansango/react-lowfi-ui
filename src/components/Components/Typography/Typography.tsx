/**
 * ?Typography Component
 */

import { FC } from "react";
import * as cn from "./TypographyStyles";

export type TypographyProps = {
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
 * Description of Typography component displayed in Storybook
 */

const Typography: FC<TypographyProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Typography</span>
    </div>
  );
};

export default Typography;
