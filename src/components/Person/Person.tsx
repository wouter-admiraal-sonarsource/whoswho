import * as React from "react";
import { PersonItem } from "../../utils/fetchPeople";
import "./Person.scss";

export interface PersonProps {
  person: PersonItem;
  showName?: boolean;
}

const person = React.memo((props: PersonProps) => {
  return (
    <div className="person">
      <img className="person__pic" src={props.person.pic} />
      {props.showName === true ? (
        <span className="person__name">{props.person.name}</span>
      ) : null}
    </div>
  );
});

export default person;
