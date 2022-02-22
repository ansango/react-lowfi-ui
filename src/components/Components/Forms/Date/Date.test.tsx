/**
 * ?Date Test
 */

import { render, screen } from "@testing-library/react";
import { Form } from "..";
import Date, { DateProps } from "./Date";

const mockSubmit = jest.fn();

describe("<Date />", () => {
  it("should render", () => {
    const props: DateProps = {
      type: "date",
      name: "date",
      label: "Date",
    };
    render(
      <Form onSubmit={mockSubmit}>
        <Date {...props} />
      </Form>
    );
    expect(screen.getByText("Date")).toBeInTheDocument();
  });
});
