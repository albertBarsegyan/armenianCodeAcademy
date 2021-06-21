const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');
const leftImageContent = document.querySelector('#leftImageContent');
const rightImageContent = document.querySelector('#rightImageContent');
const images = [
  'https://images.unsplash.com/photo-1624037576929-c24689f88ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1666&q=80',
  'https://images.unsplash.com/photo-1624111647692-e1721ae09f4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1624022520134-2a496dcdb18b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1624087180826-adb16d4bccc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1624087727464-899613c3811f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1592054839314-d9f332cda0f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1651&q=80',
];
function pictureChanger(picturesCollection) {
  let pictureIndex = 0;
  let picturesCollectionLength = picturesCollection.length;
  function nextPicture() {
    if (pictureIndex === picturesCollectionLength - 1) {
      pictureIndex = -1;
    }
    console.log(pictureIndex);
    console.log(picturesCollection[pictureIndex]);
    return picturesCollection[++pictureIndex];
  }
  function prevPicture() {
    if (pictureIndex <= 0) {
      pictureIndex = picturesCollectionLength;
    }
    console.log(pictureIndex);
    return picturesCollection[--pictureIndex];
  }

  return {
    nextPicture,
    prevPicture,
  };
}

let pictureCounter = pictureChanger(images);
leftButton.addEventListener('click', function (e) {
  setTimeout(() => {
    leftImageContent.style.opacity = 0;
    rightImageContent.style.opacity = 0;
  }, 0);
  setTimeout(() => {
    leftImageContent.setAttribute('src', pictureCounter.prevPicture());
    rightImageContent.setAttribute('src', pictureCounter.prevPicture());
  }, 400);
  setTimeout(() => {
    leftImageContent.style.opacity = 1;
    rightImageContent.style.opacity = 1;
  }, 850);
  //   console.log(leftImageContent);
});

function nextPicture() {
  setTimeout(() => {
    leftImageContent.style.opacity = 0;
    rightImageContent.style.opacity = 0;
  }, 0);
  setTimeout(() => {
    leftImageContent.setAttribute('src', pictureCounter.nextPicture());
    rightImageContent.setAttribute('src', pictureCounter.nextPicture());
  }, 400);
  setTimeout(() => {
    leftImageContent.style.opacity = 1;
    rightImageContent.style.opacity = 1;
  }, 850);
}

rightButton.addEventListener('click', nextPicture);
window.addEventListener('load', function (event) {
  setInterval(() => {
    nextPicture();
  }, 5000);
});
