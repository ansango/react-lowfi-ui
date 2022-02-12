/**
 * ?ListGroup Test
 */

import { render, screen } from "@testing-library/react";

import ListGroup from "./ListGroup";

describe("<ListGroup />", () => {
  it("should render", () => {
    render(<ListGroup />);
    expect(screen.getByText("ListGroup")).toBeInTheDocument();
  })
})