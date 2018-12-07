import * as React from "react";
import { render } from "enzyme";
import Message from "./../Message";

describe("<Message />", () => {
  it("renders correctly", () => {
    expect(
      render(<Message type="success">This is my message.</Message>)
    ).toMatchSnapshot();
  });
});
