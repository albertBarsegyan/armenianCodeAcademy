const outputPlace = document.querySelector('#jsonData');
fetch(
  'https://images.unsplash.com/photo-1624465737527-4a3d5fe40f06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=636&q=80'
).then((res) => {
  console.log(res.body);
});
const promise = new Promise((res, rej) => {
  if (true) {
    res(1);
  }
});
promise.then((res) => {
  console.log(res);
});
