const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// Prompting tests
//const name = prompt('What is your name? ');
//console.log(`Welcome ${name}!`)

// Field class
class Field {
  constructor(field) {
    this.field = field;
    this.player = {
      gameOn : true,
      positionX : 0,
      positionY : 0
    };
  }

  print() {
    for (let i = 0; i < this.field.length; i++) {
      console.log(this.field[i].join(''));
    }
  }
}

// Creating field
const playerField = new Field([
  ['*', '░', '░', 'O', 'O', '░'],
  ['O', 'O', '░', '░', '░', 'O'],
  ['^', '░', 'O', '░', 'O', 'O'],
  ['░', '░', '░', '░', 'O', '░']
]);

// Initializing player movement
while (playerField.gameOn = true) {
  playerField.print();
  let direction = prompt('Where will you go? (wasd)');

  if (direction = 'd') {

  }
}
