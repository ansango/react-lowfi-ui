import { HeroIcons } from "../../lib";
/**
 * ?Icon Component
 */

import { FC } from "react";
import * as cn from "./IconStyles";

export type IconProps = {
  /**
   * Icon
   */
  icon: keyof typeof HeroIcons;
  /**
   * Size
   */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /**
   * Class Name override
   */
  className?: string;
};

/**
 * Description of Icon component displayed in Storybook
 */

const Icon: FC<IconProps> = ({ icon, size = "medium", className }) => {
  const cnSize = cn.size[size];
  const styles = className ?? cnSize;
  const RIcon = HeroIcons[icon];
  return <RIcon className={styles} />;
};

export default Icon;
