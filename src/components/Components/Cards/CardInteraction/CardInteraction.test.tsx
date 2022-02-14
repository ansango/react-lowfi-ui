/**
 * ?CardInteraction Test
 */

import { render, screen } from "@testing-library/react";

import CardInteraction from "./CardInteraction";

describe("<CardInteraction />", () => {
  it("should render", () => {
    render(<CardInteraction />);
    expect(screen.getByText("CardInteraction")).toBeInTheDocument();
  })
})