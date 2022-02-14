/**
 * ?CardAction Test
 */

import { render, screen } from "@testing-library/react";

import CardAction from "./CardAction";

describe("<CardAction />", () => {
  it("should render", () => {
    render(<CardAction />);
    expect(screen.getByText("CardAction")).toBeInTheDocument();
  })
})