/**
 * ?Tabs Test
 */

import { render, screen } from "@testing-library/react";

import Tabs from "./Tabs";

describe("<Tabs />", () => {
  it("should render", () => {
    render(<Tabs />);
    expect(screen.getByText("Tabs")).toBeInTheDocument();
  })
})