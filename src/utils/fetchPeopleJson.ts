import { PersonItem } from './fetchPeople';

export default function() {
  return new Promise((resolve, reject) => {
    if (true) {
    fetch('/team.json')
      .then(response => response.json())
      .then(json => {
        resolve(json);
      });
    } else {
      return 12; 
    }
  });
}
