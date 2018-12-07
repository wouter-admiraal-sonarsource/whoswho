import * as React from "react";
import { render } from "enzyme";
import Person from "../Person";
import { PersonItem } from "../../../utils/fetchPeople";

describe("<Person />", () => {
  const testPerson = {
    name: "Wouter Admiraal",
    pic: "/path/to/image.jpg",
    role: "Webdev"
  } as PersonItem;

  it("should not show the name by default", () => {
    const component = render(<Person person={testPerson} />);
    expect(component.find(".person__name")).toHaveLength(0);
  });

  it("should show the name if requested", () => {
    const component = render(<Person person={testPerson} showName={true} />);
    expect(component.find(".person__name")).toHaveLength(1);
  });
});
