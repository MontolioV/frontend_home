;'use strict';

function task2_1() {
    let outputId = 'task-2-1-output';
    let validPoint = isInputValidWithReport(outputId);
    if (validPoint) {
        const POINT = getPoint();
        console.log(POINT.x > 4);
        console.log(POINT.x < -4);
        console.log(POINT.y > 4);
        console.log(POINT.y < 0);
        console.log(POINT.y > 4 - Math.abs(POINT.x));
        console.log();
        if (POINT.x > 4 || POINT.x < -4 || POINT.y > 4 || POINT.y < 0 || POINT.y > 4 - Math.abs(POINT.x)) {
            document.getElementById(outputId).innerText = 'Point doesn\'t hit the area.';
        } else {
            document.getElementById(outputId).innerText = 'Point hits the area.';
        }
    }
}

function task2_2() {
    let validPoint = isInputValidWithReport('task-2-2-output');
    if (validPoint) {

    }
}

function task2_3() {
    let validPoint = isInputValidWithReport('task-2-3-output');
    if (validPoint) {

    }
}

function isInputValidWithReport(outputId) {
    taskOutputNormalState(outputId);
    const X = parseFloat(document.getElementById('input-X').value);
    const Y = parseFloat(document.getElementById('input-Y').value);
    if (isNaN(X) || isNaN(Y)) {
        document.getElementById(outputId).innerText = 'Error: NaN';
        taskOutputErrorState(outputId);
        return false;
    }

    document.getElementById('input-X').value = X;
    document.getElementById('input-Y').value = Y;
    return true;
}

function getPoint() {
    const X = parseFloat(document.getElementById('input-X').value);
    const Y = parseFloat(document.getElementById('input-Y').value);
    return {x: X, y: Y}
}