const fetch = require('node-fetch');
// let p = new Promise((resolve, reject) => {
//   if (
//     fetch(
//       'https://images.unsplash.com/photo-1624352320183-b2b522225c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1601&q=80'
//     )
//   ) {
//     resolve(
//       fetch(
//         'https://images.unsplash.com/photo-1624352320183-b2b522225c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1601&q=80'
//       )
//     );
//   } else {
//     reject('error');
//   }
// });

// let imageFromUnsplash = fetch(
//   'https://images.unsplash.com/photo-1624399884064-f4b034c96a95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
// );
// let imgUrl;
// imageFromUnsplash.then((image) => {
//   imgUrl = image.url;
//   console.log(imgUrl);
// });

// const imageContainer = document.querySelector('#imageContainer');
// fetch(
//   'https://images.unsplash.com/photo-1624352320183-b2b522225c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1601&q=80'
// )
//   .then((response) => {
//     console.log(response);
//     crateImage(response.url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function crateImage(src) {
//   const createImage = document.createElement('img');
//   createImage.setAttribute('src', src);
//   createImage.setAttribute('width', 500);
//   imageContainer.appendChild(createImage);
// }

let dataFromApi = fetch('https://jsonplaceholder.typicode.com/posts');
let arr = [];
dataFromApi
  .then((res) => res.json())
  .then((dataJSON) => {
    dataJSON.forEach((item) => {
      arr.push(item.title);
    });
    console.log(arr);
  });
console.log(arr);
