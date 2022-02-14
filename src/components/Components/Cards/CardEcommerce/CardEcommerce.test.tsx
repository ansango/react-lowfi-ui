/**
 * ?CardEcommerce Test
 */

import { render, screen } from "@testing-library/react";

import CardEcommerce from "./CardEcommerce";

describe("<CardEcommerce />", () => {
  it("should render", () => {
    render(<CardEcommerce />);
    expect(screen.getByText("CardEcommerce")).toBeInTheDocument();
  })
})