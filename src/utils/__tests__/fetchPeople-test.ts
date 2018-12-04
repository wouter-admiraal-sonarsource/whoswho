import fetchPeople from '../fetchPeople';
import * as fetchMock from 'fetch-mock';

describe("The fetchPeople utility", () => {

  beforeEach(() => {
    fetchMock.get('*', `<html>
    <body>
      <div id="teamContainer">
        <ul class="team">
          <li class="team-member" style='background: url("/path/to/file.jpg");'>
            <div class="team-member-inner">
              <div class="team-member-meta">
                <h4>Jane Doe</h4>
                <h5>Webdev</h5>
                <p>Joined in December 18</p>
              </div>
              <div class="team-member-social">
                <a href="http://twitter.com/toto" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </li>
          <li class="team-member" style="background-image: url('/path/to/file2.jpg');">
            <div class="team-member-inner">
              <div class="team-member-meta">
                <h4>John Doe</h4>
                <h5>Finance</h5>
                <p>Joined in December 18</p>
              </div>
              <div class="team-member-social">
                <a href="http://twitter.com/tata" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </li>
          <li class="team-member">
            <div class="team-member-inner">
              <div class="team-member-meta">
                <h4>Timmy Doe</h4>
                <h5>Support</h5>
                <p>Joined in December 18</p>
              </div>
              <div class="team-member-social">
                <a href="http://twitter.com/timmy" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </body>
  </html>`);
  });

  it("should fetch and parse the /company/team page from https://www.sonarsource.com/", () => {
    expect(fetchPeople()).resolves.toEqual([
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
