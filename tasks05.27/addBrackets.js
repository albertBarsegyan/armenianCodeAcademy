/* Add brackets between letters.
Given a string containing only English letters (uppercase and lowercase). Add opening and closing parentheses
according to the following pattern: "example" -> "(e (x (a (m) p) l) e)" (Added opening parentheses to the
middle, closing parentheses after the middle. In case the string length is even there must be 2 characters in the
brackets in the middle. ("card -> (c (ar) d" but not "(c (a () r) d)"). Example`*/

let so = 'pLItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO';

function addBrackets(string) {
  let firstPart, secPart, res;
  if (string.length % 2 === 0) {
    firstPart = string
      .substring(0, string.length / 2)
      .split('')
      .map((letter) => '(' + letter)
      .join('');

    secPart = string
      .substring(string.length / 2)
      .split('')
      .map((letter) => letter + ')')
      .join('');

    res = firstPart.replace('(', '') + secPart.substring(0, secPart.length - 1);
  } else {
    firstPart = string
      .substring(0, Math.ceil(string.length / 2))
      .split('')
      .map((letter) => '(' + letter)
      .join('');

    secPart = string
      .substring(string.length / 2 + 1)
      .split('')
      .map((letter) => ')' + letter)
      .join('');
    res = firstPart.replace('(', '') + secPart;
  }
  return res;
}

console.log(addBrackets(so)); //
// "L(I(t(B(e(o(F(L(c(S(G(B(O(F(Q(x(M(H(o(I)u)D)D)W)c)q)c)V)g)k)c)R)o)A)e)o)c
// )X)O"
