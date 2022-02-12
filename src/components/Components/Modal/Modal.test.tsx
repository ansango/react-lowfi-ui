/**
 * ?Modal Test
 */

import { render, screen } from "@testing-library/react";

import Modal from "./Modal";

describe("<Modal />", () => {
  it("should render", () => {
    render(<Modal />);
    expect(screen.getByText("Modal")).toBeInTheDocument();
  })
})