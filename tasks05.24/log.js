/* Create a CustomConsole class with following methods:
log function that takes user arguments and returns them as a string,
history function that takes an optionalrange as an argument,
clearHistory function to remove the history memory. */
// const myConsole = new Console('Regular');
// const fancyConsole = new Console('Fancy');
// myConsole.log([0, 1, 2, 3]); // "Regular: [0,1,2,3]"
// myConsole.log({ a: 1, b: 2 }); // "Fancy: {a:1, b:2}"
// myConsole.log('ok : ', 1, 2, 3);
// myConsole.clearHistory(); // true
// myConsole.history(); //

class myConsole {
  constructor(name) {
    this.name = name;
  }
  log(...input) {
    console.log(`${this.name}: `, ...input);
  }
  history([min, max] = []) {
    min = Math.max(1, min);
    return this.historyList
      .slice(min - 1, Math.max(min, max) || this.historyList.length)
      .join('\n');
  }
}
let p = new myConsole('jake');
p.log([1, 2, 3], 'meto');
p.log(100, { a: 10 });
p.log(100, 1, 2, 3);
