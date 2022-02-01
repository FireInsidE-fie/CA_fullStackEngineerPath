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
    this.gameOn = true;
    this.playerX = 0;
    this.playerY = 0;
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

console.log(playerField.playerX + 3);

// Initializing player movement
while (playerField.gameOn = true) {
  playerField.print();
  let direction = prompt('Where will you go? (wasd) ');

  if (direction = 'a' & playerField.playerX < 0) {  // Going left
    playerField.field[playerField.playerY][playerField.playerX] = '░';
    
    playerField.playerX -= 1;

    playerField.field[playerField.playerY][playerField.playerX] = '*';
  } 
  
  if (direction = 'd' & playerField.playerX > playerField.field[0].length) {  // Going right
    playerField.field[playerField.playerY][playerField.playerX] = '░';
    
    playerField.player.positionX += 1;

    playerField.field[playerField.playerY][playerField.playerX] = '*';
  }
}
