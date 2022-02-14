/**
 * ?CardAction Component
 */

import { FC } from "react";
import { Button } from "../../Buttons";
import { ButtonProps } from "../../Buttons/Button/Button";
import { Paragraph, Title } from "../Blocks";
import * as cn from "./CardActionStyles";

export type CardActionProps = {
  /**
   * string
   */
  title: string;
  /**
   * string | string[]
   */
  content: string | string[];
  /**
   *
   */
  action: ButtonProps;
};

/**
 * Description of CardAction component displayed in Storybook
 */

const CardAction: FC<CardActionProps> = ({ title, content, action }) => {
  const simpleContent = typeof content === "string";
  return (
    <div className={cn.card}>
      <Title title={title} />
      {simpleContent ? (
        <Paragraph content={content} />
      ) : (
        content.map((item, index) => <Paragraph key={index} content={item} />)
      )}
      <Button size="small" {...action} />
    </div>
  );
};

export default CardAction;
