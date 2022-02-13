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
  /**
   * info | danger | success | warning | dark
   * @default "info"
   */
  kind?: "info" | "danger" | "success" | "warning" | "dark";
  /**
   * true | false
   * @default false
   */
  bordered?: boolean;
  /**
   * true | false
   * @default false
   */
  opened?: boolean;
  /**
   * true | false
   * @default false
   */
  withIcon?: boolean;
  /**
   * HeroIcons
   * */
  icon?: keyof typeof HeroIcons;
  /**
   * string
   */
  text: string;
  /**
   * {
   *  text: string,
   *  href: string
   * }
   * @default undefined
   */
  link?: LinkProps;
  /**
   * true | false
   * @default false
   */
  dismissable?: boolean;
};

/**
 * Alert Component
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
    <div className={`${cn.alertBase} ${isBorder}`} role="alert" data-testid="alert">
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
          data-testid="dismiss-button"
        />
      )}
    </div>
  );
};

export default Alert;
