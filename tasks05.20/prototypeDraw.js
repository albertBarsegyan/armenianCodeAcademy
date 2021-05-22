// 1
const arr = [1, 2, 3];
//  Array __proto__ -> object __proto__ -> null
// console.log(arr.__proto__.__proto__.__proto__);
// 2
const human = {
  isHuman: true,
};
//  object __proto__ -> object  -> null
// console.log(human.__proto__.__proto__);
// 3
const str = '';
//  String __proto__ -> object  __proto__ -> null
// console.log(str.__proto__.__proto__.__proto__);
// 4
const user = {
  name: 'Vrezh',
  __proto__: human,
};

console.log(user.__proto__.__proto__);

// 5
const car = {
  hasEngine: true,
};

// 6
const mercedes = {
  name: 'mercedes',
  __proto__: car,
};
// 7
const bmw = Object.create(null);
// 8
const emptyObj = {};
// 9
function fn() {
  //   console.log('hello, world!');
}
// 10
const emptyWithoutProto = Object.create(null);
// 11
const num = 12;
// 12
const isAuth = false;
