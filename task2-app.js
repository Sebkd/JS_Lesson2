'use strict'
let a = 2;
let x = 1 + (a *= 2);
/*
1) a: undefined, x: undefined
2) a = 2, x: undefined
3) a = a * a = 2 * 2 = 4, x: undefined
4) a = 4, x = 1 + a = 1 + 4 = 5
*/