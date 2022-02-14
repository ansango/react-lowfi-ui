/**
 * ?CardImage Test
 */

import { render } from "@testing-library/react";

import CardImage, { CardImageProps } from "./CardImage";

const props: CardImageProps = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  imgUrl: "/assets/image-1.jpg",
  action: {
    label: "Learn more",
    icon: "ArrowRightIcon",
    onClick: () => alert("Hey"),
  },
};

describe("<CardImage />", () => {
  it("should render", () => {
    render(<CardImage {...props} />);
  });
});
