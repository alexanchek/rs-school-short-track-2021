/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonLetters = 0;
  const sm1 = s1.split('');
  const sm2 = s2.split('');
  for (let i = 0; i < sm1.length; i++) {
    const tempI = sm2.indexOf(sm1[i]);
    if (tempI !== -1) {
      commonLetters++;
      sm2.splice(tempI, 1);
      sm1.splice(i, 1);
      i--;
    }
  }

  return commonLetters;
}

module.exports = getCommonCharacterCount;
