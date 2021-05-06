/* 4. Create a function printAfter that calls its argument after printing hello world */
function printAfter(string) {
  function printer() {
    console.log('Hello world!');
    // return string;
  }

  printer();
  return string();
}
let k = () => console.log('Mike');
printAfter(k);
