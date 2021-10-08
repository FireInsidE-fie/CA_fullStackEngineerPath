// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-ii/modules/fecp-challenge-project-mysterious-organism/projects/mysterious-organism
// 07.10.2021

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
}
  
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand;
}

const pAequorFactory = (number, dnaBasesArray) => {
    return {
        specimenNum: number,
        dna: dnaBasesArray,

        mutate() {
            let previousBase = this.dna[randomBase]
            let mutatedBase = returnRandBase();

            while (previousBase === mutatedBase) {  // Checks if the new value is the same as the old one (that wouldn't mutate the array at all if it was).
                mutatedBase = returnRandBase();
            }

            this.dna[Math.floor(Math.random() * 15)] = mutatedBase;  // Mutates the DNA.
            console.log(`New mutated DNA array : ${this.dna}`);  // Prints the mutated array for readability.
        },

        // Compares two DNA samples and prints out how many bases are identical.
        compareDNA(pAequorObject) {
            let identicalTotal = [];  // Initializes the array that will contain how much bases are identical.
            for (let i = 0; i < pAequorObject.dna.length; i++) {
                if (pAequorObject.dna[i] === this.dna[i]) {
                    identicalTotal++;  // Increments the total of one if a base is the same on both DNAs.
                }
            }

            console.log(`The percentage of identical bases in both specimens is ${identicalTotal / pAequorObject.dna.length * 100}%.`);  // Prints out the final number in percentage
        },

        // Checks if the subject is more likely to survive by checking their C and G bases number.
        willLikelySurvive() { return ((this.dna.filter(base => base === 'C' || base === 'G').length / this.dna.length * 100) >= 60) ? true: false }
    }
}

let specimens = [];  // Initializes the array that will contain 30 specimens.

for (let i = 0; i < 30; i++) {
    let newSpeciment = pAequorFactory(i, mockUpStrand());  // Creates a new speciment.

    if (newSpeciment.willLikelySurvive()) {  // Checks if it will survive. If yes, add to the array.
        specimens.push(newSpeciment);
    }
}

console.log(specimens);
