let data = {
  name: 'mike',
  age: 25,
  file4: 'img',
  email1: 'asd@mail.ru',
  email2: 'ert@mail.ru',
  email4: 'zxc@mail.ru',
  file1: 'jpg',
  file2: 'png',
  file3: 'svg',
  email3: 'qwe@mail.ru',
  file11: 'vs',
};

function sortObject(object) {
  let keys = Object.keys(object)
    .sort()
    .reduce((acc, item, index) => {
      acc[item] = object[item];
      return acc;
    }, {});
  return keys;
}

function parseDataReducer(defaultData) {
  let data = Object.entries(sortObject(defaultData));
  let a = [];
  let parsed = data.reduce(
    (acc, item, index, array) => {
      let repeated = '';
      if (/([0-9])+$/g.test(item[0])) {
        repeated = item[0].replace(/([0-9])+$/g, '');
      }

      if (repeated !== acc.lastRep) {
        a = [];
      }
      if (
        item[0].includes(repeated) &&
        /[0-9]/.test(item[0][item[0].length - 1])
      ) {
        a.push(item[1]);
        acc[repeated] = [...a];
        acc.lastRep = repeated;
      } else {
        acc[item[0]] = item[1];
      }

      return acc;
    },
    {
      lastRep: '',
    }
  );

  return parsed;
}
// console.log(parseDataReducer(data));

console.log(parseDataReducer(data));
