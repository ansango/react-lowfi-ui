import { FC } from "react";
import * as cn from "./ButtonStyles";
import * as HeroIcons from "@heroicons/react/solid";
import Icon from "../../Atoms/Icon/Icon";
import Spinner from "../../Atoms/Spinners/Spinner/Spinner";
import BadgeCounter from "../../Atoms/Badges/BadgeCounter/BadgeCounter";

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
  /**
   * className override
   */
  classSpinner?: string;
  /**
   * className override
   */
  classBadge?: string;
};

/**
 * Main Button component
 */

const Button: FC<ButtonProps> = ({
  label,
  size = "base",
  kind = "solid",
  style = "default",
  rounded = "default",
  icon,
  loading = false,
  badge = 0,
  classButton,
  ...props
}) => {
  const cnKind = kind === "solid" ? cn.solid : cn.outline;
  const mode = `flex items-center justify-between ${cnKind[style]} ${cn.size[size]} ${cn.rounded[rounded]}`;
  const styles = classButton ?? mode;
  const className = props.disabled ? `${styles} ${cn.disabled}` : styles;
  const iconOrLoading = loading || icon || badge ? "mr-2.5" : "";
  const reSize = size === "xsmall" || size === "small" ? "xsmall" : "small";
  return (
    <button type="button" className={className} {...props}>
      <span className={iconOrLoading}>{label}</span>
      {loading && <Spinner kind={kind} style={style} size={reSize} {...props} />}
      {icon && !loading && <Icon icon={icon} size={reSize} {...props} />}
      {!icon && !loading && <BadgeCounter counter={badge} style={style} {...props} />}
    </button>
  );
};

export default Button;
