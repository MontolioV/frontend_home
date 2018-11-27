/*
//Задача 1   Готово
let arr = [];
let value ='';
for(let i = 0; i < 10; i++) {
  value += 'x';
  arr.push(value);
}
console.log (arr);
*/

/*
//Задача 2 Не решил
let arr = [];
let value = '';
for(let i = 0; i < 10; i++) {
  value += 1;
  arr.push(value);
}
console.log (arr);
*/

/*
// Задача 3  Готово
let array = [];

function arrayFill (value, amount) {
    let sum = '';
    for ( let i = 0; i <= amount; i++) {
        sum += value;
        array.push(value);
    }
    console.log (array);
}
arrayFill ('x', 5);
*/

/*
// Задача 4 Сомнительно
let array = [1, 2, 3, 4, 5,];
let sum = 0;
let counter = 0;
for ( let element of array) {
    sum += element;
    counter += 1;
    if (sum === 10) {
        console.log (counter);
    }
}
*/

/*
// Задача 5 Готово
let array = [1, 2, 3, 4, 5,];
let converse = [];

for ( let element of array) {
    converse.unshift(element);
}
array = converse;
console.log (array);
*/

/*
//Задача 6  Готово
let array = [[1, 2, 3], [4, 5], [6],];
let sum = 0;

for (let element of array) {
    for (let el of element) {
        sum += el;
    }
}
console.log (sum);
*/

/*
// Задача 7  Готово
let array = [ [[1, 2], [3, 4]], [[5, 6], [7, 8]] ];
let sum = 0;

for (let level_1 of array) {
    for (let level_2 of level_1) {
        for (let level_3 of level_2) {
            sum += level_3;
        }
    }
}
console.log (sum);
*/

/*
// Задача 8
let digit = +prompt ('Введите число', '');

function  isNumberInRange (x) {
    if (x >= 1 && x <= 10) {
        alert('true');
        return true;
    }
    else if (x === 0) {
        alert('Введите число больше 0');
    }
    else if (x > 10) {
        alert('false');
        return false;
    }
}
isNumberInRange (digit);
*/

/*
//  Задача 9 Готово
let array = [1, 3, 12, 5, 17, 0, 3, 18, 50, 8];
let arr_1_10 = [];
let digit = 0;

for (let value of array) {
    digit = value;
    function  isNumberInRange (x) {
    if (x >= 1 && x <= 10) {
        arr_1_10.push(x);
    }
}
isNumberInRange (digit);
}
console.log (arr_1_10);
*/

/*
//  Задача 10  Готово
let digit = +prompt ('Введите число', '');

function  isEven (x) {
    if (x % 2 === 0) {
        alert('true');
        return true;
    }
    else if (x % 2 >= 0) {
        alert('false');
        return false;
    }
}
isEven (digit);
*/

/*
//  Задача 11  Готово
let array = [2, 1, 3, 12, 5, 17, 0, 3, 18, 50, 8];
let arr = [];
let digit = 0;

for (let value of array) {
    if (value === 0) {
        continue;
    }
    digit = value;
    function  isEven (x) {
    if (x % 2 === 0) {
        arr.push(x);
    }
}
isEven (digit);
}
console.log (arr);
*/

/*
//Задача 12 готово
let arr = [];
let digit = +prompt ('Введите число','')

function getDivisors (x) {
    for (let i=0; i<=x; i++) {
        if (x%i===0) {
            arr.push(i);
        }
    }
    alert (arr);
}

getDivisors (digit);
*/


// Задача 13


// Задача 14