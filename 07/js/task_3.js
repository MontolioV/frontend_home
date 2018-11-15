;'use strict';

const DAY_NAMES_BY_COUNTRY ={
    'Ukraine': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'USA': ['', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

function task3() {
    document.getElementById('task-3-output').className = document.getElementById('task-3-output').className.replace(' task-output__error', '');
    
    const DAY_NUMBER = parseInt(document.getElementById('input-day-n').value);
    const COUNTRY_SELECTOR = document.getElementById('select-country');
    const COUNTRY = COUNTRY_SELECTOR.options[COUNTRY_SELECTOR.selectedIndex].value;
    let output;

    if (isNaN(DAY_NUMBER) || DAY_NUMBER > 7 || DAY_NUMBER < 1) {
        output = 'Invalid day number';
        document.getElementById('task-3-output').className += ' task-output__error';
    } else {
        let dayName = DAY_NAMES_BY_COUNTRY[COUNTRY][DAY_NUMBER];
        output = 'In ' + COUNTRY + ' it\'s ' + dayName + '.';
    }

    document.getElementById('task-3-output').innerText = output;
}