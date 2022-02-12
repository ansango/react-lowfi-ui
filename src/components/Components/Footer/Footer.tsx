/**
 * ?Footer Component
 */

import { FC } from "react";
import * as cn from "./FooterStyles";

export type FooterProps = {
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
 * Description of Footer component displayed in Storybook
 */

const Footer: FC<FooterProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Footer</span>
    </div>
  );
};

export default Footer;
