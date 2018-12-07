import * as React from "react";
import { render } from "enzyme";
import QuizForm from "./../QuizForm";
import { PersonItem } from "../../../utils/fetchPeople";

describe("<QuizForm />", () => {
  const choices = [
    {
      name: "Wouter Admiraal",
      pic: "/path/to/image.jpg",
      role: "Webdev"
    },
    {
      name: "Jane Doe",
      pic: "/path/to/image.jpg",
      role: "Webdev"
    },
    {
      name: "John Doe",
      pic: "/path/to/image.jpg",
      role: "Webdev"
    },
    {
      name: "Jimmy Doe",
      pic: "/path/to/image.jpg",
      role: "Webdev"
    }
  ];

  it("renders correctly", () => {
    expect(
      render(<QuizForm choices={choices} onSubmit={jest.fn()} />)
    ).toMatchSnapshot();
  });
});
