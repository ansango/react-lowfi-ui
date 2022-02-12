/**
 * ?Dropdown Test
 */

import { render, screen } from "@testing-library/react";

import Dropdown from "./Dropdown";

describe("<Dropdown />", () => {
  it("should render", () => {
    render(<Dropdown />);
    expect(screen.getByText("Dropdown")).toBeInTheDocument();
  })
})