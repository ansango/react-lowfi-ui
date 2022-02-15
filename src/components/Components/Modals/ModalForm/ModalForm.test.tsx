/**
 * ?ModalForm Test
 */

import { render, screen } from "@testing-library/react";

import ModalForm from "./ModalForm";

describe("<ModalForm />", () => {
  it("should render", () => {
    render(<ModalForm />);
    expect(screen.getByText("ModalForm")).toBeInTheDocument();
  })
})