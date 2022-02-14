/**
 * ?CardHorizontal Component
 */

import { FC } from "react";
import { Image, Paragraph, Title } from "../Blocks";
import * as cn from "./CardHorizontalStyles";

export type CardHorizontalProps = {
  /**
   * string
   */
  title: string;
  /**
   * string
   * max length: 210
   */
  content: string;
  /**
   * string
   */
  imgUrl: string;
  /**
   *
   */
  action: () => void;
};

/**
 * Description of CardHorizontal component displayed in Storybook
 */

const CardHorizontal: FC<CardHorizontalProps> = ({ title, content, action, imgUrl }) => {
  const textContent = content.length > 210 ? `${content.substring(0, 210)}...` : content;
  return (
    <div className={cn.card} onClick={action}>
      <Image src={imgUrl} alt="" className={cn.img} />

      <div className={cn.content}>
        <Title title={title} />
        <Paragraph content={textContent} />
      </div>
    </div>
  );
};

export default CardHorizontal;
