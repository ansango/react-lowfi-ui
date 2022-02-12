/**
 * ?ButtonGroup Test
 */

import { render, screen } from "@testing-library/react";

import ButtonGroup from "./ButtonGroup";

describe("<ButtonGroup />", () => {
  it("should render", () => {
    render(<ButtonGroup />);
    expect(screen.getByText("ButtonGroup")).toBeInTheDocument();
  })
})