/**
 * ?Alert Test
 */

import { mount } from "enzyme";

import Alert from "./Alert";

describe("<Alert />", () => {
  it("should render", () => {
    const wrapper = mount(<Alert opened text="Test Content"/>);
    expect(wrapper.find("div").length).toBe(2);
  });
});
