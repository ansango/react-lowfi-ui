import { FC } from "react";
import * as cn from "./ButtonStyles";
import * as HeroIcons from "@heroicons/react/outline";
import Icon from "../Icon/Icon";

export type ButtonProps = {
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
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Class Name override
   */
  className?: string;
  /**
   * Optional icon
   */
  icon?: keyof typeof HeroIcons;
  /**
   * Icon direction
   */
  iconDirection?: "left" | "right";
};

/**
 * Primary UI component for user interaction
 */

const Button: FC<ButtonProps> = ({
  label,
  iconDirection,
  subKind = "solid",
  className,
  icon,
  kind = "primary",
  ...props
}) => {
  const base = subKind === "outline" ? cn.outline : cn.solid;
  const mode = `flex items-center ${base[kind]} ${cn.size.default}`;
  const styles = className ?? mode;

  return (
    <button type="button" className={styles} {...props}>
      {icon && iconDirection === "left" && <Icon icon={icon} size="xsmall" />}
      <span className={cn.title}>{label}</span>
      {icon && iconDirection === "right" && <Icon icon={icon} size="xsmall" />}
    </button>
  );
};

export default Button;
