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
            for (let i = 0; i < pAequorObject.length; i++) {
                if (pAequorObject.dna[i] === this.dna[i]) {
                    identicalTotal++;  // Increments the total of one if a base is the same on both DNAs.
                }
            }

            console.log(`The number of identical bases is ${identicalTotal}.`);  // Prints out the final number.
        }
    }
}
