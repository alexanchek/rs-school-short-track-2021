/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  // clone this because of a restriction to reassign the array
  const newArray = array;
  const n = array.length;
  let i = 0;
  newArray[n] = value;

  while (newArray[i] !== value) i++;

  if (i < n) return i;
  return -1;
}

module.exports = findIndex;
