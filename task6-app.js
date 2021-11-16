'use strict'

/*
1 рубль
2 рубля
3 рубля
4 рубля
5 рублей
6 рублей
7 рублей
8 рублей
9 рублей
0 рублей
*/

/**
 * Функция выбора правильного падежа слова рубль
 * @param {*} number 
 * @returns 
 */
function rightRUB(number) {
    let remains = number % 10;
    switch (remains) {
        case 1: return ' рубль';
        case 2:
        case 3:
        case 4:
            return ' рубля';
        default:
            return ' рублей';
    };
};

let numberMain = parseInt(prompt('Введите количество денег которые хотите положить на счет (целое число) '));
alert('Ваша сумма в ' + numberMain + rightRUB(numberMain) + ' успешно зачислена.')
