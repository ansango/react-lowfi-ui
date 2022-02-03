import * as HeroIcons from "@heroicons/react/solid";

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
   * xsmall | small | base | large | xlarge
   */
  size?: keyof typeof cn.size;
  /**
   * className override
   */
  classIcon?: string;
};

/**
 * Description of Icon component displayed in Storybook
 */

const Icon: FC<IconProps> = ({ icon, size = "medium", classIcon }) => {
  const cnSize = cn.size[size];
  const styles = classIcon ?? cnSize;
  const RIcon = HeroIcons[icon];
  return <RIcon className={styles} />;
};

export default Icon;
