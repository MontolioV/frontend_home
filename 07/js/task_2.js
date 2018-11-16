;'use strict';

const OVERLAYS = {
    "overlay-1": {x0: 178, y0: 194, scale: 23},
    "overlay-2": {x0: 191, y0: 199, scale: 87},
    "overlay-3": {x0: 221, y0: 176, scale: 83}
};

coordinateInputInit();

function coordinateInputInit() {
    document.querySelector('#task-2-1 .dot-x0y0').style = 'left: ' + OVERLAYS['overlay-1'].x0 + 'px; top: ' + OVERLAYS['overlay-1'].y0 + 'px;';
    document.querySelector('#task-2-2 .dot-x0y0').style = 'left: ' + OVERLAYS['overlay-2'].x0 + 'px; top: ' + OVERLAYS['overlay-2'].y0 + 'px;';
    document.querySelector('#task-2-3 .dot-x0y0').style = 'left: ' + OVERLAYS['overlay-3'].x0 + 'px; top: ' + OVERLAYS['overlay-3'].y0 + 'px;';

    let listOfInputs = document.querySelectorAll('.input-diagram-overlay');
    for (let i = 0; i < listOfInputs.length; i++) {
        listOfInputs[i].addEventListener("click", mouseClickListener);
    }
}

function task2() {
    task2_1();
    task2_2();
    task2_3();
}

function task2_1() {
    let isAreaHitFunc = function (point) {
        return !(Math.abs(point.x) > 4 || point.y > 4 || point.y < 0 || point.y > 4 - Math.abs(point.x));
    };
    const POINT = task2CommonLogic('task-2-1-output', isAreaHitFunc);
    positionDotOnInput(POINT, OVERLAYS['overlay-1'], '#task-2-1 .dot-pointer');
}

function task2_2() {
    let isAreaHitFunc = function (point) {
        return !(Math.abs(point.y) > 1 || Math.abs(point.x) > Math.abs(point.y));
    };
    const POINT = task2CommonLogic('task-2-2-output', isAreaHitFunc);
    positionDotOnInput(POINT, OVERLAYS['overlay-2'], '#task-2-2 .dot-pointer');
}

function task2_3() {
    let isAreaHitFunc = function (point) {
        return (Math.sqrt(point.x * point.x + point.y * point.y) <= 1) ||
            !(point.x > 0 || point.x < -2 || point.y > 0 || point.y < -2 || point.y < -2 - point.x);
    };
    const POINT = task2CommonLogic('task-2-3-output', isAreaHitFunc);
    positionDotOnInput(POINT, OVERLAYS['overlay-3'], '#task-2-3 .dot-pointer');
}

function task2CommonLogic(outputId, isAreaHitFunc) {
    let validPoint = isInputValidWithReport(outputId);
    if (validPoint) {
        const POINT = getPoint();
        if (isAreaHitFunc(POINT)) {
            document.getElementById(outputId).innerText = 'True. Point hits the area.';
        } else {
            document.getElementById(outputId).innerText = 'False. Point doesn\'t hit the area.';
        }
        return POINT;
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

    document.getElementById('input-X').value = Number.isInteger(X) ? X.toFixed(1) : X;
    document.getElementById('input-Y').value = Number.isInteger(Y) ? Y.toFixed(1) : Y;
    return true;
}

function getPoint() {
    const X = parseFloat(document.getElementById('input-X').value);
    const Y = parseFloat(document.getElementById('input-Y').value);
    return {x: X, y: Y}
}

function positionDotOnInput(point, inputArea, dotQuery) {
    let dotX = point.x * inputArea.scale + inputArea.x0;
    let dotY = inputArea.y0 - point.y * inputArea.scale;
    document.querySelector(dotQuery).style = 'left: ' + dotX + 'px; top: ' + dotY + 'px;';
}

function mouseClickListener(event) {
    let totalOffsetX = 0;
    let totalOffsetY = 0;
    let currentElement = this;
    do {
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while (currentElement = currentElement.offsetParent);

    //dot centered
    let x = event.pageX - totalOffsetX - 5;
    let y = event.pageY - totalOffsetY - 5;

    let overlay = OVERLAYS[this.id];
    document.getElementById('input-X').value = (x - overlay.x0) / overlay.scale;
    document.getElementById('input-Y').value = (overlay.y0 - y) / overlay.scale;
    task2();
}