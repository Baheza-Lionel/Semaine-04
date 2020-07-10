/* C'est ici qu'il faut rédiger ton code pour utiliser l'API */
const getrandomQuotes = () => {
  let randomNumber = Math.floor(Math.random() * Math.floor(1643));
  fetch('https://type.fit/api/quotes')
    .then(response => {
      return response.json();
    })
    .then(response => {
      let data = response[randomNumber];
      console.log(data);
      document.getElementById('quote').textContent = "\"" + data.text + "\"";
      if (data.author === null || data.author === undefined) {
        document.getElementById('author').textContent = 'unkown author';
      } else {
        document.getElementById('author').textContent = data.author;
      }
    });
};
/* getrandomQuotes();
 */

document.getElementById('alert').addEventListener('click', () => {
  getrandomQuotes();
});
