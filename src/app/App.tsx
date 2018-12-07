import * as React from "react";
import fetchPeople, { PersonItem } from "../utils/fetchPeople";
import Person from "../components/Person";
import QuizForm from "../components/QuizForm";
import Message from "../components/Message";

interface State {
  loadingPeople: boolean;
  people: Array<PersonItem>;
  currentPerson?: PersonItem | null;
  choices?: Array<PersonItem> | null;
  choiceIsCorrect?: boolean;
  choiceMade: boolean;
}

export default class App extends React.Component<any, State> {
  state = {
    loadingPeople: true,
    people: new Array(),
    currentPerson: null,
    choiceMade: false
  } as State;

  componentDidMount() {
    fetchPeople().then((people: Array<PersonItem>) => {
      this.chooseRandomPerson(people);

      this.setState({
        loadingPeople: false,
        people
      });
    });
  }

  chooseRandomPerson = (people: Array<PersonItem>) => {
    const peopleCopy: Array<PersonItem> = people.slice(0);
    const choices: Array<PersonItem> = new Array();

    for (let i = 4; i > 0; --i) {
      let index = Math.round(Math.random() * peopleCopy.length);
      index = index === peopleCopy.length ? index - 1 : index;
      choices.push(peopleCopy.splice(index, 1)[0]);
    }

    const currentPerson = choices[Math.round(Math.random() * choices.length)];
    this.setState({
      currentPerson,
      choices,
      choiceMade: false
    });
  };

  renderRandomPerson = () => {
    if (this.state.currentPerson) {
      return (
        <Person
          person={this.state.currentPerson}
          showName={this.state.choiceMade}
        />
      );
    } else {
      throw new Error(
        "Trying to render a random person, but no person is available."
      );
    }
  };

  handleSubmit = (name: string, e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState({
      choiceIsCorrect: name === this.state.currentPerson.name,
      choiceMade: true
    });
  };

  handleReset = () => {
    this.chooseRandomPerson(this.state.people);
  };

  render() {
    let message: React.ReactNode;
    if (this.state.choiceMade) {
      message = (
        <Message type={this.state.choiceIsCorrect ? "success" : "error"}>
          {this.state.choiceIsCorrect
            ? "That is correct!"
            : "Aw... Better next time."}
          <a onClick={this.handleReset}>Try someone else</a>
        </Message>
      );
    }

    return (
      <div className="whoswho">
        {this.state.loadingPeople ? (
          <div className="whoswho__loading">
            Loading people from the website...
          </div>
        ) : (
          <>
            {this.state.choiceMade && message}
            {this.renderRandomPerson()}
            <QuizForm
              choices={this.state.choices}
              onSubmit={this.handleSubmit}
            />
          </>
        )}
      </div>
    );
  }
}
