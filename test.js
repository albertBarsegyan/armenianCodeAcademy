function centuryFromYear(year) {
  let cent = 0;
  if (1 <= year >= 2005) throw new Error('Must be between 1 -- 2005');
  if (year % 100 === 0) {
    cent = Math.ceil(year / 100);
  } else {
    cent = cent = Math.ceil(year / 100) + 1;
  }
  return cent;
}

function checkPalindrome(inputString) {
  let palindrome = [];
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === inputString[inputString.length - i - 1]) {
      palindrome.push(true);
    } else {
      palindrome.push(false);
    }
  }
  return !palindrome.includes(false);
}
// console.log(checkPalindrome('aaabaaaa'));

// function adjacentElementsProduct(inputArray) {
//   let product = 1;
//   if (2 <= inputArray.length >= 10) {
//     throw new TypeError('Must be from 2 to 10 items');
//   }
//   for (let i = 0; i < inputArray.length; i++) {
//     const element = inputArray[i] * inputArray[i + 1] ?? 1;
//     if (element > product) {
//       product = element;
//     }
//   }
//   return product;
// }

// console.log(adjacentElementsProduct([1, 0, 1, 0, 1000, 1, 5, 8, 10]));

// function adjacentElementsProduct(inputArray) {
//   let product = -Infinity;
//   if (2 <= inputArray.length >= 10) {
//     product = 0;
//   }
//   for (let i = 0; i < inputArray.length; i++) {
//     const element = inputArray[i] * (inputArray[i + 1] ? inputArray[i + 1] : 1);
//     // console.log(element);
//     if (element >= product) {
//       product = element;
//     }
//   }

//   return product >= 1000 || product <= -1000 ? 0 : product;
// }
//

// function sortArray(array, callback) {
//   let max = array[0];
//   let sortedArray = [];
//     array.forEach((item, index, array) => {

//   })
//   return sortedArray;
// }
// console.log(sort([1, 0, 1, 0, 1000, 1, 5, 8, 10]));

function insertionSort(inputArr, callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not function');
  }

  for (let i = 1; i < inputArr.length; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;

    while (j > -1 && current < inputArr[j]) {
      inputArr[i] = inputArr[i - 1];
      j--;
    }
    inputArr[j + 1] = current;
  }
  return inputArr;
}

// function sortArrayFunc(array) {
//   let a = array;
//   for (let i = 1; i < a.length; i++) {
//     const element = a[i - 1];
//     while (compare(element, a[i])) {
//       a[i - 1] = a[i];
//       break;
//     }
//   }
//   return [...a];
// }
// console.log(sortArrayFunc([1, 0, 1, 0, 1000, 1, 5, 8, 10]));

// console.log(sortByLoop([1, 0, 1, 0, 1000, 1, 5, 8, 10]));

// function sortArr(array) {
//   let min = Infinity;
//   let arr = array;
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element < min) {
//       min = element;
//     }
//   }
//   return arr;
// }
// console.log(sortArr([1, 0, 1, , -10, 1000, 1, 5, 8, 10]));

// function sortArray(array, callback) {
//   if (typeof callback !== 'function') {
//     throw new TypeError(callback + ' is not function');
//   }
// }

function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
// console.log(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]));

function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

// console.log(sumTo(100));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function parseList(data) {
  let dataEntries;

  if (Array.isArray(data)) {
    dataEntries = data;
  } else if (typeof data === 'object') {
    dataEntries = Object.entries(data);
  }
  for (const item of dataEntries) {
    if (item.includes('value')) {
      arr.push(item[1]);
    } else {
      if (item[0] === 'next' && !item[1]) {
        return arr;
      }
      if (item[0] === 'next') {
        parseList(item[1]);
      }
    }
  }
}

// function parser(data) {
//   let arr = [];

//   parseList(data, arr);
//   return arr;
// }
// console.log(parser(list));

function shapeArea(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(`*`);
    for (let j = i; j < n; j++) {}
    res.push(`*`);
  }
  return res;
}
// console.log(shapeArea(5));
function makeArrayConsecutive2(statues) {
  let min = Math.min(...statues);
  let max = Math.max(...statues);
  let res = [];
  for (let i = min; i <= max; i++) {
    res.push(i);
  }
  return res.length - statues.length;
}

function almostIncreasingSequence(sequence) {
  let bool = true;
  let unique = new Set(sequence);
  let sorted = [...sequence].sort((a, b) => a - b);
  let count = 0;

  sorted.forEach((item, index) => {
    if (item !== sequence[index]) {
      count++;
    }
  });
  if (count > 2) {
    bool = false;
  }

  if (sorted[sequence.length - 1] === sequence[0]) {
    bool = true;
  }
  return bool;
}
// console.log(almostIncreasingSequence([1, 3, 2, 1]));

function sockMerchant(n, arr) {
  let res = arr.reduce((acc, item, index, array) => {
    if (acc.hasOwnProperty(item)) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }

    return acc;
  }, {});
  let pairCount = 0;
  for (const key in res) {
    if (Object.hasOwnProperty.call(res, key)) {
      if (res[key] >= 2) {
        pairCount += Math.floor(res[key] / 2);
      }
    }
  }
  return pairCount;
}
// console.log(sockMerchant(5, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));

// function almostIncreasingSequence(sequence) {
//   let sort = [...sequence].sort((a, b) => a - b);
//   let count = 0;
//   sequence.forEach((item, index) => {
//     if (item !== sort[index]) {
//       count++;
//     }
//   });
//   let bool = false;
//   if (count > 2) {
//     bool = true;
//   }
//   return [sort, count];
// }
// console.log(almostIncreasingSequence([1, 2, 1, 2]));

