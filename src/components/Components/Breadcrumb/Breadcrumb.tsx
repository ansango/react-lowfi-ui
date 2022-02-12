/**
 * ?Breadcrumb Component
 */

import { FC } from "react";
import * as cn from "./BreadcrumbStyles";

export type BreadcrumbProps = {
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
 * Description of Breadcrumb component displayed in Storybook
 */

const Breadcrumb: FC<BreadcrumbProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Breadcrumb</span>
    </div>
  );
};

export default Breadcrumb;
