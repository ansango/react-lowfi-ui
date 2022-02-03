import { FC } from "react";
import * as cn from "./ButtonStyles";
import { HeroIcons } from "../../../lib";
import Icon from "../../Icon/Icon";
import Spinner from "../../Spinner/Spinner";

export type ButtonProps = {
  label: string;
  size?: keyof typeof cn.size;
  kind?: "solid" | "outline";
  style?: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
  rounded?: keyof typeof cn.rounded;
  icon?: keyof typeof HeroIcons;
  iconDirection?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  classButton?: string;
};

/**
 * Description
 */

const Button: FC<ButtonProps> = ({
  label,
  size = "base",
  kind = "solid",
  style = "default",
  rounded = "default",
  icon,
  iconDirection = "right",
  loading = false,
  classButton,
  ...props
}) => {
  const cnKind = kind === "solid" ? cn.solid : cn.outline;
  const mode = `flex items-center justify-between ${cnKind[style]} ${cn.size[size]} ${cn.rounded[rounded]}`;
  const styles = classButton ?? mode;
  const className = props.disabled ? `${styles} ${cn.disabled}` : styles;
  const iconOrLoading = loading || icon ? "mr-3" : "";
  const loaderSize = size === "xsmall" || size === "small" ? "xsmall" : "small";
  return (
    <button type="button" className={className} {...props}>
      {icon && iconDirection === "left" && !loading && <Icon icon={icon} size="xsmall" />}
      <span className={iconOrLoading}>{label}</span>
      {icon && iconDirection === "right" && !loading && <Icon icon={icon} size="xsmall" />}
      {loading && <Spinner kind={kind} style={style} size={loaderSize} />}
    </button>
  );
};

export default Button;
