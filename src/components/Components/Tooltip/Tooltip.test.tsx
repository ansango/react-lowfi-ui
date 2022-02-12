/**
 * ?Tooltip Test
 */

import { render, screen } from "@testing-library/react";

import Tooltip from "./Tooltip";

describe("<Tooltip />", () => {
  it("should render", () => {
    render(<Tooltip />);
    expect(screen.getByText("Tooltip")).toBeInTheDocument();
  })
})