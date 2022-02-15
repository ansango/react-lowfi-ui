/**
 * ?ModalForm Component
 */

import { FC } from "react";
import * as cn from "./ModalFormStyles";

export type ModalFormProps = {
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
 * Description of ModalForm component displayed in Storybook
 */

const ModalForm: FC<ModalFormProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>ModalForm</span>
    </div>
  );
};

export default ModalForm;