// function almostIncreasingSequence(sequence) {
//   let invalidItemsCount = 0;

//   for (let i = 1; i < sequence.length; i++) {
//     if (sequence[i] <= sequence[i - 1]) {
//       invalidItemsCount++;
//       if (invalidItemsCount > 1) return false;
//       if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
//         return false;
//     }
//   }

//   return true;
// }
let building = [
  [0, 1, 2, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
];

function matrixElementsSum(matrix) {
  let normHouse = [];
  matrix.forEach((item, index, arr) => {
    item.forEach((mini, miniIndex, miniArr) => {
      if (mini === 0) {
        try {
          arr[index + 1][miniIndex];
        } catch (error) {
          return;
        }
        arr[index + 1][miniIndex] = 0;
      }
    });
    normHouse = [...arr];
  });
  let res = normHouse.reduce((acc, item, index) => {
    acc += item.reduce((a, b) => a + b);
    return acc;
  }, 0);
  return res;
}
// console.log(matrixElementsSum(building));

function allLongestStrings(inputArray) {
  let longest = 0;
  inputArray.forEach((item, index) => {
    if (item.length > longest) {
      longest = item.length;
    }
  });
  let res = inputArray.reduce((acc, item) => {
    if (item.length === longest) {
      acc.push(item);
    }
    return acc;
  }, []);
  return res;
}
// console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));

function commonCharacterCount(s1, s2) {
  let s1Chars = s1.split('').reduce((acc, item) => {
    if (acc.hasOwnProperty(item)) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
  let s2Chars = s2.split('').reduce((acc, item) => {
    if (acc.hasOwnProperty(item)) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
  let commons = [];
  for (const key in s1Chars) {
    if (Object.hasOwnProperty.call(s1Chars, key)) {
      if (s2Chars.hasOwnProperty(key)) {
        if (s2Chars[key] < s1Chars[key]) {
          commons.push(s2Chars[key]);
        } else {
          commons.push(s1Chars[key]);
        }
      }
    }
  }
  if (commons.length === 0) {
    commons = 0;
  } else {
    commons = commons.reduce((acc, item) => acc + item);
  }
  return commons;
}
// console.log(commonCharacterCount('aab', 'bba'));

function isLucky(n) {
  if (String(n).length % 2 !== 0) {
    throw new Error(n + ' digits count is not even');
  }
  let numberFirstPart = String(n)
    .substring(0, String(n).length / 2)
    .split('')
    .reduce((acc, item) => acc + Number(item), 0);
  let numberSecondPart = String(n)
    .substring(String(n).length / 2)
    .split('')
    .reduce((acc, item) => acc + Number(item), 0);

  let bool = false;
  if (numberFirstPart === numberSecondPart) {
    bool = true;
  }
  return bool;
}
// console.log(isLucky(456781));

// a = [-1, 150, 190, 170, -1, -1, 160, 180]
function sortByHeight(a) {
  let sorted = new Array(a.length);
  let withoutTree = a.filter((item) => item !== -1).sort((a, b) => a - b);
  let count = 0;
  a.forEach((item, index) => {
    if (item === -1) {
      sorted[index] = -1;
    } else {
      sorted[index] = withoutTree[count++];
    }
  });

  return sorted;
}
function reverseInParentheses(inputString) {
  let res;
  if (/(\(\S+\))/g.test(inputString)) {
    res = /(\(\S+\))/g.exec(inputString);
  }
  return res[0];
}

// console.log(reverseInParentheses('foo(bar(baz))blim'));

function cloning() {
  return this.name;
}

let obj = {
  name: 'mike',
  age: 25,
};

let p = Object.create(obj, {
  city: {
    value: 'yerevan',
    writable: false,
  },
});
// Object.setPrototypeOf(obj, Boolean.prototype);
// console.log(k);
// p.city = 'Yegipt';
// p.age = 45;

let objo = {};
function ret(name) {
  this.name = name;
  return this.name;
}
let pt = ret.bind(objo);
let y = new pt('Fuck');

// console.log(pt('mike'));
// console.log(objo);
// console.log(y.name);

let props = { age: 25, name: 'John' };
let px = Object.getOwnPropertyDescriptors(props);
// console.log(px);
Object.defineProperties(props, {
  val: {
    get() {
      let letters = this.name.split('');
      return letters[0];
    },
  },
});

// console.log(reverseInParentheses('foo(bar)'));

//For a = [50, 60, 60, 45, 70], the output should be
//alternatingSums(a) = [180, 105].

function alternatingSums(a) {
  let firstTeam = [a[0]];
  let secondTeam = [];
  for (let index = 1; index < a.length; index++) {
    if (index % 2 === 0) {
      firstTeam.push(a[index]);
    } else {
      secondTeam.push(a[index]);
    }
  }
  firstTeam = firstTeam.reduce((acc, item) => acc + item, 0);
  secondTeam = secondTeam.reduce((acc, item) => acc + item, 0);
  return [firstTeam, secondTeam];
}
console.log(alternatingSums([50, 60, 60, 45, 70]));

function reversePar(string) {
  if (string.match(/\([A-z]*\)/)) {
    return reversePar(
      string.replace(
        /\([A-z]*\)/,
        Array.from(string.replace(string.match(/\(|\)/)[0], ''))
          .reverse()
          .join('')
      )
    );
  } else {
    return string;
  }
}
// console.log(reversePar('foo(bar(baz))'));
// making hard binding
