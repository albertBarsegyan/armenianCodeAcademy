let object = {
  name: 'mike',
  age: 25,
};
function print(a, b) {
  return this.name + ' ' + a + ' ' + b;
}
let k = print.call(null, 10, 15);
console.log(k);
