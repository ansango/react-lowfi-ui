/**
 * ?CardForm Component
 */

import { FC } from "react";
import * as cn from "./CardFormStyles";

export type CardFormProps = {
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
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardForm: FC<CardFormProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>CardForm</span>
    </div>
  );
};

export default CardForm;
