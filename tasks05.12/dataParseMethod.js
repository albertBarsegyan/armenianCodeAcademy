// spec data parse type

function parseData(defaultData) {
  let data = Object.entries(defaultData);
  let parsed = data.reduce((acc, item, index, array) => {
    acc['name'] = array[0][1];
    acc['age'] = array[1][1];
    acc['emails'] = array.filter((item) => {
      if (/^email/.test(item[0])) {
        return true;
      }
    });
    acc['files'] = array.filter((item) => {
      if (/^file/.test(item[0])) {
        return true;
      }
    });
    return acc;
  }, {});
  return parsed;
}

// console.log(parseData(data));

let data = {
  name: 'mike',
  age: 25,
  email1: 'asd@mail.ru',
  email2: 'ert@mail.ru',
  email3: 'qwe@mail.ru',
  email4: 'zxc@mail.ru',
  file1: 'jpg',
  file2: 'png',
  file3: 'svg',
  file4: 'img',
};

function parseDataReducer(defaultData) {
  let data = Object.entries(defaultData);
  let a = [];
  let parsed = data.reduce(
    (acc, item, index, array) => {
      let repeated = item[0].slice(0, item[0].length - 1);
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

console.log(parseDataReducer(data));

let a = 'hello';

// let t = a.slice(0, 3);
// console.log(a, t);
