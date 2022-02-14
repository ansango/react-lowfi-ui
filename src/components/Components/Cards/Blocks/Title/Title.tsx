/**
 * ?Title Component
 */

import { FC } from "react";
import * as cn from "./TitleStyles";

export type TitleProps = {
  /**
   * string
   */
  title: string;
};

/**
 * Description of Title component displayed in Storybook
 */

const Title: FC<TitleProps> = ({ title }) => {
  return <h5 className={cn.title}>{title}</h5>;
};

export default Title;
