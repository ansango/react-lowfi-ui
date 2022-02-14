/**
 * ?Paragraph Test
 */

import { render, screen } from "@testing-library/react";

import Paragraph from "./Paragraph";

describe("<Paragraph />", () => {
  it("should render", () => {
    render(<Paragraph content="Paragraph"/>);
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
  })
})