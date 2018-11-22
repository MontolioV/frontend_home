;'use strict';

//1 Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.

let a = +prompt('Input a', '');
let b = +prompt('Input b', '');
if (a > b) {
    alert(a);
}
else {
    alert(b);
}

//2 Найти максимальное из двух чисел. Учтите вариант равенства чисел

let a = +prompt('Input a', '');
let b = +prompt('Input b', '');
if (a >= b) {
    alert(a);
}
else {
    alert(b);
}

//3 В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90...


let flatNumber = +prompt('Введите номер квартиры', '');

if (flatNumber >= 1 && flatNumber <= 20) {
    alert('Первый подьезд');
}
else if (flatNumber >= 21 && flatNumber <= 48) {
    alert('Второй');
}
else if (flatNumber >= 49 && flatNumber <= 90) {
    alert('Третий');
}
else {
    alert('Такой квартиры нет в доме. Идите нафиг!');
}

//4. Пользователь вводит логин и пароль. Если логин и пароль совпадают с указанными ниже ...

let login = prompt('Введите login', '');
let password = prompt('Введите password', '');

if (login === 'ivan' && password === '334455') {
    alert('Welcome');
}
else if (login === 'alex' && password === '777') {
    alert('Welcome');
}
else if (login === 'petr' && password === 'b5678') {
    alert('Welcome');
}
else {
    alert('Login failed');
}

//5. Пользователь вводит год рождения. Программа показывает количество лет и если лет больше или равно 16...


let yearOfBirth = +prompt('Введите свой год рождения', '');
let old = 2018 - yearOfBirth;
if (old >= 16) {
    alert('Добро пожаловать');
}
else {
    alert('Малолеткам вход воспрещён!');
}

//6. Создайте программу, которая выводит надбавку за стаж....


let experience = +prompt('Введите свой стаж работы в годах', '');

if (experience >= 0 && experience < 3) {
    alert('0%');
}
else if (experience >= 3 && experience < 10) {
    alert('10%');
}
else if (experience >= 10 && experience < 20) {
    alert('20%');
}
else if (experience >= 20) {
    alert('25%');
}
else {
    alert('Error');
}

//7. Вывести числа от 4 до 400 на экран.....

for (let i = 1; i <= 400; i++) {
    console.log(i);
}

// 8. Задание (циклы) Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

for (let i = 4; i <= 13; i += 3) {
    console.log(i);
}

// 9. Вывести числа 654 653 652 до нуля.

for (let i = 654; i >= 0; i--) {
    console.log(i);
}

// 10. Вывести все годы с 1983 до 2017

for (let i = 1983; i <= 2017; i++) {
    console.log(i);
}

// 11. Вывести числа -4 -2 0 2 4 6 ...100

for (let i = -4; i <= 100; i += 2) {
    console.log(i);
}

// 12. С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9

for (let i = 1; i <= 9; i++) {
    console.log(i * 7);
}

// 13. Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число;

for (let i = 1000; i <= 2000; i++) {
    console.log('&#' + i + ';');
}

// 14. Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)

let sum = 0;
for (let i = 0; i <= 100; i++) {
    console.log(sum += i);
}

// 16. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее

let arr = [];
let x = 'x';
for (let i = 0; i < 10; i++) {
    arr.push(x);
    x += 'x';
}
console.log(arr);

// 17. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее

let arr = [];
for (let i = 1; i < 10; i++) {
    let str = '';
    for (var j = 0; j < i; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);