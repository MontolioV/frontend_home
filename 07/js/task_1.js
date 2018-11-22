;'use strict';

function task1() {
    taskOutputNormalState('task-1-output');

    const a = parseFloat(document.getElementById('input-A').value);
    const b = parseFloat(document.getElementById('input-B').value);
    document.getElementById('task-1-output').innerText = equationSystem(a, b);
}

function equationSystem(a, b) {
    if (isNaN(a) || isNaN(b)) {
        taskOutputErrorState('task-1-output');
        return 'Error: NaN';
    }

    let result = 400;
    if (a > b) {
        result = a + b / 2 * 4;
    } else if (b > a) {
        if (b === 0) {
            taskOutputErrorState('task-1-output');
            return 'Error: Division by zero attempt';
        }
        result = a - b + 2 / b * 4;
    }
    return Number(result.toFixed(5));
}