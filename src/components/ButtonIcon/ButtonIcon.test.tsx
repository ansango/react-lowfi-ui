/**
 * ?ButtonIcon Test
 */

import { render, screen } from "@testing-library/react";

import ButtonIcon from "./ButtonIcon";

describe("<ButtonIcon />", () => {
  it("should render", () => {
    render(<ButtonIcon icon="ArchiveIcon" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should render with outline", () => {
    render(<ButtonIcon icon="ArchiveIcon" subKind="outline" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
