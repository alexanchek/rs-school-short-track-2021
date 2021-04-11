/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  let curPart = '';
  let tempLine = '';
  for (let domain = 0; domain < domains.length; domain++) {
    const parts = domains[domain].split('.');
    for (let i = parts.length - 1; i > -1; i -= 1) {
      tempLine = `.${parts[i]}`;
      curPart += tempLine;
      if (!obj[curPart]) {
        obj[curPart] = 1;
      } else {
        obj[curPart]++;
      }
    }
    tempLine = '';
    curPart = '';
  }
  return obj;
}

module.exports = getDNSStats;
