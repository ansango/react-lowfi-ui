/**
 * ?Toast Test
 */

import { render, screen } from "@testing-library/react";

import Toast from "./Toast";

describe("<Toast />", () => {
  it("should render", () => {
    render(<Toast />);
    expect(screen.getByText("Toast")).toBeInTheDocument();
  })
})