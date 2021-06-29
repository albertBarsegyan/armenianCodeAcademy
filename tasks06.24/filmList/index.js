const productMainContainer = document.querySelector('#productMainContainer');
// fetch data from api
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
restyleDataFromApi('https://ghibliapi.herokuapp.com/films/');
// make product container
function createProductContainer(object) {
  let productContainer = document.createElement('div');
  productContainer.classList.add('product');
  productContainer.innerHTML = `<div class="product-head">
                 <h2>${object.title}</h2>
                     </div>
          <div class="product-desc">
        <p>${object.description}</p>
    </div>
     <div class="product-info">
   <p>Director: <span>${object.director}</span></p>
   <p>Producer: <span>${object.producer}</span></p>
   <p>Release: <span>${object.releaseDate}</span></p>
    </div>`;
  productMainContainer.appendChild(productContainer);
  // information container
}

function clojure() {
  let val = 0;
  return function (addValue) {
    return (val += addValueW);
  };
}
