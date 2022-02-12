/**
 * ?ListGroup Component
 */

import { FC } from "react";
import * as cn from "./ListGroupStyles";

export type ListGroupProps = {
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
 * Description of ListGroup component displayed in Storybook
 */

const ListGroup: FC<ListGroupProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>ListGroup</span>
    </div>
  );
};

export default ListGroup;
