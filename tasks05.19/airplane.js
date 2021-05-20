const Airplane = {
  name: '',
  isFlying: false,
  takeOf() {
    this.isFlying = true;
  },
  land() {
    this.isFlying = false;
  },
};

// let obj = {
//   __proto__: Airplane,
//   isFlying: false,
// };
let p = Object.assign({}, Airplane);
p.takeOf();
console.log(p);
