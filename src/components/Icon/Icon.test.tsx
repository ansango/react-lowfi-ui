/**
 * ?Icon Test
 */

import { render } from "@testing-library/react";
import { mount } from "enzyme";
import Icon from "./Icon";

describe("<Icon />", () => {
  it("should render", () => {
    const wrapper = mount(<Icon icon="AcademicCapIcon" />);
    expect(wrapper.props().icon).toBe("AcademicCapIcon");
    expect(wrapper.find("svg").length).toBe(1);
  });
  it("should render by default", () => {
    const { container } = render(<Icon icon="ArchiveIcon" />);
    expect(container.firstChild).toHaveClass("h-9 w-9");
  });
  it("should render with custom class", () => {
    const { container } = render(<Icon icon="ArrowDownIcon" classIcon="text-red-800" />);
    expect(container.firstChild).toHaveClass("text-red-800");
  });
  it("should render with small size", () => {
    const { container } = render(<Icon icon="ArrowDownIcon" size="small" />);
    expect(container.firstChild).toHaveClass("h-7 w-7");
  });
});
