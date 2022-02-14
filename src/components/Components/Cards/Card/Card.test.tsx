/**
 * ?Card Test
 */

import { render } from "@testing-library/react";

import Card from "./Card";
const props = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
};
describe("<Card />", () => {
  it("should render", () => {
    render(<Card {...props} />);
  });
});
