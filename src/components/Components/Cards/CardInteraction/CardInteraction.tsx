/**
 * ?CardInteraction Component
 */

import { FC } from "react";
import * as cn from "./CardInteractionStyles";

import Avatar from "../../Avatar/Avatar";
import { Button } from "../../Buttons";
import { DropdownIcon } from "../../Dropdowns";
import * as HeroIcons from "@heroicons/react/solid";

const Header: FC<{
  dropIcon: keyof typeof HeroIcons;
  options: {
    label: string;
    action: () => void;
  }[];
}> = ({ dropIcon, options }) => (
  <div className={cn.hContainer}>
    <DropdownIcon
      button={{
        icon: dropIcon,
        classButton: cn.hButton,
        classIcon: cn.hIcon,
      }}
      placement="end"
      options={options}
    />
  </div>
);

const Content: FC<{ title: string; subtitle?: string; img?: string }> = ({
  title,
  subtitle,
  img,
}) => (
  <div className={cn.cContainer}>
    {img && <Avatar imgUrl={img} size="large" />}
    <h3 className={cn.cTitle}>{title}</h3>
    {subtitle && <span className={cn.cSubtitle}>{subtitle}</span>}
  </div>
);

const Actions: FC<{
  primary: { label: string; action: () => void };
  secondary?: { label: string; action: () => void };
}> = ({ primary, secondary }) => (
  <div className={cn.aContainer}>
    <div className={cn.aWrapper}>
      <Button label={primary.label} action={primary.action} />
      {secondary && (
        <Button
          label={secondary.label}
          action={secondary.action}
          style="alternative"
          kind="outline"
        />
      )}
    </div>
  </div>
);

export type CardInteractionProps = {
  /**
   * { activeHeader: boolean; dropIcon?: keyof typeof HeroIcons; options: { label: string; action: () => void; }[]; }
   */
  header: {
    activeHeader: boolean;
    dropIcon?: keyof typeof HeroIcons;
    options?: {
      label: string;
      action: () => void;
    }[];
  };
  /**
   * { title: string; subtitle?: string; avatar?: string; }
   */
  content: {
    avatar?: string;
    title: string;
    subtitle?: string;
  };
  /**
   * { activeActions: boolean; primary: { label: string; action: () => void; }; secondary?: { label: string; action: () => void; }; }
   */
  actions: {
    activeActions: boolean;
    primary?: {
      label: string;
      action: () => void;
    };
    secondary?: {
      label: string;
      action: () => void;
    };
  };
};

/**
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardInteraction: FC<CardInteractionProps> = ({ header, actions, content }) => {
  const { activeHeader, dropIcon, options } = header;
  const { title, subtitle, avatar } = content;
  const { activeActions, primary, secondary } = actions;

  return (
    <div className={cn.cardContainer}>
      {activeHeader && dropIcon && options && <Header dropIcon={dropIcon} options={options} />}
      {content && <Content title={title} subtitle={subtitle} img={avatar} />}
      {activeActions && primary && <Actions primary={primary} secondary={secondary} />}
    </div>
  );
};

export default CardInteraction;
