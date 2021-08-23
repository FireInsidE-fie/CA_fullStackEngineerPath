// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-i/modules/fecp-learn-javascript-syntax-functions/projects/sleep-debt-calculator

// Returns the amount of hours of sleep I got depending on the day of the week.
const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            return 8;        

        case 'Tuesday':
            return 6;    

        case 'Wednesday':
            return 7;

        case 'Thursday':
            return 5;

        case 'Friday':
            return 14;

        case 'Saturday':
            return 8;

        case 'Sunday':
            return 9;
    }
}

// Returns my total hours of sleep this week.
const getActualSleepHours = () => 6 + 8 + 9 + 11 + 5 + 9 + 8;


// Returns the number of hours of sleep I should have gotten this week.
const getIdealSleepHours = (idealHours) => {  // My ideal hours of sleep per night.
    return idealHours * 7;  // Gets the total hours of sleep required each week.
}

// Will calculate the sleep date I accumulated this week.
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();  // Gets the sleep hours I got.
    const idealSleepHours = getIdealSleepHours(8);  // Gets the sleep hours I should have.

    if (actualSleepHours === idealSleepHours) {  // If I got just enough hours of sleep.
        return 'You got just enough hours of sleep.';

    } else if (actualSleepHours > idealSleepHours) {  // If I got more hours of sleep than needed.
        return 'You got more hours of sleep than you needed! You currently have ' + (actualSleepHours - idealSleepHours) + ' hours of surplus.';

    } else if (actualSleepHours < idealSleepHours) {  // If I didn't get enough hours of sleep.
        return 'You didn\'t get enough hours of sleep. Your debt is currently ' + (idealSleepHours - actualSleepHours) + '. Go to bed!' ;

    } else {  // Just in case something went wrong, it'll return an error.
        return 'Error.';
    }
}

// Running everything.
console.log(calculateSleepDebt());
