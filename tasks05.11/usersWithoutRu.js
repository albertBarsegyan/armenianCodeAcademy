/* - Write a function which remove users with language equals to 'ru'. */

const users = [
  {
    username: 'Yuri Gagarin',
    lang: 'Ru',
  },
  {
    username: 'Nil Armstrong',
    lang: 'ENG',
  },
  {
    username: 'Jake Johnson',
    lang: 'ru',
  },
];

function filterUsers(arr, language) {
  let lang = language.toLowerCase();
  let usersWithoutRu = arr.filter((item) => item.lang.toLowerCase() !== lang);
  return usersWithoutRu;
}

console.log(filterUsers(users, 'RU')); // [{ username: "Nil Armstrong, lang: "ENG" }]
