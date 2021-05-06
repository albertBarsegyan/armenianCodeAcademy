/* 8. Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
or phrase without a repeating letter. */
function isIsogram(string) {
  let bool = true;
  let unique = new Set(string);
  if (unique.size === string.length) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}
console.log(isIsogram('hell'));
