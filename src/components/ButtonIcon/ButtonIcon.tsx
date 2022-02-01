/**
 * ?ButtonIcon Component
 */

import { FC } from "react";
import * as cn from "./ButtonIconStyles";
import { HeroIcons } from "../../lib";
import Icon from "../Icon/Icon";
export type ButtonIconProps = {
  /**
   * Icon
   */
  icon: keyof typeof HeroIcons;
  /**
   * Icon Size
   */
  iconSize?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /**
   * Is this the principal call to action on the page?
   */
  kind?: "primary" | "secondary";
  /**
   * outline button
   */
  subKind?: "outline" | "solid";
  /**
   * Button contents
   */
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Class Button Name override
   */
  classButton?: string;
  /**
   * Class Icon Name override
   */
  classIcon?: string;
};

/**
 * Description of ButtonIcon component displayed in Storybook
 */

const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
  iconSize = "xsmall",
  classButton,
  subKind = "solid",
  kind = "primary",
  classIcon,
  ...props
}) => {
  const base = subKind === "outline" ? cn.outline : cn.solid;
  const mode = `flex items-center ${base[kind]} ${cn.size.default}`;
  const styles = classButton ?? mode;
  return (
    <button type="button" className={styles} {...props}>
      <Icon icon={icon} size={iconSize} className={classIcon} />
    </button>
  );
};

export default ButtonIcon;
