'use strict';


/*
//Задача 1
let a = +prompt ('Введите a', '');
let b = +prompt ('Введите b', '');
if (a > b) {
  alert ('больше число ' + a);
}
else {
  alert ('больше число ' + b);
}
*/

/*
//Задача 2
let a = +prompt ('Введите a', '');
let b = +prompt ('Введите b', '');
if (a > b) {
  alert ('больше число ' +a);
}
if (b > a) {
  alert ('больше число ' +b);
}
else if (a === b) {
  alert ('числа равны');
}
*/

/*
//Задача 3
let apartment = +prompt ('Введите номер квартиры', '');
if (apartment >= 1 && apartment <= 20) {
  alert ('Подъезд № 1');
}
else if (apartment >= 21 && apartment <= 48) {
  alert ('Подъезд № 2');
}
else if (apartment >= 49 && apartment <= 90) {
  alert ('Подъезд № 3');
}
else {
  alert ('Такой квартиры нет');
}
*/

/*
//Задача 4
let data = [
  {login: 'ivan', password: '334455'},
  {login: 'alex', password: '777'},
  {login: 'petr', password: 'd5678'}
]

let enterLogin = prompt ('Введите логин');
let enterPassword = prompt ('Введите пароль');

for ( let element of data) {
  console.log (element.login, element.password);
  if (enterLogin===element.login && enterPassword===element.password) {
      alert ('Добро пожаловать');
      break;
  }
  else {
    alert ('Ошибка входа');
    break;
  }
}
*/

/*
//Задача 5
let age = 2018 - +prompt ('Введите год рождения');
if (age >= 16) {
  alert ('Вам ' +age +' лет! Добро пожаловать');
}
else {
  alert ('Вам ' +age +' лет! Вход воспрещен');
}
*/

/*
//Задача 6
let experience = +prompt ('Введите стаж работы');
if (experience === 0) {
  alert ('Надбавка неположена');
}
else if (experience >= 1 && experience <=10) {
  alert ('Надбавка 10%');
}
else if (experience >= 11 && experience <=20) {
  alert ('Надбавка 20%');
}
else if (experience >= 12 && experience <=30) {
  alert ('Надбавка 30%');
}
else if (experience >= 31 && experience <=40) {
  alert ('Надбавка 40%');
}
else if (experience >= 41 && experience <=50) {
  alert ('Надбавка 50%');
}
else {
  alert ('Пора на пенсию!');
}
*/

/*
//Задача 7
for (let i = 4; i <= 500; i++) {
  console.log (i);
}
*/

/*
//Задача 8
for (let i = 4; i <= 13; i+=3) {
  console.log (i);
}
*/

/*
//Задача 9
for (let i = 654; i >= 0; i--) {
  console.log (i);
}
*/

/*
//Задача 10
for (let i = 1983; i <= 2017; i++) {
  console.log (i);
}
*/

/*
//Задача 11
for (let i = -4; i <= 100; i+=2) {
  console.log (i);
}
*/

/*
//Задача 12
do {
  for (let i = 1; i <= 9; i++) {
  console.log (i * 7);
}
} while (i < 0);
*/

/*
//Задача 13
for (let i = 1000; i <= 2000; i++) {
  let num = [i];
  let code = String.fromCharCode(num);
  console.log (code + ' ' + i);
}
*/

/*
//Задача 14
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log (sum);
*/

/*
//Задача 15
let op = 1;
for (let i = 1; i <= 50; i++) {
  op *= i;
}
console.log (op);
*/