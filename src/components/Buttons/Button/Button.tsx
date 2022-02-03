import { FC } from "react";
import * as cn from "./ButtonStyles";
import * as HeroIcons from "@heroicons/react/solid";
import Icon from "../../Icon/Icon";
import Spinner from "../../Spinner/Spinner";

export type ButtonProps = {
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
   * HeroIcons
   */
  icon?: keyof typeof HeroIcons;
  /**
   * right | left
   */
  iconDirection?: "left" | "right";
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
  /**
   * className override
   */
  classSpinner?: string;
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
      {icon && iconDirection === "left" && !loading && (
        <Icon icon={icon} size="xsmall" {...props} />
      )}
      <span className={iconOrLoading}>{label}</span>
      {icon && iconDirection === "right" && !loading && (
        <Icon icon={icon} size="xsmall" {...props} />
      )}
      {loading && <Spinner kind={kind} style={style} size={loaderSize} {...props} />}
    </button>
  );
};

export default Button;
