/**
 * ?ButtonGroup Test
 */

import { queryByTestId, render } from "@testing-library/react";
import * as HeroIcons from "@heroicons/react/outline";
import ButtonGroup from "./ButtonGroup";

const buttons: {
  label: string;
  withIcon?: boolean;
  icon?: keyof typeof HeroIcons;
  onClick?: () => void;
}[] = [
  {
    withIcon: true,
    icon: "AcademicCapIcon",
    label: "Profile",
  },
  {
    label: "Settings",
  },
];

describe("<ButtonGroup />", () => {
  it("should render", () => {
    const { container } = render(<ButtonGroup buttons={buttons} />);
    const firstButton = queryByTestId(container, "btn-group-btn-1");
    const lastButton = queryByTestId(container, "btn-group-btn-2");
    expect(firstButton).toBeTruthy();
    expect(lastButton).toBeTruthy();
  });
  it("should render with kind=outline", () => {
    const { container } = render(<ButtonGroup kind="outline" buttons={buttons} />);
    const firstButton = queryByTestId(container, "btn-group-btn-1");
    const lastButton = queryByTestId(container, "btn-group-btn-2");
    expect(firstButton).toBeTruthy();
    expect(lastButton).toBeTruthy();
  });
  it("should render with icon", () => {
    const { container } = render(<ButtonGroup kind="outline" buttons={buttons} />);
    const firstButton = queryByTestId(container, "btn-group-btn-1");
    expect(firstButton).toBeTruthy();
  });
});
