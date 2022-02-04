/**
 * ?Badge Test
 */

import { mount } from "enzyme";

import Badge from "./Badge";

describe("<Badge />", () => {
  it("should not render", () => {
    const wrapper = mount(<Badge />);
    expect(wrapper.find("span").length).toBe(0);
  });
  it("should render", () => {
    const wrapper = mount(<Badge counter={1} />);
    expect(wrapper.find("span").length).toBe(1);
  });
  it("should render +99", () => {
    const wrapper = mount(<Badge counter={100} />);
    expect(wrapper.find("span").text()).toBe("99");
  });
});
