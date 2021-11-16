'use strict'

/**
 * Функция возвращает случайное целое число из заданного диапазона
 * @param {*} min_number 
 * @param {*} max_mumber 
 * @returns {*} случайное целое число
 */
function getInt(min_number, max_mumber) {
    min_number = Math.floor(min_number);
    max_mumber = Math.ceil(max_mumber);
    return Math.floor(Math.random() * (max_mumber - min_number + 1) + min_number);
}

/**
 * Функция сравнивает два числа на то, что они положительные, отрицательные
 * или разных знаков
 * @param {*} firstN 
 * @param {*} secondN 
 * @returns 1 - оба числа положительные или равны 0, 2 - оба отрицательные, 3 - разных знаков
 */
function CompareNumbers(firstN, secondN) {
    if (firstN >= 0 && secondN >= 0) return 1;
    if (firstN < 0 && secondN < 0) return 2;
    if ((firstN < 0 && secondN >= 0) || (firstN >= 0 && secondN < 0)) return 3;
}

let a = getInt(-100, 100);
let b = getInt(-100, 100);
let c = CompareNumbers(a, b)
switch (c) {
    case 1: alert('Числа a и b положительные, разность равна ' + (a - b));
        break;
    case 2: alert('Числа a и b отрицательные, произведение равно ' + (a * b));
        break;
    case 3: alert('Числа a и b разных знаков, сумма равна ' + (a + b));
        break;
};
