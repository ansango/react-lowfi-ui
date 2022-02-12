/**
 * ?Modal Component
 */

import { FC } from "react";
import * as cn from "./ModalStyles";

export type ModalProps = {
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
 * Description of Modal component displayed in Storybook
 */

const Modal: FC<ModalProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Modal</span>
    </div>
  );
};

export default Modal;
