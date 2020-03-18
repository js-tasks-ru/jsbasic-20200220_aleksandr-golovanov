/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    str = str.toUpperCase();
  if (str.includes("XXX") || str.includes("1XBET")) {
    return true;
  } else {
    return false;
  }
}
