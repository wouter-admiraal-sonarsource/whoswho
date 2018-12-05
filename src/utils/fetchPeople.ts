export interface PersonItem {
  name: string;
  role: string;
  pic?: string;
};

export default function() {
  return new Promise((resolve, reject) => {
    // Ideally, this would fetch from the live page. But this page uses React as well,
    // so we cannot parse the HTML. Another solution (the cleanest) will be to actually
    // use Prismic.
    fetch('/team-page.html')
      .then(response => response.text())
      .then(html => {
        const tempDiv = document.createElement('html');
        tempDiv.innerHTML = html;
        const teamList = tempDiv.querySelector('ul.team');
        const items: PersonItem[] = [];

        teamList.querySelectorAll('li').forEach(item => {
          const name = item.querySelector('h4').textContent;
          const role = item.querySelector('h5').textContent;
          const person: PersonItem = {
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
      });
  });
};