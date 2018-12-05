import fetchPeopleJson from '../fetchPeopleJson';
import * as fetchMock from 'fetch-mock';

describe("The fetchPeopleJson utility", () => {

  beforeEach(() => {
    fetchMock.get('*', `[
      {
        "name": "Jane Doe",
        "role": "Webdev",
        "pic": "/path/to/file.jpg"
      },
      {
        "name": "John Doe",
        "role": "Finance",
        "pic": "/path/to/file2.jpg"
      },
      {
        "name": "Timmy Doe",
        "role": "Support"
      }
    ]`);
  });

  it("should fetch and parse the /team.json file", () => {
    expect(fetchPeopleJson()).resolves.toEqual([
      {
        name: "Jane Doe",
        role: "Webdev",
        pic: "/path/to/file.jpg"
      },
      {
        name: "John Doe",
        role: "Finance",
        pic: "/path/to/file2.jpg"
      },
      {
        name: "Timmy Doe",
        role: "Support"
      }
    ]);
  });

});
