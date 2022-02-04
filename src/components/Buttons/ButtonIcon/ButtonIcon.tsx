/**
 * ?ButtonIcon Component
 */

import { FC } from "react";
import * as cn from "./ButtonIconStyles";
import * as HeroIcons from "@heroicons/react/solid";

import Icon from "../../Icon/Icon";

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
  onClick?: () => void;
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
 * Button Icon Component
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
      <Icon icon={icon} size="xsmall" classIcon={classIcon} />
    </button>
  );
};

export default ButtonIcon;
