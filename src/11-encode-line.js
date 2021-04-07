/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const letters = [];
  let finalResult = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    letters[i] = [];
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count !== 1) {
        letters[i].push(count);
      }
      letters[i].push(str[i]);

      count = 1;
    }
  }

  letters.forEach((letter) => {
    if (letter.length > 0) { finalResult += letter.join(''); }
  });

  return finalResult;
}

module.exports = encodeLine;
