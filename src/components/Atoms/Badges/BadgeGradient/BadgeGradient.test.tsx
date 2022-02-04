/**
 * ?BadgeGradient Test
 */

import { mount } from "enzyme";

import BadgeGradient from "./BadgeGradient";

describe("<BadgeGradient />", () => {
  it("should not render", () => {
    const wrapper = mount(<BadgeGradient />);
    expect(wrapper.find("span").length).toBe(0);
  });
  it("should render", () => {
    const wrapper = mount(<BadgeGradient counter={1} />);
    expect(wrapper.find("span").length).toBe(1);
  });
  it("should render +99", () => {
    const wrapper = mount(<BadgeGradient counter={100} />);
    expect(wrapper.find("span").text()).toBe("99");
  });
  it("should render monochrome", () => {
    const wrapper = mount(<BadgeGradient counter={1} kind="monochrome" />);
    expect(wrapper.find(BadgeGradient).props().kind).toBe("monochrome");
  });
  it("should render duotone", () => {
    const wrapper = mount(<BadgeGradient counter={1} kind="duotone" />);
    expect(wrapper.find(BadgeGradient).props().kind).toBe("duotone");
  });
});
