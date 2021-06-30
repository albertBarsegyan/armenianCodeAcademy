const fetch = require('node-fetch');

const apiUrl =
  'https://newsapi.org/v2/everything?q=Apple&from=2021-06-29&sortBy=popularity&apiKey=e447769904c844d3a90ca8d6370542e3';

function getDataFromAPI(url, options) {
  const getData = fetch(url, options);
  return getData
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      const filteredData = res.articles.map((data) => {
        const { source, author, title, content } = data;
        return { source: source['name'], author, title, content };
      });
      return filteredData;
    });
}

async function asyncGetData(url, options) {
  const getData = await fetch(url, options);
  const jsonData = await getData.json();
  const list = jsonData.articles.map((data) => {
    const { source, author, title, content } = data;
    const resObject = { source: source['name'], author, title, content };
    return resObject;
  });
  return list;
}

let object = {
  name: 'Mike',
  age: 25,
  city: 'Georgia',
  country: 'USA',
};
function makeIteratorForObject(obj) {
  obj[Symbol.iterator] = function* () {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
      }
    }
  };
}
