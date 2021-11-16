'use strict'

/**
 * Функция сложения двух чисел
 * @param {*} firstN 
 * @param {*} secondN 
 * @returns 
 */
function addNumbers(firstN, secondN) {
    return firstN + secondN;
};

/**
 * Функция умножения двух чисел
 * @param {*} firstN 
 * @param {*} secondN 
 * @returns 
 */
function mulNumbers(firstN, secondN) {
    return firstN * secondN;
};

/**
 * Функция разности двух чисел
 * @param {*} firstN 
 * @param {*} secondN 
 * @returns 
 */
function diffNumbers(firstN, secondN) {
    return firstN - secondN;
};

/**
 * Функция деления двух чисел
 * @param {*} firstN 
 * @param {*} secondN 
 * @returns 
 */
function divNumbers(firstN, secondN) {
    return firstN / secondN;
};

let firstMain = parseInt(prompt('Введите первое число'));
let secondMain = parseInt(prompt('Введите второе число'));
let operation = prompt('Введите операцию / * - +')
switch (operation) {
    case '/':
        alert('Деление чисел ' + divNumbers(firstMain, secondMain));
        break;
    case '*':
        alert('Умножение чисел ' + mulNumbers(firstMain, secondMain));
        break;
    case '-':
        alert('Разность чисел ' + diffNumbers(firstMain, secondMain));
        break;
    case '+':
        alert('Сумма чисел ' + addNumbers(firstMain, secondMain));
        break;
    default:
        alert('Вы ввели недопустимую операцию')
};
