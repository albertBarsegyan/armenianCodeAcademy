/* Complete the reverseString function, it has one parameter s. You must perform the following actions:
. Try to reverse string s using the split,reverse, and join methods.
. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
. Print s on new line. If no exception was thrown, then this should be the reversed string, if an exception
was thrown, this should be the original string. */

function reverseString(s) {
  let reversedString;
  try {
    reverseString = s.split('').reverse().join('');
  } catch (err) {
    reversedString = s;
  }
  return reversedString;
}
