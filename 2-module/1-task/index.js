/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

let salaries = {
    Jonh: 1000,
    Ann: 1600,
    Pete: 1300,
    month: 'December',
    currently: 'USD',
    isPayed: false,
}

function sumSalary(salaries) {
    let sum = 0;
    for (let key in salaries) {
      if (typeof salaries[key] == 'number') {
        sum += salaries[key];
      }
    }
    return sum;
  }
