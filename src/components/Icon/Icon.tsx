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
  size?: keyof typeof cn.size;
  /**
   * Class Name override
   */
  classIcon?: string;
  /**
   * color
   */
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
