const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// Prompting tests
// const name = prompt('What is your name? ');
// console.log(`Welcome ${typeof name}!`)

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

  static generateField(height, width) {
    let field = [];
    let hatPosition = [Math.floor(Math.random() * width), Math.floor(Math.random() * height)];

    for (let i1 = 0; i1 < height; i1++) {
      field.push([]);
      for (let i2 = 0; i2 < width; i2++) {
        if (Math.random() * 10 > 3) {
          field[i1].push('░');
        } else {
          field[i1].push('O');
        }
      }
    }

    field[hatPosition[1]][hatPosition[0]] = '^';
    field[0][0] = '*';

    return field;
  }
}

// Creating field
const playerField = new Field(Field.generateField(8, 12));

// Initializing player movement
let direction = '';

while (playerField.gameOn = true) {
  playerField.print();
  direction = prompt('Where will you go? (wasd) ');

  if (direction == 'a' && playerField.playerX > 0) {  // Going left
    if (playerField.field[playerField.playerY][playerField.playerX - 1] == '░') {
      playerField.field[playerField.playerY][playerField.playerX] = '░';
    
      playerField.playerX -= 1;

      playerField.field[playerField.playerY][playerField.playerX] = '*';

    } else if (playerField.field[playerField.playerY][playerField.playerX - 1] == 'O') {
      console.log('You feel down a hole!');
      process.exit();
      
    } else if (playerField.field[playerField.playerY][playerField.playerX - 1] == '^') {
      console.log('You found the hat! You win!');
      process.exit();
    }

  } else if (direction == 'd' && playerField.playerX < playerField.field[0].length - 1) {  // Going right    
    if (playerField.field[playerField.playerY][playerField.playerX + 1] == '░') {
      playerField.field[playerField.playerY][playerField.playerX] = '░';
    
      playerField.playerX += 1;

      playerField.field[playerField.playerY][playerField.playerX] = '*';

    } else if (playerField.field[playerField.playerY][playerField.playerX + 1] == 'O') {
      console.log('You feel down a hole!');
      process.exit();
      
    } else if (playerField.field[playerField.playerY][playerField.playerX + 1] == '^') {
      console.log('You found the hat! You win!');
      process.exit();
    }

  } else if (direction == 'w' && playerField.playerY > 0) {  // Going up
    if (playerField.field[playerField.playerY - 1][playerField.playerX] == '░') {
      playerField.field[playerField.playerY][playerField.playerX] = '░';
    
      playerField.playerY -= 1;

      playerField.field[playerField.playerY][playerField.playerX] = '*';

    } else if (playerField.field[playerField.playerY - 1][playerField.playerX] == 'O') {
      console.log('You feel down a hole!');
      process.exit();
      
    } else if (playerField.field[playerField.playerY - 1][playerField.playerX] == '^') {
      console.log('You found the hat! You win!');
      process.exit();
    }

  } else if (direction == 's' && playerField.playerY < playerField.field.length - 1) {  // Going down
    if (playerField.field[playerField.playerY + 1][playerField.playerX] == '░') {
      playerField.field[playerField.playerY][playerField.playerX] = '░';
    
      playerField.playerY += 1;

      playerField.field[playerField.playerY][playerField.playerX] = '*';

    } else if (playerField.field[playerField.playerY + 1][playerField.playerX] == 'O') {
      console.log('You feel down a hole!');
      process.exit();
      
    } else if (playerField.field[playerField.playerY + 1][playerField.playerX] == '^') {
      console.log('You found the hat! You win!');
      process.exit();
    }

  }
}
