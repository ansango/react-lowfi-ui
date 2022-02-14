/**
 * ?AlertContent Component
 */

import { FC, useState } from "react";
import { Button } from "../../Buttons";
import * as cn from "./AlertContentStyles";
import * as HeroIcons from "@heroicons/react/outline";
import Icon from "../../../Atoms/Icon/Icon";

export type AlertContentProps = {
  /**
   * string
   */
  title: string;
  /**
   * HeroIcons
   * */
  icon: keyof typeof HeroIcons;
  /**
   * string
   */
  content: string;
  /**
   * info | danger | success | warning | dark
   * @default "info"
   */
  kind?: "info" | "danger" | "success" | "warning" | "dark";
  /**
   * true | false
   * @default false
   */
  opened?: boolean;
  /**
   * true | false
   * @default false
   */
  dismissable?: boolean;
  /**
   * function
   * @default undefined
   */
  action?: () => void;
};

/**
 * Alert Content Component
 */

const AlertContent: FC<AlertContentProps> = ({
  title,
  icon,
  content,
  kind = "info",
  dismissable = false,
  opened = false,
  action,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(opened);
  if (!isOpen) return null;
  return (
    <div className={`${cn.aBase} ${cn.aContKind[kind]}`} role="alert" data-testid="alert">
      <div className={cn.aTitleBase}>
        <Icon icon={icon} classIcon={`${cn.aTitleIcon} ${cn.aTitleIconKind[kind]}`} />
        <h3 className={`${cn.aTitle} ${cn.aTitleKind[kind]}`}>{title}</h3>
      </div>
      <div className={`${cn.aContent} ${cn.aContentKind[kind]}`}>{content}</div>
      <div className="flex">
        <Button
          icon="EyeIcon"
          size="small"
          label="View more"
          classButton={`${cn.actionButton} ${cn.actionButtonKind[kind]}`}
          action={action}
        />

        {dismissable && (
          <Button
            size="small"
            label="Dismiss"
            classButton={`${cn.actionDismiss} ${cn.actionDismissKind[kind]}`}
            action={() => setIsOpen(false)}
            data-testid="dismiss-button"
          />
        )}
      </div>
    </div>
  );
};

export default AlertContent;
