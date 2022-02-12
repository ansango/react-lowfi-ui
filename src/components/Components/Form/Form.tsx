/**
 * ?Form Component
 */

import { FC } from "react";
import * as cn from "./FormStyles";

export type FormProps = {
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
 * Description of Form component displayed in Storybook
 */

const Form: FC<FormProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>Form</span>
    </div>
  );
};

export default Form;
