/**
 * ?Card Component
 */

import { FC } from "react";
import { Title, Paragraph } from "../Blocks";
import * as cn from "./CardStyles";

export type CardProps = {
  /**
   * string
   */
  title: string;
  /**
   * string | string[]
   */
  content: string | string[];
  /**
   * ()=> void
   */
  action?: () => void;
};

/**
 * Description of Card component displayed in Storybook
 */

const Card: FC<CardProps> = ({ title, content, action }) => {
  return (
    <div className={cn.card} onClick={action}>
      <Title title={title} />

      {typeof content === "string" ? (
        <Paragraph content={content} />
      ) : (
        content.map((item, index) => <Paragraph key={index} content={item} />)
      )}
    </div>
  );
};

export default Card;
