let _ = {
    /* Takes three number and returns the first number clamped to the two others,
    or just the first number if it is between the two others.*/
    clamp(number, lowest, highest) { 
        if (number < highest && number > lowest) {
            return number;
        } else if (number > highest) {
            return highest;
        } else if (number < lowest) {
            return lowest;
        } else {
            console.log('Error.')
        }
    },

    /* Determines if a number is between the two others.
    Will default start to 0 if end isn't specified, and take start as end.*/
    inRange(number, start, end) {
        if (end === undefined) {  // If the end scope isn't specified.
            end = start;
            start = 0;
            if (number < end && number >= start) {  // If number is in range.
                return true;
            } else {  // If number isn't in range.
                return false;
            }
        } else if (end < start) {  // If the start scope is higher than the end scope, will swap the two values.
            [start, end] = [end, start];
            if (number < end && number >= start) {  // If number is in range.
                return true;
            } else {  // If number isn't in range.
                return false;
            }
        } else {
            if (number < end && number >= start) {  // If number is in range.
                return true;
            } else {  // If number isn't in range.
                return false;
            }
        }
   }
};

// Do not write or modify code below this line.
module.exports = _;
