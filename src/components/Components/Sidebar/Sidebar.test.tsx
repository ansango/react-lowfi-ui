/**
 * ?Sidebar Test
 */

import { render, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";

describe("<Sidebar />", () => {
  it("should render", () => {
    render(<Sidebar />);
    expect(screen.getByText("Sidebar")).toBeInTheDocument();
  })
})