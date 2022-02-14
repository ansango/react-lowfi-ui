/**
 * ?Dropdown Component
 */

import { FC, useEffect, useRef, useState } from "react";
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

export const Option = ({
  label,
  action,
  index,
}: {
  label: string;
  action: () => void;
  index: number;
}) => (
  <span className={cn.oBase} onClick={action} data-testid={`dropdown-option-${index + 1}`}>
    {label}
  </span>
);

const Dropdown: FC<DropdownProps> = ({
  button,
  size = "base",
  placement,
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
  useEffect(() => {
    document.addEventListener("click", clickOut);
    return () => {
      document.removeEventListener("click", clickOut);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickOut = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(buttonRef.current)) {
      setShowPopper(false);
    }
  };

  return (
    <div ref={buttonRef}>
      <Button
        size={size}
        action={() => setShowPopper(!showPopper)}
        {...button}
        data-testid="dropdown-button"
      />
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
                <Option {...{ ...option, index }} />
              </li>
            ))}
          </ul>
          {divider && (
            <div className={cn.dBase}>
              <Option {...{ ...divider, index: 1 }} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
