/**
 * ?CardHorizontal Component
 */

import { FC } from "react";
import * as cn from "./CardHorizontalStyles";

export type CardHorizontalProps = {
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
 * Description of CardHorizontal component displayed in Storybook
 */

const CardHorizontal: FC<CardHorizontalProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>CardHorizontal</span>
    </div>
  );
};

export default CardHorizontal;
