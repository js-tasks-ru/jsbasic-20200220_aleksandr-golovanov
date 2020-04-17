/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let arr = str.split(',').join(' ').split(' ').sort(function(a, b) { return a - b; }).filter(Number);
    let result = {min: Number(arr[0]),
        max: Number(arr[arr.length-1]),
    }
    return result;
};
