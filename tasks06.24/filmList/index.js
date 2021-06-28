const productMainContainer = document.querySelector('#productMainContainer');
function restyleDataFromApi(url) {
  let productList = [];
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((product) => {
        let productObject = {};

        productObject['title'] = product.title;
        productObject['description'] = product.description;
        productObject['director'] = product.director;
        productObject['producer'] = product.producer;
        productObject['releaseDate'] = product.release_date;
        productList.push(productObject);
      });
      return productList;
    })
    .then((productList) => {
      productList.forEach((product) => {
        createProductContainer(product);
      });
    });
}
// restyleDataFromApi('https://ghibliapi.herokuapp.com/films/');
// make product container
function createProductContainer(object) {
  let productContainer = document.createElement('div');
  productContainer.classList.add('product');
  // information container
  let informationContainer = document.createElement('div');
  informationContainer.classList.add('information');
  let titleP = document.createElement('p');
  titleP.classList.add('title');
  titleP.innerText = `Film title - ${object.title}`;
  // description
  let textArea = document.createElement('span');
  textArea.classList.add('product-description');
  textArea.innerText = object.description;
  // director
  let directorP = document.createElement('p');
  directorP.classList.add('director');
  directorP.innerText = object.director;
  // year
  let yearP = document.createElement('p');
  yearP.classList.add('publish-year');
  yearP.innerText = object.releaseDate;

  let producer = document.createElement('p');
  producer.innerText = object.producer;
  informationContainer.append(titleP, textArea, directorP, producer, yearP);

  // append to product container
  productContainer.append(informationContainer);
  productMainContainer.appendChild(productContainer);
}

function clojure() {
  let val = 0;
  return function (addValue) {
    return (val += addValueW);
  };
}
