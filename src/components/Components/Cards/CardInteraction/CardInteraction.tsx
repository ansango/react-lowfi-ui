/**
 * ?CardInteraction Component
 */

import { FC } from "react";
import * as cn from "./CardInteractionStyles";

export type CardInteractionProps = {
  /**
   * Description of options in Storybook
   */
  option?: "option__one" | "option__two" | "option__three";
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
 * Description of CardInteraction component displayed in Storybook
 */

const CardInteraction: FC<CardInteractionProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>CardInteraction</span>
    </div>
  );
};

export default CardInteraction;
