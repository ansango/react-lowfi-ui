/**
 * ?Table Test
 */

import { render, screen } from "@testing-library/react";

import Table from "./Table";

describe("<Table />", () => {
  it("should render", () => {
    render(<Table />);
    expect(screen.getByText("Table")).toBeInTheDocument();
  })
})