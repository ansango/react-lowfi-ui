/**
 * ?Pagination Component
 */

import { FC } from "react";
import * as cn from "./PaginationStyles";

export type PaginationProps = {
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
 * Description of Pagination component displayed in Storybook
 */

const Pagination: FC<PaginationProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Pagination</span>
    </div>
  );
};

export default Pagination;
