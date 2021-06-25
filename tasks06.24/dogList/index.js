const itemList = document.querySelector('#itemList');
const listContainer = document.querySelector('#listContainer');
const imageContainer = document.querySelector('#imageContainer');
const fetchDataList = fetch('https://dog.ceo/api/breeds/list/all');
fetchDataList
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    let resObject = res.message;
    let dogList = [];
    for (const item in resObject) {
      if (Object.hasOwnProperty.call(resObject, item)) {
        dogList.push(item);
      }
    }
    return dogList;
  })
  .then((res) => {
    listContainer.style.display = 'flex';
    listContainer.style.opacity = 1;
    res.forEach((item) => {
      let createOption = document.createElement('option');
      let strUpperCase = item[0].toUpperCase() + item.substring(1, item.length);
      createOption.classList.add('label-data');
      createOption.innerText = strUpperCase;
      createOption.value = item;
      createOption.addEventListener('click', optionClickEvent);
      itemList.appendChild(createOption);
    });
  });

function optionClickEvent(e) {
  const getImage = fetch(`https://dog.ceo/api/breed/${e.target.value}/images`);
  getImage
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.message[0];
    })
    .then((image) => {
      imageContainer.setAttribute('alt', e.target.value);
      imageContainer.setAttribute('src', image);
    });
}
