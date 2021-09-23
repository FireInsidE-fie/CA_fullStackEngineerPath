// Write function below
const subLength = (inputString, inputCharacter) => {
    if (inputString.split('').filter(element => element === inputCharacter).length === 2) {
      return inputString.lastIndexOf(inputCharacter) - inputString.indexOf(inputCharacter) + 1;
    } else {
      return 0;
    }
  }
  
  console.log(subLength('sunny', 'n'));
  