import * as React from 'react';
import './Person.css';

export interface PersonProps { 
  name: string; 
  img: string;
  showName?: boolean;
}

const person = React.memo((props: PersonProps) => {
  return (
    <div className="person">
      <img className="person__pic" src={props.img} />
      {props.showName === true ?
        <span className="person__name">{props.name}</span> :
        null}
    </div>
  );
});

export default person;
