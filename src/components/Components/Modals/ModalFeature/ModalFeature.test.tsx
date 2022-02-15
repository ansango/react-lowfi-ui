/**
 * ?ModalFeature Test
 */

import { render, screen } from "@testing-library/react";

import ModalFeature from "./ModalFeature";

describe("<ModalFeature />", () => {
  it("should render", () => {
    render(<ModalFeature />);
    expect(screen.getByText("ModalFeature")).toBeInTheDocument();
  })
})