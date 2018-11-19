'use strict';


/*
//Задача 1
let x;
let a = +prompt ('Введите a','');
let b = +prompt ('Введите b','');

if (a > b) {
	alert (x = a + b / 2 * 4);
}
else if (a < b) {
	alert (x = a - b + 2 / b * 4);
}
else {
	alert (x = 400);
}
*/



/*
//Задача 2.1
let x0 = +prompt ('Введите x','');
let y0 = +prompt ('Введите y','');

let x1 = -3.5;
let y1 = 0;

let x2 = 0;
let y2 = 3.5;

let x3 = 3.5;
let y3 = 0;

let a = ((x1-x0)*(y2-y1)-(x2-x1)*(y1-y0));
let b = ((x2-x0)*(y3-y2)-(x3-x2)*(y2-y0));
let c = ((x3-x0)*(y1-y3)-(x1-x3)*(y3-y0));

if ( (a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0) ) {
  alert ('Точка попадает в область');
}
else {
  alert ('Точка НЕ попадает в область');
}
*/



/*
//Задача 2.2
let x0 = +prompt ('Введите x','');
let y0 = +prompt ('Введите y','');

let x1 = 0;
let y1 = 0;

let x2 = -1;
let y2 = 1;

let x3 = 1;
let y3 = 1;

let x4 = -1;
let y4 = -1;

let x5 = 1;
let y5 = -1;

let a = ((x1-x0)*(y2-y1)-(x2-x1)*(y1-y0));
let b = ((x2-x0)*(y3-y2)-(x3-x2)*(y2-y0));
let c = ((x3-x0)*(y1-y3)-(x1-x3)*(y3-y0));

let d = ((x1-x0)*(y4-y1)-(x4-x1)*(y1-y0));
let e = ((x4-x0)*(y5-y4)-(x5-x4)*(y4-y0));
let f = ((x5-x0)*(y1-y5)-(x1-x5)*(y5-y0));

if ( (a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0) ) {
  alert ('Точка попадает в область');
}
else if ( (d >= 0 && e >= 0 && f >= 0) || (d <= 0 && e <= 0 && f <= 0) ) {
  alert ('Точка попадает в область');
}
else {
  alert ('Точка НЕ попадает в область');
}
*/



/*
//Задача 2.3
let x0 = +prompt ('Введите x','');
let y0 = +prompt ('Введите y','');

let x1 = 0;
let y1 = 0;

let x2 = -2;
let y2 = 0;

let x3 = 0;
let y3 = -2;

let a = ((x1-x0)*(y2-y1)-(x2-x1)*(y1-y0));
let b = ((x2-x0)*(y3-y2)-(x3-x2)*(y2-y0));
let c = ((x3-x0)*(y1-y3)-(x1-x3)*(y3-y0));

let r = Math.sqrt(Math.pow(x0-x1,2) + Math.pow(y0-y1,2));

if ( (a >= 0 && b >= 0 && c >= 0) || 
     (a <= 0 && b <= 0 && c <= 0) ||
     (r <= 1) ) {
  alert ('Точка попадает в область');
}
else {
  alert ('Точка НЕ попадает в область');
}
*/



/*
//Задача 3
var day = +prompt('Какой сегодня день недели?', '');
switch (day) {
  case 1:
    alert( 'Понедельник' );
    break;
  case 2:
    alert( 'Вторник' );
    break;
  case 3:
    alert( 'Среда' );
    break;
  case 4:
    alert( 'Четверг' );
    break;
  case 5:
    alert( 'Пятница' );
    break;
  case 6:
    alert( 'Суббота' );
    break;
  case 7:
    alert( 'Воскресенье' );
    break;
  default:
    alert( 'Такого дня недели не существует!' );    // Условие   default: это аналог else
}
*/