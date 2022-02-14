/**
 * ?CardImage Test
 */

import { render, screen } from "@testing-library/react";

import CardImage from "./CardImage";

describe("<CardImage />", () => {
  it("should render", () => {
    render(<CardImage />);
    expect(screen.getByText("CardImage")).toBeInTheDocument();
  })
})