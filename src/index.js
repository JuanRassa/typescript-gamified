"use strict";
function throwDice() {
    const sides = 6;
    const randomDiceResult = Math.floor(Math.random() * sides) + 1;
    return randomDiceResult;
}
const yourGuess = 3;
const result = throwDice();
console.log(`You guessed: ${yourGuess}. The result is: ${result}`);
function brewPotion(ingredients, skillLevel) {
    // ...
    console.log(ingredients);
    return skillLevel;
}
// brewPotion(['Blue Mountain Flower', 'Wheat'], 3); /* Will throw a type error */
brewPotion(['Blue Mountain Flower', 'Wheat'], 3); /* Will compile with no errors */
