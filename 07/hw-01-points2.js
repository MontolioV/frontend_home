;'use strict';

// 2. Попадание точки в область

// 2.2

let x = +prompt('Input x', '');
let y = +prompt('Input y', '');

let belongsToTriangle1 = (((-2 * x + 2 * y) >= 0) && ((2 * x + 2 * y) >= 0) && y <= 1 && y >= 0);
let belongsToTriangle2 = (((-2 * x + 2 * y) <= 0) && ((2 * x + 2 * y) <= 0) && y >= -1 && y <= 0);

if (belongsToTriangle1 || belongsToTriangle2) {
    alert('Точка попадает в область!');
} else {
    alert('Точка НЕ попадает в область');
}
