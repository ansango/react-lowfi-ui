/**
 * ?Paragraph Component
 */

import { FC } from "react";
import * as cn from "./ParagraphStyles";

export type ParagraphProps = {
  /**
   * string
   */
  content: string;
};

/**
 * Description of Paragraph component displayed in Storybook
 */

const Paragraph: FC<ParagraphProps> = ({ content }) => {
  return <p className={cn.paragraph}>{content}</p>;
};

export default Paragraph;
