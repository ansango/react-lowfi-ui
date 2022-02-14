/**
 * ?CardImage Component
 */

import { FC } from "react";
import { Button } from "../../Buttons";
import { ButtonProps } from "../../Buttons/Button/Button";
import { Image, Paragraph, Title } from "../Blocks";
import * as cn from "./CardImageStyles";

export type CardImageProps = {
  /**
   * string
   */
  title: string;
  /**
   * string | string[]
   */
  content: string | string[];
  /**
   * string
   */
  imgUrl: string;
  /**
   *
   */
  action: ButtonProps;
};

/**
 * Description of CardImage component displayed in Storybook
 */

const CardImage: FC<CardImageProps> = ({ title, content, action, imgUrl }) => {
  const simpleContent = typeof content === "string";
  return (
    <div className={cn.card}>
      <Image src={imgUrl} alt="" />
      <div className={cn.content}>
        <Title title={title} />
        {simpleContent ? (
          <Paragraph content={content} />
        ) : (
          content.map((item, index) => <Paragraph key={index} content={item} />)
        )}
        <Button size="small" {...action} />
      </div>
    </div>
  );
};

export default CardImage;
