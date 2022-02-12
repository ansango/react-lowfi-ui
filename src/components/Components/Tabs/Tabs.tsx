/**
 * ?Tabs Component
 */

import { FC } from "react";
import * as cn from "./TabsStyles";

export type TabsProps = {
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
 * Description of Tabs component displayed in Storybook
 */

const Tabs: FC<TabsProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Tabs</span>
    </div>
  );
};

export default Tabs;
