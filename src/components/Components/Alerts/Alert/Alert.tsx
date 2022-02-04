/**
 * ?Alert Component
 */

import { FC, useState } from "react";
import * as HeroIcons from "@heroicons/react/outline";
import Icon from "../../../Atoms/Icon/Icon";
import { ButtonIcon } from "../../Buttons";
import * as cn from "./AlertStyles";

export type LinkProps = {
  text: string;
  href: string;
};

export type AlertProps = {
  kind?: "info" | "danger" | "success" | "warning" | "dark";
  bordered?: boolean;
  opened: boolean;
  withIcon?: boolean;
  icon?: keyof typeof HeroIcons;
  text: string;
  link?: LinkProps;
  dismissable?: boolean;
};

/**
 * Description of Alert component displayed in Storybook
 */

const Alert: FC<AlertProps> = ({
  kind = "info",
  bordered = false,
  dismissable = false,
  opened = false,
  withIcon = false,
  icon,
  text,
  link,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(opened);
  if (!isOpen) return null;
  const isBorder = bordered ? cn.alertBorderKind[kind] : cn.alertKind[kind];
  return (
    <div className={`${cn.alertBase} ${isBorder}`} role="alert">
      {withIcon && icon && <Icon icon={icon} classIcon={cn.iconAlert} />}
      <div className={`${cn.textBase} ${cn.textKind[kind]}`}>
        {text}
        <a href={link?.href} className={`${cn.linkBase} ${cn.linkKind[kind]}`}>
          {link?.text}
        </a>
      </div>
      {dismissable && (
        <ButtonIcon
          icon="XIcon"
          classButton={`${cn.btnCloseBase} ${cn.btnCloseKind[kind]}`}
          classIcon={cn.iconClose}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Alert;
