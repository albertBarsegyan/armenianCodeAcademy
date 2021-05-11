const users = [
  {
    username: 'Yuri Gagarin',
    lang: 'ru',
  },
  {
    username: 'Nil Armstrong',
    lang: 'ENG',
  },
];

function getUserNames(array) {
  let userNames = [];
  array.map((item) => userNames.push(item.username));
  return userNames;
}

console.log(getUserNames(users));
