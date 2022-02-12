/**
 * ?Table Component
 */

import { FC } from "react";
import * as cn from "./TableStyles";

export type TableProps = {
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
 * Description of Table component displayed in Storybook
 */

const Table: FC<TableProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Table</span>
    </div>
  );
};

export default Table;
