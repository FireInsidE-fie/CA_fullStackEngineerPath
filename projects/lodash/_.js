let _ = {
    /* Takes three number and returns the first number clamped to the two others,
    or just the first number if it is between the two others.
    */
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

    /* Determines if a numnber is between the two others.
    Will default start to 0 if end isn't specified, and take start as end.
    */
   inRange(number, start, end) {
        
   }
};

// Do not write or modify code below this line.
module.exports = _;
