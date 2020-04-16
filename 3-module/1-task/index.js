/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let str = '';
      for (let elem of data) {
        for (let key in elem) {
            if ( key == "age" && elem[key] <= age) {
                str = (str + (`${elem['name']}, ${elem['balance']}\n`));
            }
        }
    }
    return (str.slice(0, -1));
};
