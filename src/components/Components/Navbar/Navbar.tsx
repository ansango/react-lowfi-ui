/**
 * ?Navbar Component
 */

import { FC } from "react";
import * as cn from "./NavbarStyles";

export type NavbarProps = {
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
 * Description of Navbar component displayed in Storybook
 */

const Navbar: FC<NavbarProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Navbar</span>
    </div>
  );
};

export default Navbar;
