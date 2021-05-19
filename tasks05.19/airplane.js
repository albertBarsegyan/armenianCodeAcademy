const Airplane = {
  name: 'Su-75',
  isFlying: false,
  takeOf() {
    this.isFlying = true;
  },
  land() {
    this.isFlying = false;
  },
};

console.log(Airplane);
