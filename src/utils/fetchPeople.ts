
interface Item {
  name: string;
  role: string;
  pic?: string;
};

export default function() {
  return new Promise((resolve, reject) => {
    fetch('https://www.sonarsource.com/company/team/')
      .then(response => response.text())
      .then(html => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const teamList = tempDiv.querySelector('#teamContainer ul.team');
        const items: Item[] = [];

        teamList.querySelectorAll('li').forEach(item => {
          const name = item.querySelector('h4').textContent;
          const role = item.querySelector('h5').textContent;
          const person: Item = {
            name,
            role
          };

          // Extract the profile pic.
          if (item.attributes.getNamedItem('style')) {
            const styles = item.attributes.getNamedItem('style').value;
            const matches = styles.match(/background(-image)?\s*:.*?url\((.+)\)/);
            if (matches.length > 1) {
              person.pic = matches[2].replace(/"/g, '').replace(/'/g, '');
            }
          }

          items.push(person);
        });

        return items;
      })
      .then(list => {
        resolve(list);
      });;
  });
};