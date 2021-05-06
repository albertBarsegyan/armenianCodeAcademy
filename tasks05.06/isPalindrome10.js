/* 10. Check whether string is palindrome, or not.*/
function isPalindrom(string) {
  let bool = true;
  let reversedString = string.split('').reverse().join('');
  if (string === reversedString) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}
console.log(isPalindrom('leell'));
console.log(isPalindrom('ollo'));
