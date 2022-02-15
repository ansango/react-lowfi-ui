/**
 * ?Card Component
 */

import { FC } from "react";
import { Title, Paragraph } from "../../../Atoms/Blocks";
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
 * Get started with a large variety of Tailwind CSS card examples for your web project
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
