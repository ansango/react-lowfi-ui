/**
 * ?CardFeature Test
 */

import { render, screen } from "@testing-library/react";

import CardFeature from "./CardFeature";

describe("<CardFeature />", () => {
  it("should render", () => {
    render(<CardFeature />);
    expect(screen.getByText("CardFeature")).toBeInTheDocument();
  })
})