/**
 * ?ModalPopup Test
 */

import { render, screen } from "@testing-library/react";

import ModalPopup from "./ModalPopup";

describe("<ModalPopup />", () => {
  it("should render", () => {
    render(<ModalPopup />);
    expect(screen.getByText("ModalPopup")).toBeInTheDocument();
  })
})