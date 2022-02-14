/**
 * ?CardList Component
 */

import { FC } from "react";
import * as cn from "./CardListStyles";

export type CardListProps = {
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
 * Description of CardList component displayed in Storybook
 */

const CardList: FC<CardListProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>CardList</span>
    </div>
  );
};

export default CardList;
