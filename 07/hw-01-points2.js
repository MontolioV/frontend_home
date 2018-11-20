;'use strict';

// 2. Попадание точки в область

// 2.2


let x = +prompt('Input x', '');
let y = +prompt('Input y', '');

let k, m, n;
let x1 = -1;
let y1 = 1 || -1;
let x2 = 1 || 0;
let y2 = 1 || 0;
let x3 = 0 || 1;
let y3 = 0 || -1;

k = (x1 - x) * (y2 - y1) - (x2 - x1) * (y1 - y);
m = (x2 - x) * (y3 - y2) - (x3 - x2) * (y2 - y);
n = (x3 - x) * (y1 - y3) - (x1 - x3) * (y3 - y);

if ((k >= 0 && m >= 0 && n >= 0) || (k <= 0 && m <= 0 && n <= 0)) {
    alert('Точка попадает в область!');
} else {
    alert('Точка НЕ попадает в область');
}