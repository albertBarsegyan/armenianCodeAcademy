/* 1. Create a function that implements partial sum */
//
function sum(numb) {
  function s(b = 1) {
    return numb + b;
  }
  return s;
}

let addOne = sum(1);
let addTen = sum(10);
