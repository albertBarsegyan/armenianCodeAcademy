/* 7. Given an array. Determine whether it consists only from uniques or not. */
function checkUnique(array) {
  let unique = new Set(array);
  let check = true;
  if (unique.size === array.length) {
    check = true;
  } else {
    check = false;
  }
  return check;
}
