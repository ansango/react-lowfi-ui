/**
 * ?ButtonIcon Component
 */

import { FC } from "react";
import * as cn from "./ButtonIconStyles";
import * as HeroIcons from "@heroicons/react/solid";

import Icon from "../../../Atoms/Icons/Icon/Icon";

export type ButtonIconProps = {
  /**
   * HeroIcons
   */
  icon: keyof typeof HeroIcons;
  /**
   * small | base | large
   * @default "base"
   */
  size?: keyof typeof cn.size;
  /**
   * solid | outline
   * @default "solid"
   */
  kind?: "solid" | "outline";
  /**
   * default | alternative | dark | light | green | red | yellow | purple
   * @default "default"
   */
  style?: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
  /**
   * pill | rounded
   * @default "rounded"
   */
  rounded?: keyof typeof cn.rounded;
  /**
   * disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * onClick event
   */
  action?: () => void;
  /**
   * className override
   */
  classButton?: string;
  /**
   * className override
   */
  classIcon?: string;
  /**
   * className override
   */
};

/**
 * Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows
 */

const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
  size = "base",
  kind = "solid",
  style = "default",
  rounded = "default",
  classButton,
  classIcon,
  disabled,
  action,
  ...props
}) => {
  const cnKind = kind === "solid" ? cn.solid : cn.outline;
  const mode = `${cnKind[style]} ${cn.size[size]} ${cn.rounded[rounded]}`;
  const styles = classButton ?? mode;
  const className = disabled ? `${styles} ${cn.disabled}` : styles;
  return (
    <button type="button" className={className} onClick={action} disabled={disabled} {...props}>
      <Icon icon={icon} size="xsmall" classIcon={classIcon} />
    </button>
  );
};

export default ButtonIcon;
