/**
 * ?CardCallAction Test
 */

import { render, screen } from "@testing-library/react";

import CardCallAction from "./CardCallAction";

describe("<CardCallAction />", () => {
  it("should render", () => {
    render(<CardCallAction />);
    expect(screen.getByText("CardCallAction")).toBeInTheDocument();
  })
})