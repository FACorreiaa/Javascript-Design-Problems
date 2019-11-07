// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /* return str
    .split("")
    .reverse()
    .join(""); */

  /* const arr = str.split("");
  arr.reverse();
  return arr.join(""); */

  /**
   * FOR LOOP SOLUTION */
  /* let reversed = "";
  for (let c of str) {
    reversed = c + reversed;
  }

  return reversed; */

  /**
   * ARRAY HELPER
   */
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
