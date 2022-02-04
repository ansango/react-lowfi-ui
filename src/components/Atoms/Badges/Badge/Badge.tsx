/**
 * ?Badge Component
 */

import { FC } from "react";
import * as cn from "./BadgeStyles";

export type BadgeProps = {
  /**
   * Counter
   */
  counter?: number;
  /**
   * default | alternative | dark | light | green | red | yellow | purple
   * @default "default"
   */
  style?: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Class Name override
   */
  className?: string;
};

/**
 * Description of Badge component displayed in Storybook
 */

const Badge: FC<BadgeProps> = ({ counter = 0, style = "default" }) => {
  if (counter === 0) return null;
  const badge = counter > 99 ? 99 : counter;
  const className = `${cn.base} ${cn.style[style]}`;
  return <span className={className}>{badge}</span>;
};

export default Badge;
