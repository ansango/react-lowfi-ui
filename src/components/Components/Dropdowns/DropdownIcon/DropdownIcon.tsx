/**
 * ?DropdownIcon Component
 */

import { FC, useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import ButtonIcon, { ButtonIconProps } from "../../Buttons/ButtonIcon/ButtonIcon";

import { Option } from "../Dropdown/Dropdown";
import * as cn from "./DropdownIconStyles";

export type DropdownIconProps = {
  /**
   * ButtonProps
   */
  button: ButtonIconProps;
  /**
   * start | end
   */
  placement: "start" | "end";
  /**
   * small | base | large
   */
  size?: "small" | "base" | "large";
  /**
   * { label: string; action: () => void; }[]
   */
  options: {
    label: string;
    action: () => void;
  }[];
  /**
   * { label: string; action: () => void; }
   */
  divider?: {
    label: string;
    action: () => void;
  };
  /**
   * { label: string; content: string; }
   */
  header?: {
    label: string;
    content?: string;
  };
};

/**
 * Use the Tailwind CSS dropdown elements to show a list of items displayed as a menu
 */

const DropdownIcon: FC<DropdownIconProps> = ({
  button,
  placement,
  size = "base",
  options,
  divider,
  header,
}) => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  const popperRef = useRef(null);
  const { styles, attributes } = usePopper(buttonRef.current, popperRef.current, {
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
    <div className={cn.container}>
      <div ref={buttonRef}>
        <ButtonIcon
          size={size}
          action={() => setShowPopper(!showPopper)}
          {...button}
          data-testid="dropdown-button"
        />
      </div>
      {showPopper ? (
        <div
          ref={popperRef}
          className={`${cn.base} ${cn.placement[placement]}`}
          style={styles}
          {...attributes.popper}
        >
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

export default DropdownIcon;
