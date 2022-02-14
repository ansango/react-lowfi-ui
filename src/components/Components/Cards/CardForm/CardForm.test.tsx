/**
 * ?CardForm Test
 */

import { render, screen } from "@testing-library/react";

import CardForm from "./CardForm";

describe("<CardForm />", () => {
  it("should render", () => {
    render(<CardForm />);
    expect(screen.getByText("CardForm")).toBeInTheDocument();
  })
})