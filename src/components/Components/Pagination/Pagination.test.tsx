/**
 * ?Pagination Test
 */

import { render, screen } from "@testing-library/react";

import Pagination from "./Pagination";

describe("<Pagination />", () => {
  it("should render", () => {
    render(<Pagination />);
    expect(screen.getByText("Pagination")).toBeInTheDocument();
  })
})