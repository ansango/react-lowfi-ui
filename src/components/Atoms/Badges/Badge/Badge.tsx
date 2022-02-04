/**
 * ?Badge Component
 */

import { FC } from "react";
import Icon from "../../Icon/Icon";
import * as cn from "./BadgeStyles";
import * as HeroIcons from "@heroicons/react/solid";

export type BadgeProps = {
  /**
   * string
   */
  label: string;
  /**
   * default | larger
   */
  size?: "default" | "large";
  /**
   * default | withIcon | iconOnly
   */
  kind?: "default" | "withIcon" | "iconOnly";
  /**
   * Hero Icons
   */
  icon?: keyof typeof HeroIcons;
  /**
   * default | dark | red | green | yellow | indigo | purple | pink
   */
  style?: "default" | "dark" | "red" | "green" | "yellow" | "indigo" | "purple" | "pink";
  /**
   * true | false
   * @default false
   */
  link?: boolean;
  /**
   * Class Name override
   */
  classBadge?: string;
};

/**
 * Badge Component
 */

const Badge: FC<BadgeProps> = ({
  label,
  size = "default",
  kind = "default",
  icon,
  style = "default",
  link = false,
  classBadge,
}) => {
  const isLink = link ? cn.link[style] : "";
  const cnOption = `${cn.size[size]} ${cn.kind[kind]} ${cn.style[style]} ${isLink}`;
  const styles = classBadge ?? cnOption;
  const onlyIcon = kind === "iconOnly";
  const withIcon = kind === "withIcon";
  const classIcon = onlyIcon ? cn.iconSize["iconOnly"] : cn.iconSize["withIcon"];
  return (
    <span className={styles}>
      {icon && (onlyIcon || withIcon) && <Icon icon={icon} classIcon={classIcon} />}
      {kind !== "iconOnly" && <>{label}</>}
    </span>
  );
};

export default Badge;
