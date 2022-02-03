/**
 * ?ButtonIcon Component
 */

import { FC } from "react";
import * as cn from "./ButtonIconStyles";
import { HeroIcons } from "../../../lib";
import Icon from "../../Icon/Icon";
export type ButtonIconProps = {
  size?: keyof typeof cn.size;
  icon: keyof typeof HeroIcons;
  kind?: "solid" | "outline";
  style?: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
  rounded?: keyof typeof cn.rounded;
  classButton?: string;
  classIcon?: string;
  disabled?: boolean;
  onClick?: () => void;
};

/**
 * Description of ButtonIcon component displayed in Storybook
 */

const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
  size = "base",
  kind = "solid",
  style = "default",
  rounded = "default",
  classButton,
  classIcon,
  ...props
}) => {
  const cnKind = kind === "solid" ? cn.solid : cn.outline;
  const mode = `${cnKind[style]} ${cn.size[size]} ${cn.rounded[rounded]}`;
  const styles = classButton ?? mode;
  const className = props.disabled ? `${styles} ${cn.disabled}` : styles;
  return (
    <button type="button" className={className} {...props}>
      <Icon icon={icon} size="xsmall" className={classIcon} />
    </button>
  );
};

export default ButtonIcon;
