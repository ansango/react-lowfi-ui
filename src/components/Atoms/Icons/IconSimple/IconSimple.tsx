/**
 * ?IconSimple Component
 */

import { FC } from "react";
import * as cn from "./IconSimpleStyles";
import * as SimpleIcons from "@icons-pack/react-simple-icons";

export type IconSimpleProps = {
  /**
   * Icon
   */
  icon: keyof typeof SimpleIcons;
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
 * Description of IconSimple component displayed in Storybook
 */

const IconSimple: FC<IconSimpleProps> = ({ icon, size = "base", classIcon }) => {
  const cnSize = cn.size[size];
  const styles = classIcon ?? cnSize;
  const RIcon = SimpleIcons[icon];
  return <RIcon className={styles} />;
};

export default IconSimple;
