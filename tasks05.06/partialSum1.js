/* 1. Create a function that implements partial sum */
//
function sum(numb) {
  function summa(b = 1) {
    return numb + b;
  }
  return summa;
}

let addOne = sum(1);
let addTen = sum(10);
