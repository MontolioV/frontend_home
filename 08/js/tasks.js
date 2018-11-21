;'use strict';

function task1() {
    let a = parseFloat(prompt('Enter first number'));
    let b = parseFloat(prompt('Enter second number'));
    if (isNaN(a) || isNaN(b)) {
        alert('Enter valid numbers, please!');
    } else if (a === b) {
        alert('Numbers are equal');
    } else {
        alert(a > b ? a : b + ' is bigger');
    }
}

function task2() {
    task1();
}

function task3() {
    let roomNumber = parseInt(prompt('Enter room number'));
    if (isNaN(roomNumber)) {
        alert('Enter a room valid number, please!');
    } else if (roomNumber < 1 || roomNumber > 90) {
        alert('Room is not in the the first, second or third entrance.');
    } else if (roomNumber < 21) {
        alert('Room is in the the first entrance.');
    } else if (roomNumber < 49) {
        alert('Room is in the the second entrance.');
    } else {
        alert('Room is in the the third entrance.');
    }
}

function task4() {
    const inMemoryDB = [
        {login: 'ivan', password: '334455'},
        {login: 'alex', password: '777'},
        {login: 'petr', password: 'b5678'}
    ];

    let loginInput = prompt('Enter login');
    let passwordInput = prompt('Enter password');
    let inputPair = {login: loginInput, password: passwordInput};

    let exists = inMemoryDB.find(value => value.login === inputPair.login && value.password === inputPair.password);
    if (exists) {
        alert('Welcome!');
    } else {
        alert('Login error');
    }
}

function task5() {
    let currentYear = new Date().getFullYear();
    let birthYear = parseInt(prompt('Enter your birth year', '1992'));
    let age = currentYear - birthYear;

    if (age >= 16) {
        alert('Welcome!');
    } else {
        alert('YOU SHALL NOT PASS!!!');
    }
}

function task6() {
    let workingExperienceInYears = parseFloat(prompt('Enter working experience'));
    if (isNaN(workingExperienceInYears)) {
        alert('Enter a valid working experience, please!');
    } else if (workingExperienceInYears <= 3) {
        alert('Your surcharge for the experience is 0%');
    } else if (workingExperienceInYears <= 10) {
        alert('Your surcharge for the experience is 10%');
    } else if (workingExperienceInYears <= 20) {
        alert('Your surcharge for the experience is 20%');
    } else {
        alert('Your surcharge for the experience is 25%');
    }
}

function task7() {
    for (let i = 4; i < 401; i++) {
        console.log(i);
    }
}

function task8() {
    for (let i = 4; i < 14; i += 3) {
        console.log(i);
    }
}

function task9() {
    for (let i = 654; i >= 0; i--) {
        console.log(i);
    }
}

function task10() {
    for (let i = 1983; i < 2018; i++) {
        console.log(i);
    }
}

function task11() {
    for (let i = -4; i < 101; i += 2) {
        console.log(i);
    }
}

function task12() {
    for (let i = 1; i < 10; i++) {
        console.log('7 * ' + i + ' = ' + i * 7);
    }
}

function task13() {
    for (let i = 1000; i < 2001; i++) {
        console.log('&#' + i);
    }
}

function task14() {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
        sum += i;
    }
    console.log(sum);
}

function task15() {
    for (let i = 1; i < 51; i++) {
        console.log(i + ' * ' + i + ' = ' + i * i);
    }
    console.log();
    console.log('or');
    console.log();

    let sum = 1;
    for (let i = 1; i < 51; i++) {
        sum *= i;
    }
    console.log(sum);
    console.log();
    console.log("Task was not clear to me, so I've done it in two ways");

}

function task16() {
    let array = [];
    for (let i = 1; i < 10; i++) {
        let tmpString = '';
        for (let j = i; j > 0; j--) {
            tmpString += 'x';
        }
        array[i - 1] = tmpString;
    }
    console.log(array);
}

function task17() {
    let array = [];
    for (let i = 1; i < 10; i++) {
        let tmpString = '';
        for (let j = i; j > 0; j--) {
            tmpString += i;
        }
        array[i - 1] = tmpString;
    }
    console.log(array);
}

function task18() {
    function fillArray(element, size) {
        let result = [];
        for (let i = 0; i < size; i++) {
            result[i] = element;
        }
        return result;
    }

    let element = prompt('Enter what to store');
    let size = parseInt(prompt('Enter array size'));
    if (isNaN(size) || size < 1) {
        console.log('Invalid array size!');
    } else {
        console.log(fillArray(element, size));
    }
}

function task19() {
    let input = prompt('Enter space separated array of numbers', '1 2 3 4 5 6 7 8 9');
    let array = parseStringTo1DArray(input);
    if (array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            if (sum > 10) {
                alert('Sum of ' + (i + 1) + ' first numbers is greater then 10. It is ' + sum);
                break;
            }
        }
    } else {
        alert('Enter valid numbers, please!');
    }
}

