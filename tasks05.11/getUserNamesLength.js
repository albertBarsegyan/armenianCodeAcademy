/* - Write a function which returns array of lengths of user names*/

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
function getUsernameLengths(array) {
  let userNameLengths = [];
  array.map((item) => userNameLengths.push(item.username.length));
  return userNameLengths;
}

console.log(getUsernameLengths(users));
