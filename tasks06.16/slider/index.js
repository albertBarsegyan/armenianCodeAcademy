const pictures = [
  'https://images.unsplash.com/photo-1623923829254-7bad99ec1e8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1623879904646-eb5cb5963730?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
];

const galleryImage = document.querySelector('#galleryImage');
const rightSelectButton = document.querySelector('#rightSelectButton');
const leftSelectButton = document.querySelector('#leftSelectButton');
const imageSelectors = document.querySelector('#selectorContainer');
let index = 0;
// left button
leftSelectButton.addEventListener('click', function () {
  if (index < 0 || index > pictures.length - 1) {
    index = pictures.length - 1;
  }
  galleryImage.style.opacity = 0;
  setTimeout(() => {
    galleryImage.setAttribute('src', `${pictures[index--]}`);
  }, 600);
  setTimeout(() => {
    galleryImage.style.opacity = 1;
  }, 700);
});

// right button
rightSelectButton.addEventListener('click', function () {
  if (index < 0 || index > pictures.length - 1) {
    index = 0;
  }
  galleryImage.style.opacity = 0;
  setTimeout(() => {
    galleryImage.setAttribute('src', `${pictures[index++]}`);
  }, 600);
  setTimeout(() => {
    galleryImage.style.opacity = 1;
  }, 700);
});

Array.from(imageSelectors.children).forEach((child, i) => {
  child.addEventListener('click', function () {
    console.log(i);
    index = i;
    galleryImage.style.opacity = 0;
    setTimeout(() => {
      galleryImage.setAttribute('src', `${pictures[index]}`);
    }, 600);
    setTimeout(() => {
      galleryImage.style.opacity = 1;
    }, 700);
  });
});

// paragraph setup
const paragraph = document.querySelector('#paragraphText');
function changeParagraphText(paragraphText) {
  let stringEight = /\S{9,}/gi;
  let thinkEmoji = '&#129300';
  let astonished = '&#128562';
  let text = paragraphText.innerText;
  if (stringEight.test(text)) {
    text = text.replaceAll(stringEight, function (item) {
      let mark = `<mark>${item}</mark>`;
      return mark;
    });
    if (/\?/gi.test(text)) {
      text = text.replace(/\?/gi, thinkEmoji);
    }
    if (/\!/gi.test(text)) {
      text = text.replace(/\!/gi, astonished);
    }
    paragraphText.innerHTML = text;
  }
}
changeParagraphText(paragraph);
console.log('&#128527');
