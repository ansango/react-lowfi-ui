/**
 * ?Dropdown Component
 */

import { FC, useRef, useState } from "react";
import * as cn from "./DropdownStyles";
import { usePopper } from "react-popper";
import { Placement } from "@popperjs/core";
import { Button } from "../Buttons";
import { ButtonProps } from "../Buttons/Button/Button";

export type DropdownProps = {
  button: ButtonProps;
  size?: "small" | "base" | "large";
  placement: Placement;
  options: {
    label: string;
    action: () => void;
  }[];
  divider?: {
    label: string;
    action: () => void;
  };
  header?: {
    label: string;
    content?: string;
  };
};

/**
 * Description of Dropdown component displayed in Storybook
 */

export const Option = ({ label, action }: { label: string; action: () => void }) => (
  <span className={cn.oBase} onClick={action}>
    {label}
  </span>
);

const Dropdown: FC<DropdownProps> = ({
  button,
  size = "base",
  placement = "bottom",
  options,
  divider,
  header,
}) => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  const popperRef = useRef(null);
  const { styles, attributes } = usePopper(buttonRef.current, popperRef.current, {
    placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  return (
    <div ref={buttonRef}>
      <Button size={size} onClick={() => setShowPopper(!showPopper)} {...button} />
      {showPopper ? (
        <div ref={popperRef} className={cn.base} style={styles.popper} {...attributes.popper}>
          {header && (
            <div className={cn.hContainer}>
              <span className={cn.hLabel}>{header.label}</span>
              <span className={cn.hContent}>{header.content}</span>
            </div>
          )}
          <ul className={cn.lBase}>
            {options.map((option, index) => (
              <li key={index}>
                <Option {...option} />
              </li>
            ))}
          </ul>
          {divider && (
            <div className={cn.dBase}>
              <Option {...divider} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
