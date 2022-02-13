/**
 * ?ButtonGroupLink Test
 */

import { render, screen } from "@testing-library/react";

import ButtonGroupLink from "./ButtonGroupLink";

describe("<ButtonGroupLink />", () => {
  it("should render", () => {
    render(<ButtonGroupLink />);
    expect(screen.getByText("ButtonGroupLink")).toBeInTheDocument();
  })
})