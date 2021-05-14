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

console.log(sumTo(100));

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
