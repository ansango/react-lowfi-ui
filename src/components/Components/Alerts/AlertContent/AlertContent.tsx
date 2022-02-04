/**
 * ?AlertContent Component
 */

import { FC, useState } from "react";
import { Button } from "../../Buttons";
import * as cn from "./AlertContentStyles";
import * as HeroIcons from "@heroicons/react/outline";
import Icon from "../../../Atoms/Icon/Icon";

export type AlertContentProps = {
  title: string;
  icon: keyof typeof HeroIcons;
  content: string;
  kind?: "info" | "danger" | "success" | "warning" | "dark";
  opened: boolean;
  dismissable?: boolean;
  action?: () => void;
};

/**
 * Description of AlertContent component displayed in Storybook
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
    <div className={`${cn.aBase} ${cn.aContKind[kind]}`} role="alert">
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
          onClick={action}
        />

        {dismissable && (
          <Button
            size="small"
            label="Dismiss"
            classButton={`${cn.actionDismiss} ${cn.actionDismissKind[kind]}`}
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AlertContent;
