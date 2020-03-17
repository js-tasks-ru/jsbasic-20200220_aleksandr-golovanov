/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let sum = 1;
        while ( n > 0) {
            sum = sum * n--;
        }
    return sum;
};
