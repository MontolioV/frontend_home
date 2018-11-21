;'use strict';

function taskOutputErrorState(elementId) {
    document.getElementById(elementId).className += ' task-output__error';
}

function taskOutputNormalState(elementId) {
    const NO_ERROR_CLASSES_STR = document.getElementById(elementId).className.replace(' task-output__error', '');
    document.getElementById(elementId).className = NO_ERROR_CLASSES_STR;
}