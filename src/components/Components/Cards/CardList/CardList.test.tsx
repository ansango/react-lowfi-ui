/**
 * ?CardList Test
 */

import { render, screen } from "@testing-library/react";

import CardList from "./CardList";

describe("<CardList />", () => {
  it("should render", () => {
    render(<CardList />);
    expect(screen.getByText("CardList")).toBeInTheDocument();
  })
})