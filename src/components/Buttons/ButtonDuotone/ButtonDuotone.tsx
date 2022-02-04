/**
 * ?ButtonDuotone Component
 */

import { FC } from "react";
import * as cn from "./ButtonDuotoneStyles";
import * as HeroIcons from "@heroicons/react/solid";

import Icon from "../../Atoms/Icon/Icon";
import SpinnerGradient from "../../Atoms/Spinners/SpinnerGradient/SpinnerGradient";
import BadgeGradient from "../../Atoms/Badges/BadgeGradient/BadgeGradient";

export type ButtonDuotoneProps = {
  /**
   * Label of the button
   */
  label: string;
  /**
   * xsmall | small | base | large | xlarge
   * @default "base"
   */
  size?: keyof typeof cn.size;
  /**
   * purple | cyan | green | pink | orange | lime | yellow;
   * @default "purple"
   */
  style?: "blue" | "green" | "cyan" | "teal" | "lime" | "red" | "pink" | "purple";
  /**
   * HeroIcons
   */
  icon?: keyof typeof HeroIcons;
  /**
   * disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * loading
   * @default false
   */
  loading?: boolean;
  /**
   * badge, used for notifications count
   */
  badge?: number;
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
};

/**
 * ButtonDuotone Component
 */

const ButtonDuotone: FC<ButtonDuotoneProps> = ({
  label,
  size = "base",
  style = "purple",
  icon,
  loading = false,
  badge = 0,
  classButton,
  ...props
}) => {
  const mode = `flex items-center justify-between ${cn.solid[style]} ${cn.size[size]}`;
  const styles = classButton ?? mode;
  const className = props.disabled ? `${styles} ${cn.disabled}` : styles;
  const iconOrLoading = loading || icon || badge ? "mr-2.5" : "";
  const reSize = size === "xsmall" || size === "small" ? "xsmall" : "small";

  return (
    <button type="button" className={className} {...props}>
      <span className={iconOrLoading}>{label}</span>
      {icon && !loading && <Icon icon={icon} size={reSize} {...props} />}
      {loading && <SpinnerGradient kind="duotone" style={style} size={reSize} />}
      {!icon && !loading && <BadgeGradient counter={badge} style={style} kind="duotone" />}
    </button>
  );
};

export default ButtonDuotone;
