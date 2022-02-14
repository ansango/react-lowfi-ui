/**
 * ?ButtonGroup Test
 */

import { queryByTestId, render } from "@testing-library/react";
import ButtonGroup, { ButtonGroupProps } from "./ButtonGroup";

const props: ButtonGroupProps = {
  buttons: [
    {
      withIcon: true,
      icon: "AcademicCapIcon",
      label: "Profile",
    },
    {
      label: "Settings",
    },
  ],
};

describe("<ButtonGroup />", () => {
  it("should render", () => {
    const { container } = render(<ButtonGroup {...props} />);
    const firstButton = queryByTestId(container, "btn-group-btn-1");
    const lastButton = queryByTestId(container, "btn-group-btn-2");
    expect(firstButton).toBeTruthy();
    expect(lastButton).toBeTruthy();
  });
  it("should render with kind=outline", () => {
    const { container } = render(<ButtonGroup {...props} />);
    const firstButton = queryByTestId(container, "btn-group-btn-1");
    const lastButton = queryByTestId(container, "btn-group-btn-2");
    expect(firstButton).toBeTruthy();
    expect(lastButton).toBeTruthy();
  });
  it("should render with icon", () => {
    const { container } = render(<ButtonGroup {...props} />);
    const firstButton = queryByTestId(container, "btn-group-btn-1");
    expect(firstButton).toBeTruthy();
  });
});
