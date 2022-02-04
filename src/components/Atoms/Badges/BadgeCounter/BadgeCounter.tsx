/**
 * ?BadgeCounter Component
 */

import { FC } from "react";
import * as cn from "./BadgeCounterStyles";

export type BadgeCounterProps = {
  /**
   * counter
   */
  counter?: number;
  /**
   * default | alternative | dark | light | green | red | yellow | purple
   * @default "default"
   */
  style?: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
  /**
   * Class Name override
   */
  classBadge?: string;
};

/**
 * Badge Counter component
 */

const Badge: FC<BadgeCounterProps> = ({ counter = 0, style = "default", classBadge }) => {
  if (counter === 0) return null;
  const badge = counter > 99 ? 99 : counter;
  const cnStyle = `${cn.base} ${cn.style[style]}`;
  const className = classBadge ?? cnStyle;
  return <span className={className}>{badge}</span>;
};

export default Badge;
