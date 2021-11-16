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

/**
 * Функция возвращает результат операции двух чисел
 * @param {*} arg1 
 * @param {*} arg2 
 * @param {'* - / +'} operation 
 * @returns 
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '/':
            return divNumbers(arg1, arg2);
        case '*':
            return mulNumbers(arg1, arg2);
        case '-':
            return diffNumbers(arg1, arg2);
        case '+':
            return addNumbers(arg1, arg2);
        default:
            alert('Вы ввели недопустимую операцию');
            return NaN;
    };
};


let firstMain = parseInt(prompt('Введите первое число'));
let secondMain = parseInt(prompt('Введите второе число'));
let operation = prompt('Введите операцию / * - +');
alert('результат операции равен ' + mathOperation(firstMain, secondMain, operation));

