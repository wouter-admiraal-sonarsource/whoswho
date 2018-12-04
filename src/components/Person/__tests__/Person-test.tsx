import * as React from 'react';
import { render } from 'enzyme';
import Person from '../Person';

describe("<Person />", () => {

  it("should not show the name by default", () => {
    const component = render(<Person name="Wouter Admiraal" img="/path/to/image.jpg" />);
    expect(component.find('.person__name')).toHaveLength(0);
  });

  it("should show the name if requested", () => {
    const component = render(<Person name="Wouter Admiraal" img="/path/to/image.jpg" showName={true} />);
    expect(component.find('.person__name')).toHaveLength(1);
  });

});
