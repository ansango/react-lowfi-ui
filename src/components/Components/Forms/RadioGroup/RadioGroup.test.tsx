/**
 * ?Radio Test
 */
import { Form } from "..";
import { render, screen } from "@testing-library/react";

import Radio, { RadioPropsGroup } from "./RadioGroup";
const mockSubmit = jest.fn();
describe("<Radio />", () => {
  it("should render", () => {
    const props: RadioPropsGroup = {
      name: "radio",
      label: "Radio",
      data: [
        {
          lab: "Option 1",
          value: "option1",
        },
      ],
    };

    render(
      <Form onSubmit={mockSubmit}>
        <Radio {...props} />
      </Form>
    );
    expect(screen.getByText("Radio")).toBeInTheDocument();
  });
});
