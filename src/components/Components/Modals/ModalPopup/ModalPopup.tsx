/**
 * ?ModalPopup Component
 */

import { FC } from "react";
import * as cn from "./ModalPopupStyles";

export type ModalPopupProps = {
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
 * Description of ModalPopup component displayed in Storybook
 */

const ModalPopup: FC<ModalPopupProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>ModalPopup</span>
    </div>
  );
};

export default ModalPopup;
