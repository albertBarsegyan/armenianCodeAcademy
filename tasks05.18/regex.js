/* const REGEXP = /abc/;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
str.match(REGEXP);
'<a href="/">', '<input type="radio" checked>', "<b>"; */
let str = '<> <a href="/"> <input type="radio" checked> <b>';

const REGEXP = /<(\w.*?)>/g; //
console.log(str.match(REGEXP));
