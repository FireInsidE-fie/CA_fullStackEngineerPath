// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-ii/modules/fecp-learn-javascript-syntax-iterators/projects/mini-linter
// 07.09.2021

// Strings and arrays provided by the initial project.
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually'];

// Splits the story into its words.
let storyWords = story.split(' ');

// Prints the length in words of the story.
console.log(`The word count of this text is ${storyWords.length} words.`);

// Will filter out words that aren't necessary.
let betterWords = storyWords.filter(word => {
    if (word === unnecessaryWords[0] || word === unnecessaryWords[1] || word === unnecessaryWords[2]) {
        return false;
    } else {
        return true;
    }
});
console.log(betterWords);

// Initialises the count of how many overused words there are in the text.
let overusedCount1 = 0;  // really
let overusedCount2 = 0;  // very
let overusedCount3 = 0;  // basically

// Will iterate three times to see how many times there is an overusedWord from the array, and removes it.
storyWords.forEach(word => {
    if (word === overusedWords[0]) {
        overusedCount1 += 1;
        if (overusedCount1 > 0) {
            storyWords.splice(storyWords[storyWords.indexOf(word)], 1);  // Is supposed to remove overused words, doesn't work for some reason.
        }
    } else if (word === overusedWords[1]) {
        overusedCount2 += 1;
        if (overusedCount2 > 0) {
            storyWords.splice(storyWords[storyWords.indexOf(word)], 1);  // Is supposed to remove overused words, doesn't work for some reason.
        }
    } else if (word === overusedWords[2]) {
        overusedCount3 += 1;
        if (overusedCount3 > 0) {
            storyWords.splice(storyWords[storyWords.indexOf(word)], 1);  // Is supposed to remove overused words, doesn't work for some reason.
        }
    }
    
});

console.log(`There are ${overusedCount1 + overusedCount2 + overusedCount3} overused words in this text.`);  // Returns the total count.

let sentenceCount = 0;  // Initializes the count of how many sentences there are in the text.
storyWords.forEach(word => {
    if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
        sentenceCount += 1;
    }
});

console.log(`There are ${sentenceCount} sentences in this text.`)

console.log(betterWords.join(' '));
