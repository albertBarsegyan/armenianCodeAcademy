const productMainContainer = document.querySelector('#productContainer');
const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const pageList = document.querySelector('#pageList');
searchButton.addEventListener('click', (e) => {
  productMainContainer.innerText = '';
  pageList.innerText = '';

  // get data from api
  getDataFromApi(urlText(searchInput), e, 1);
});
// find text from list subject list (there are numbers)
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
  productMainContainer.innerText = '';
  getDataFromApi(urlText(searchInput), e, Number(e.target.value) + 1);
}

function getDataFromApi(inputValue, e, page) {
  let buttonStartPointValue = e.target.innerText;
  e.target.innerText = 'Loading...';
  // get data from api
  return fetch(
    `http://openlibrary.org/search.json?q=${inputValue}&page=${page}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let productList = [];
      e.target.innerText = buttonStartPointValue;
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
        if (index < 21) {
          createProductContainer(product);
        }
      });
      if (productList.length === 0) {
        throw new Error('There isn"t any book with this name ');
      }
      return Math.floor(productList.length);
    })
    .then((res) => {
      pageList.innerText = '';
      createPageButtons(res);
      return true;
    })
    .catch((err) => {
      let errMessage = document.createElement('p');
      errMessage.classList.add('error-message');
      errMessage.innerText = err.message;
      productMainContainer.appendChild(errMessage);
      return false;
    });
}
// make plus based text for url
function urlText(input) {
  let inputVal = input.value.trim().replaceAll(' ', function (value) {
    return '+';
  });
  return inputVal;
}
