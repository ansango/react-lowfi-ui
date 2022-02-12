/**
 * ?AccordionFlush Component
 */

import { FC, useRef, useState } from "react";
import * as cn from "./AccordionFlushStyles";
import Icon from "../../Atoms/Icon/Icon";
import * as HeroIcons from "@heroicons/react/outline";


type ItemProps = {
  title: string;
  content: string[] | string;
  position: { length: number; index: number };
  icon?: keyof typeof HeroIcons;
  kind: "info" | "danger" | "success" | "warning" | "dark";
};


const Item: FC<ItemProps> = ({ title, content, position, icon, kind }) => {
  const [isActive, setIsActive] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);
  const isFirst = position.index === 0;
  const isLast = position.index === position.length - 1;

  const rest = isLast ? cn.bLast : cn.bRest;
  const base = isFirst ? cn.bFirst : rest;
  const cnKind = `${base} ${cn.bKind[kind]}`;
  const btn = isActive ? ` ${cn.bActiveKind[kind]} ${cnKind}` : cnKind;

  const cont = isLast ? `${cn.cLast}` : `${cn.cBase}`;
  const simpleContent = typeof content === "string";
  return (
    <div className={cn.itemBase}>
      <button type="button" className={btn} onClick={() => setIsActive(!isActive)}>
        <span className={cn.sBase}>
          {icon && <Icon icon={icon} classIcon={cn.iWithTitle} />} {title}
        </span>
        <Icon icon="ChevronDownIcon" classIcon={isActive ? cn.iRotate : cn.iBase} />
      </button>

      <div
        ref={contentEl}
        className={cn.cAnimation}
        style={isActive ? { height: `${contentEl.current?.scrollHeight}px` } : { height: 0 }}
      >
        <div className={cont}>
          {simpleContent ? (
            <p className={cn.tBase}>{content}</p>
          ) : (
            content.map((item, index) => (
              <p key={index} className={cn.tBase}>
                {item}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export type AccordionFlushProps = {
  /**
   *
   */
  kind?: "info" | "danger" | "success" | "warning" | "dark";
  /**
   * Array of objects
   * [
   *  {
   *   title: string,
   *   content: string,
   *   icon?: keyof typeof HeroIcons
   *  }
   * ]
   */
  data: {
    title: string;
    content: string[] | string;
    icon?: keyof typeof HeroIcons;
  }[];
};

/**
 * Description of AccordionFlush component displayed in Storybook
 */

const AccordionFlush: FC<AccordionFlushProps> = ({ data, kind = "dark" }) => {
  const { length } = data;

  return (
    <div>
      {data.map(({ title, content, icon }, index) => {
        const position = { index, length };
        return <Item key={index} {...{ title, content, icon, position, kind }} />;
      })}
    </div>
  );
};

export default AccordionFlush;
