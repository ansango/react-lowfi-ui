/**
 * ?Progress Test
 */

import { render, screen } from "@testing-library/react";

import Progress from "./Progress";

describe("<Progress />", () => {
  it("should render", () => {
    render(<Progress />);
    expect(screen.getByText("Progress")).toBeInTheDocument();
  })
})