;'use strict';

// 1. Система уравнений


let x = true;
let a = +prompt('Input a', '');
let b = +prompt('Input b', '');

switch (x) {
    case a > b:
        let x1 = a + ((b / 2) * 4);
        alert(x1);
        break;
    case a < b:
        let x2 = a - b + ((2 / b) * 4);
        alert(x2);
        break;
    case a === b:
        alert(400);
        break;
}
