/**
 * ?Timeline Test
 */

import { render, screen } from "@testing-library/react";

import Timeline from "./Timeline";

describe("<Timeline />", () => {
  it("should render", () => {
    render(<Timeline />);
    expect(screen.getByText("Timeline")).toBeInTheDocument();
  })
})