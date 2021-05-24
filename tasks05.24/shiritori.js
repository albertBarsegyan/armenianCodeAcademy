/* Shiritori
This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:
First character of next word must match last character of previous word.
The word must not have already been said.
Below is an example of a Shiritori game: */
/* Write a Shiritori class that has two instance properties:
words: an array of words already said.
game_over: a boolean that is true if the game is over.
Methods:
play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules
#1 and #2 above).
If it is valid, it adds the word to the words array, and returns the words array.
If it is invalid (eitherrule is broken), itreturns "game over" and sets the game_over boolean to
true.
restart: a method that sets the words array to an empty one [] and sets the game_over boolean to
false. It should return "game restarted".*/

class Shiritori {
  constructor() {
    this.words = [];
  }
  static words = function () {
    return this.words;
  };
  play(word) {
    if (this.words.length === 0) {
      this.words.push(word);
      return this.words;
    }
    let lastLetterLastWord = this.words[this.words.length - 1];
    lastLetterLastWord = lastLetterLastWord[lastLetterLastWord.length - 1];

    if (
      this.words.length > 0 &&
      lastLetterLastWord === word[0] &&
      !this.words.includes(word)
    ) {
      this.words.push(word);
      return this.words;
    } else {
      this.words = [];
      return 'Game over';
    }
  }
  restart() {
    this.words = [];
    return 'game restarted';
  }
}

let gamer = new Shiritori();
console.log(gamer.play('eakoc'));
console.log(gamer.play('coffee'));
console.log(gamer.play('eakoc'));
console.log(gamer.words);
