/**
 * ?BadgeGradient Component
 */

import { FC } from "react";
import * as cn from "./BadgeGradientStyles";

export type BadgeGradientProps = {
  /**
   * Counter
   */
  counter?: number;
  /**
   * monochrome | duotone
   */
  kind?: "monochrome" | "duotone";
  /**
   * default | alternative | dark | light | green | red | yellow | purple
   * @default "default"
   */
  style?: "blue" | "green" | "cyan" | "teal" | "lime" | "red" | "pink" | "purple";
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
 * Description of BadgeGradient component displayed in Storybook
 */

const BadgeGradient: FC<BadgeGradientProps> = ({
  counter = 0,
  kind = "monochrome",
  style = "blue",
}) => {
  if (counter === 0) return null;
  const badge = counter > 99 ? 99 : counter;
  const cnKind = kind === "monochrome" ? cn.monochrome : cn.duotone;
  const className = `${cn.base} ${cnKind[style]}`;
  return <span className={className}>{badge}</span>;
};

export default BadgeGradient;
