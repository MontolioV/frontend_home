;'use strict';

const DAY_NAMES_BY_COUNTRY = {
    'Ukraine': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'USA': ['', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

function task3() {
    taskOutputNormalState('task-3-output');

    const DAY_NUMBER = parseInt(document.getElementById('input-day-n').value);
    const COUNTRY_SELECTOR = document.getElementById('select-country');
    const COUNTRY = COUNTRY_SELECTOR.options[COUNTRY_SELECTOR.selectedIndex].value;
    let output;

    if (isNaN(DAY_NUMBER) || DAY_NUMBER > 7 || DAY_NUMBER < 1) {
        output = 'Invalid day number';
        taskOutputErrorState('task-3-output');
    } else {
        let dayName = DAY_NAMES_BY_COUNTRY[COUNTRY][DAY_NUMBER];
        output = 'In ' + COUNTRY + ' it\'s ' + dayName + '.';
    }

    document.getElementById('task-3-output').innerText = output;
}