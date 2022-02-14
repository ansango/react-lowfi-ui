/**
 * ?Dropdown Test
 */

import { render } from "@testing-library/react";

import Dropdown, { DropdownProps } from "./Dropdown";

const props: DropdownProps = {
  button: {
    label: "Dropdown",
    icon: "ChevronDownIcon",
    classIcon: "h-5 w-5",
  },
  placement: "bottom-start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};

describe("<Dropdown />", () => {
  it("should render", () => {
    render(<Dropdown {...props} />);
  });
});
