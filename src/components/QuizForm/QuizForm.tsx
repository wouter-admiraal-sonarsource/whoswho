import * as React from "react";
import { PersonItem } from "../../utils/fetchPeople";
import "./QuizForm.scss";

interface QuizFormProps {
  choices: Array<PersonItem>;
  onSubmit: (name: string, e: React.SyntheticEvent) => void;
}

export default class QuizForm extends React.PureComponent<QuizFormProps> {
  render() {
    return (
      <>
        <form className="quiz-form">
          {this.props.choices.map(person => {
            return (
              <button
                key={person.name}
                onClick={this.props.onSubmit.bind(this, person.name)}
              >
                {person.name}
              </button>
            );
          })}
        </form>
      </>
    );
  }
}
