/**
 * ?CardPricing Test
 */

import { render, screen } from "@testing-library/react";

import CardPricing from "./CardPricing";

describe("<CardPricing />", () => {
  it("should render", () => {
    render(<CardPricing />);
    expect(screen.getByText("CardPricing")).toBeInTheDocument();
  })
})