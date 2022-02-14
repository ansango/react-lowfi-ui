/**
 * ?CardHorizontal Test
 */

import { render, screen } from "@testing-library/react";

import CardHorizontal from "./CardHorizontal";

describe("<CardHorizontal />", () => {
  it("should render", () => {
    render(<CardHorizontal />);
    expect(screen.getByText("CardHorizontal")).toBeInTheDocument();
  })
})