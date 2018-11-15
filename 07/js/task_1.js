;'use strict';

function task1() {
    document.getElementById('task-1-output').className = document.getElementById('task-1-output').className.replace(' task-output__error', '');

    const a = parseFloat(document.getElementById('input-A').value);
    const b = parseFloat(document.getElementById('input-B').value);
    document.getElementById('task-1-output').innerText = equationSystem(a, b);
}

function equationSystem(a, b) {
    if (isNaN(a) || isNaN(b)) {
        errorAttention();
        return 'Error: NaN';
    }

    let result;
    if (a > b) {
        result = a + b / 2 * 4;
    } else if (b > a) {
        if (b === 0) {
            errorAttention();
            return 'Error: Division by zero attempt';
        }
        result = a - b + 2 / b * 4;
    } else {
        return 400;
    }
    return Number(result.toFixed(5));
}

function errorAttention() {
    document.getElementById('task-1-output').className += ' task-output__error';
}