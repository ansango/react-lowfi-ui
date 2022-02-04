import { FC } from "react";
import * as cn from "./ButtonMonochromeStyles";
import * as HeroIcons from "@heroicons/react/solid";
import Icon from "../../Icon/Icon";
import SpinnerGradient from "../../Spinners/SpinnerGradient/SpinnerGradient";

export type ButtonPropsMonochrome = {
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
   * solid | shadow
   * @default "solid"
   */
  kind?: "solid" | "shadow";
  /**
   * blue | green | cyan | teal | lime | red | pink | purple
   * @default "default"
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
 * Button Monochrome Component
 */

const ButtonMonochrome: FC<ButtonPropsMonochrome> = ({
  label,
  size = "base",
  kind = "solid",
  style = "blue",
  icon,
  loading = false,
  classButton,
  ...props
}) => {
  const cnKind = kind === "solid" ? cn.solid : cn.shadow;
  const mode = `flex items-center justify-between ${cnKind[style]} ${cn.size[size]}`;
  const styles = classButton ?? mode;
  const className = props.disabled ? `${styles} ${cn.disabled}` : styles;
  const iconOrLoading = loading || icon ? "mr-2.5" : "";
  const reSize = size === "xsmall" || size === "small" ? "xsmall" : "small";
  return (
    <button type="button" className={className} {...props}>
      <span className={iconOrLoading}>{label}</span>
      {icon && !loading && <Icon icon={icon} size={reSize} {...props} />}
      {loading && <SpinnerGradient kind="monochrome" style={style} size={reSize} />}
    </button>
  );
};

export default ButtonMonochrome;
