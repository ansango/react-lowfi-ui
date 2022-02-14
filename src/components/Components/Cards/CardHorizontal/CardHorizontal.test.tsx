/**
 * ?CardHorizontal Test
 */

import { render } from "@testing-library/react";

import CardHorizontal, { CardHorizontalProps } from "./CardHorizontal";

const props: CardHorizontalProps = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  imgUrl: "/assets/image-1.jpg",
  action: () => alert("Hey"),
};

describe("<CardHorizontal />", () => {
  it("should render", () => {
    render(<CardHorizontal {...props} />);
  });
});
