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

// see prototypeDiagram.png
