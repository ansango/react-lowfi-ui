/**
 * ?AlertContent Test
 */

import { mount } from "enzyme";

import AlertContent from "./AlertContent";

describe("<AlertContent />", () => {
  it("should render", () => {
    const wrapper = mount(
      <AlertContent title="Title Test" opened content="Test Content" icon="ArchiveIcon" />
    );
    expect(wrapper.find("div").length).toBe(4);
  });
});
