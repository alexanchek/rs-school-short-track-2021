/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr;
  const pos = [];
  let arrayForSort = [];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== -1) {
      pos.push(i);
      arrayForSort.push(newArr[i]);
    }
  }

  arrayForSort = arrayForSort.sort((a, b) => a - b);

  for (let i = 0; i < pos.length; i++) {
    newArr[pos[i]] = arrayForSort[i];
  }
  return newArr;
}

module.exports = sortByHeight;
