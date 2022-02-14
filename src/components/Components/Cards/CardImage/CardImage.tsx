/**
 * ?CardImage Component
 */

import { FC } from "react";
import * as cn from "./CardImageStyles";

export type CardImageProps = {
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
 * Description of CardImage component displayed in Storybook
 */

const CardImage: FC<CardImageProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>CardImage</span>
    </div>
  );
};

export default CardImage;
