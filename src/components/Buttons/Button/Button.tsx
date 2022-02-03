import { FC } from "react";
import * as cn from "./ButtonStyles";
import { HeroIcons } from "../../../lib";
import Icon from "../../Icon/Icon";

export type ButtonProps = {
  label: string;
  size?: keyof typeof cn.size;
  kind?: "solid" | "outline";
  style?: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
  rounded?: keyof typeof cn.rounded;
  icon?: keyof typeof HeroIcons;
  iconDirection?: "left" | "right";
  disabled?: boolean;
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
  classButton,
  ...props
}) => {
  const cnKind = kind === "solid" ? cn.solid : cn.outline;
  const mode = `flex items-center ${cnKind[style]} ${cn.size[size]} ${cn.rounded[rounded]}`;
  const styles = classButton ?? mode;
  const className = props.disabled ? `${styles} ${cn.disabled}` : styles;
  return (
    <button type="button" className={className} {...props}>
      {icon && iconDirection === "left" && <Icon icon={icon} size="xsmall" />}
      <span className={cn.title}>{label}</span>
      {icon && iconDirection === "right" && <Icon icon={icon} size="xsmall" />}
    </button>
  );
};

export default Button;
