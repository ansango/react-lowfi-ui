/**
 * ?ButtonGroup Component
 */

import { FC } from "react";
import * as cn from "./ButtonGroupStyles";
import * as HeroIcons from "@heroicons/react/outline";
import Icon from "../../Atoms/Icons/Icon/Icon";
export type ButtonGroupProps = {
  /**
   * solid | outline
   */
  kind?: "solid" | "outline";
  /**
   * info | danger | success | warning | dark
   */
  style?: "info" | "success" | "warning" | "danger" | "dark";
  /**
   * The buttons to be displayed
   * {
   *  label: string,
   *  withIcon: boolean,
   *  icon: keyof typeof HeroIcons
   *  onClick?: () => void
   * }[]
   */
  buttons: {
    label: string;
    withIcon?: boolean;
    icon?: keyof typeof HeroIcons;
    action?: () => void;
    disabled?: boolean;
  }[];
};

/**
 * Description of ButtonGroup component displayed in Storybook
 */

const ButtonGroup: FC<ButtonGroupProps> = ({ kind = "solid", style = "dark", buttons }) => {
  const { length } = buttons;
  const bgStyle = kind === "solid" ? cn.bgStyleSolid[style] : cn.bgStyleOutline[style];
  const cnBase = `${cn.bgBase} ${cn.bgKind[kind]} ${bgStyle}`;
  return (
    <div className={cn.bgContainer} role="group">
      {buttons.map(({ label, icon, action, withIcon, disabled = false }, index) => {
        const isFirst = index === 0;
        const isLast = index === length - 1;
        const cnRest = isLast ? cn.bgLast : cn.bgRest;
        const cnRender = isFirst ? `${cnBase} ${cn.bgFirst}` : `${cnBase} ${cnRest}`;
        const rendFull = disabled ? `${cnRender} ${cn.disabled}` : cnRender;
        return (
          <button
            key={index}
            className={rendFull}
            onClick={action}
            disabled={disabled}
            data-testid={`btn-group-btn-${index + 1}`}
          >
            {withIcon && icon && <Icon icon={icon} classIcon={cn.iBase} />}
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
