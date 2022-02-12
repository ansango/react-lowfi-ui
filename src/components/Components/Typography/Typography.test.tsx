/**
 * ?Typography Test
 */

import { render, screen } from "@testing-library/react";

import Typography from "./Typography";

describe("<Typography />", () => {
  it("should render", () => {
    render(<Typography />);
    expect(screen.getByText("Typography")).toBeInTheDocument();
  })
})