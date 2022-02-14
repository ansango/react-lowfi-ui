/**
 * ?CardAction Test
 */

import { render } from "@testing-library/react";

import CardAction, { CardActionProps } from "./CardAction";

const props: CardActionProps = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  action: {
    label: "Learn more",
    icon: "ArrowRightIcon",
    onClick: () => alert("Hey"),
  },
};

describe("<CardAction />", () => {
  it("should render", () => {
    render(<CardAction {...props} />);
  });
});
