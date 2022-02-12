/**
 * ?Breadcrumb Test
 */

import { render, screen } from "@testing-library/react";

import Breadcrumb from "./Breadcrumb";

describe("<Breadcrumb />", () => {
  it("should render", () => {
    render(<Breadcrumb />);
    expect(screen.getByText("Breadcrumb")).toBeInTheDocument();
  })
})