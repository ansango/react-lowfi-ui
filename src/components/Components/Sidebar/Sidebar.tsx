/**
 * ?Sidebar Component
 */

import { FC } from "react";
import * as cn from "./SidebarStyles";

export type SidebarProps = {
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
 * Description of Sidebar component displayed in Storybook
 */

const Sidebar: FC<SidebarProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Sidebar</span>
    </div>
  );
};

export default Sidebar;
