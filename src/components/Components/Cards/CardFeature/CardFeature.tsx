/**
 * ?CardFeature Component
 */

import { FC } from "react";
import * as cn from "./CardFeatureStyles";

export type CardFeatureProps = {
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
 * Description of CardFeature component displayed in Storybook
 */

const CardFeature: FC<CardFeatureProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>CardFeature</span>
    </div>
  );
};

export default CardFeature;
