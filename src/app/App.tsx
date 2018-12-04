import * as React from 'react';
import Person from '../components/Person';

export default class App extends React.Component<any, any> {

  render() {
    return (
      <div className="whoswho">
        <Person 
          name='Freddy Malet' 
          img='https://sonarsource.cdn.prismic.io/sonarsource/45a6d46a80099fa679679090bd53d5ecd633260d_freddy-mallet.jpg' />
      </div>
    );
  }
}