function task20() {
    let input = prompt('Enter space separated array of numbers', '1 2 3 4 5 6 7 8 9');
    let array = parseStringTo1DArray(input);
    if (!array) {
        alert('Enter valid numbers, please!');
        return;
    }

    //Swapping with xor
    for (let i = 0; i < (array.length - 1) / 2; i++) {
        if (i !== array.length - 1 - i) {
            array[i] = array[i] ^ array[array.length - 1 - i];
            array[array.length - 1 - i] = array[i] ^ array[array.length - 1 - i];
            array[i] = array[i] ^ array[array.length - 1 - i];
        }
    }

    //or using array methods
    // for (let i = 0; i < array.length; i++) {
    //     array.splice(i, 0, array.pop());
    // }

    console.log(array);
}

function task21() {
    let input = prompt('Enter 2d array of numbers. Spaces separate elements in the fist dimension, slashes - the second.',
        '1 2 3/4 5/6');
    let array2D = parseStringTo2DArray(input);
    if (!array2D) {
        alert('Enter valid numbers, please!');
        return;
    }

    let sum = 0;
    for (const array1D of array2D) {
        for (const array1DElement of array1D) {
            sum += array1DElement;
        }
    }
    console.log(sum);
}

function task22() {
    let input = prompt('Enter 3d array of numbers. Spaces separate elements in the fist dimension, slashes - the second ' +
        'and | - the third.', '1 2/3 4|5 6/7 8');
    let array3D = parseStringTo3DArray(input);
    if (!array3D) {
        alert('Enter valid numbers, please!');
        return;
    }

    let sum = 0;
    for (const array2D of array3D) {
        for (const array1D of array2D) {
            for (const array1DElement of array1D) {
                sum += array1DElement;
            }
        }
    }
    console.log(sum);
}

function task23() {
    const number = parseFloat(prompt("Enter number between 0 and 10"));
    if (isNaN(number)) {
        alert('Enter a valid number, please!');
    } else if (isNumberInRange(number)) {
        alert("Correct. Number is in range.");
    } else {
        alert("Wrong. Number isn't in range.")
    }
}

function task24() {
    let input = prompt('Enter space separated array of numbers', '0 1 2 3 4 5 6 7 8 9 10 11');
    let array = parseStringTo1DArray(input);
    if (!array) {
        alert('Enter valid numbers, please!');
        return;
    }

    let result = [];
    for (const arrayElement of array) {
        if (isNumberInRange(arrayElement)) {
            result.push(arrayElement);
        }
    }
    console.log(result);
}

function task25() {
    const number = parseFloat(prompt("Enter a number"));
    if (isNaN(number)) {
        alert('Enter a valid number, please!');
    } else if (isEven(number)) {
        alert("Number is even.");
    } else {
        alert("Number is odd.");
    }
}

function task26() {
    let input = prompt('Enter space separated array of numbers', '0 1 2 3 4 5 6 7 8 9 10 11');
    let array = parseStringTo1DArray(input);
    if (!array) {
        alert('Enter valid numbers, please!');
        return;
    }

    let result = [];
    for (const arrayElement of array) {
        if (isEven(arrayElement)) {
            result.push(arrayElement);
        }
    }
    console.log(result);
}

function task27() {
    const number = parseFloat(prompt("Enter a number"));
    if (isNaN(number)) {
        alert('Enter a valid number, please!');
    } else {
        console.log(getDivisors(number));
    }
}

function task28() {
    let input = prompt('Enter space separated array of numbers', '1 2 3 4 5 6');
    let array = parseStringTo1DArray(input);
    if (!array) {
        alert('Enter valid numbers, please!');
        return;
    }

    for (let i = 1; i < array.length; i += 2) {
        let tmp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = tmp;
    }
    console.log(array);
}

function task29() {
    let input = prompt('Enter space separated array of numbers', '1 2 3 4 5 6');
    let array = parseStringTo1DArray(input);
    if (!array) {
        alert('Enter valid numbers, please!');
        return;
    }

    let result = [];
    for (let i = 1; i < array.length; i += 2) {
        result.splice(0, 0, array[i - 1], array[i]);
    }
    if (array.length % 2 === 1) {
        result.splice(0, 0, array[array.length - 1]);
    }
    console.log(result);
}

function isNumberInRange(number) {
    return number > 0 && number < 10;
}

function isEven(number) {
    return number % 2 === 0;
}

function getDivisors(number) {
    const result = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    return result;
}

function parseStringTo1DArray(string) {
    let array = string.split(' ');
    for (const idx in array) {
        array[idx] = parseFloat(array[idx]);
        if (isNaN(array[idx])) {
            return null;
        }
    }
    console.log(array);
    return array;
}

function parseStringTo2DArray(string) {
    let array2D = [];
    for (const oneDimensionArStr of string.split('/')) {
        const array1D = parseStringTo1DArray(oneDimensionArStr);
        if (!array1D) {
            return null;
        }
        array2D.push(array1D);
    }
    console.log(array2D);
    return array2D;
}

function parseStringTo3DArray(string) {
    let array3D = [];
    for (const twoDimensionsArStr of string.split('|')) {
        const array2D = parseStringTo2DArray(twoDimensionsArStr);
        if (!array2D) {
            return null;
        }
        array3D.push(array2D);
    }
    console.log(array3D);
    return array3D;
}