/**
 * ?Form Test
 */

import { render, screen } from "@testing-library/react";

import Form from "./Form";

describe("<Form />", () => {
  it("should render", () => {
    render(<Form />);
    expect(screen.getByText("Form")).toBeInTheDocument();
  })
})