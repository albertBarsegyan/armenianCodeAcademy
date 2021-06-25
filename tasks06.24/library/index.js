const productMainContainer = document.querySelector('#productContainer');
const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const pageList = document.querySelector('#pageList');
let productCount = 0;
searchButton.addEventListener('click', (e) => {
  productMainContainer.innerText = '';
  pageList.innerText = '';
  let inputVal = searchInput.value.trim().replaceAll(' ', function (value) {
    return '+';
  });
  // get data from api

  getDataFromApi(1, inputVal, e);
  console.log(getDataFromApi(1, inputVal, e));

  // getDataFromApi(1, inputVal, e);
});
// find text from list
function getText(textList) {
  let textReg = /\d/;
  textList = textList.filter((text) => !textReg.test(text));
  textList.length = 5;
  return textList;
}
// creating product container
function createProductContainer(object) {
  let productContainer = document.createElement('div');
  productContainer.classList.add('product');
  // information container
  let informationContainer = document.createElement('div');
  informationContainer.classList.add('information');
  let titleP = document.createElement('p');
  titleP.classList.add('title');
  titleP.innerText = object.title;
  let authorP = document.createElement('p');
  authorP.classList.add('author-name');
  authorP.innerText = object.authorName;
  let yearP = document.createElement('p');
  yearP.classList.add('publish-year');
  yearP.innerText = object.firstPublishYear;
  informationContainer.append(titleP, authorP, yearP);
  // subject list
  let subjectContainer = document.createElement('div');
  subjectContainer.classList.add('subjects');
  let createP = document.createElement('p');
  createP.classList.add('subject-list');
  object.text.forEach((text) => (createP.innerHTML += '<br>' + text));
  subjectContainer.appendChild(createP);
  // append to product container
  productContainer.append(informationContainer, subjectContainer);
  productMainContainer.appendChild(productContainer);
}
// creating pagination button
function createPageButtons(count) {
  for (let i = 1; i <= count; i++) {
    let createButton = document.createElement('button');
    createButton.setAttribute('type', 'button');
    createButton.classList.add('page-number');
    createButton.innerText = i;
    createButton.addEventListener('click', pageButtonEvent);
    pageList.appendChild(createButton);
  }
}
function pageButtonEvent(e) {
  productContainer.innerText = '';
  pageList.innerText = '';
  let dataThenButtons = new Promise((res, rej) => {
    if (true) {
      res(getDataFromApi(Number(e.target.innerText), searchInput.value, e));
      console.log('done event ');
      return true;
    }
  });
  dataThenButtons.then((res) => {
    console.log('done then');
    createPageButtons(productCount);
  });
  // getDataFromApi(Number(e.target.innerText), searchInput.value, e);
}

function getDataFromApi(page, inputValue, e) {
  e.target.innerText = 'Loading...';
  // get data from api
  fetch(`http://openlibrary.org/search.json?q=${inputValue}&page=1`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let productList = [];
      e.target.innerText = 'Search';
      // make object for every book
      res.docs.forEach((element) => {
        let bookInfo = {};
        let authorName = element['author_name']
          ? element['author_name']
          : 'Name';
        bookInfo['firstPublishYear'] = element.first_publish_year;
        bookInfo['title'] = element.title;
        bookInfo['authorName'] = authorName;
        bookInfo['text'] = getText(element.text);
        productList.push(bookInfo);
      });

      productList.forEach((product, index) => {
        if (index < 21 && page === 1) {
          createProductContainer(product);
        }
        if (page > 1 && index < page * 21 && index > (page - 1) * 21 + 1) {
          createProductContainer(product);
        }
      });
      productCount = productList.length;

      return res.docs.length;
    })
    .catch((err) => console.log(err));
}
