/**
 * ?CardCallAction Component
 */

import { FC } from "react";
import { IconSimple } from "../../../..";
import * as cn from "./CardCallActionStyles";
import * as SimpleIcons from "@icons-pack/react-simple-icons";
export type CardCallActionProps = {
  title: string;
  description: string;
  actions: {
    primary: {
      icon: keyof typeof SimpleIcons;
      label: string;
      description: string;
      action: () => void;
    };
    secondary: {
      icon: keyof typeof SimpleIcons;
      label: string;
      description: string;
      action: () => void;
    };
  };
};

/**
 * Description of CardCallAction component displayed in Storybook
 */

const CardCallAction: FC<CardCallActionProps> = ({ title, description, actions }) => {
  return (
    <div className={cn.cContainer}>
      <h3 className={cn.cTitle}>{title}</h3>
      <p className={cn.cDescription}>{description}</p>
      <div className={cn.cContainerButtons}>
        <button className={cn.cButton} onClick={actions.primary.action}>
          <IconSimple icon={actions.primary.icon} classIcon={cn.cButtonIcon} />

          <div className={cn.cAcont}>
            <div className={cn.cADesc}>{actions.primary.description}</div>
            <div className={cn.cALab}>{actions.primary.label}</div>
          </div>
        </button>
        <button className={cn.cButton} onClick={actions.secondary.action}>
          <IconSimple icon={actions.secondary.icon} classIcon={cn.cButtonIcon} />
          <div className={cn.cAcont}>
            <div className={cn.cADesc}>{actions.secondary.description}</div>
            <div className={cn.cALab}>{actions.secondary.label}</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardCallAction;
