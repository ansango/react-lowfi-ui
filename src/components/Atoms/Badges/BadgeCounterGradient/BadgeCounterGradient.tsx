/**
 * ?BadgeCounterGradient Component
 */

import { FC } from "react";
import * as cn from "./BadgeCounterGradientStyles";

export type BadgeCounterGradientProps = {
  /**
   * counter
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
};

/**
 * Badge Counter Gradient component
 */

const BadgeCounterGradient: FC<BadgeCounterGradientProps> = ({
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

export default BadgeCounterGradient;
