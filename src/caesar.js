// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  //takes the index number and shifts it in the alphabet
  function indexShift(index, shift, encode = true) {
    // if shift === false, set move = multiple shift by -1
    //create const sum equal to index plus move
    //if sum greater than 26, return sum minus 27
    //if sum is less than 0 return sum plus 27
      index = parseInt(index)
    if (encode === false) {
      shift = shift * -1;
    } 
    let sum = (index + shift);
    if (sum > 25) {
      return (sum - 26);
    } else if (sum < 0) {
      return (sum + 26);
    } else {
      return sum;
    }
  }

  const alphabet = {
    0:"a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h", 8: "i", 9: "j", 10: "k",
    11: "l", 12: "m", 13: "n", 14: "o", 15: "p", 16: "q", 17: "r", 18: "s", 19: "t", 20: "u",
    21: "v", 22: "w", 23: "x", 24: "y", 25: "z",
  }

  function caesar(input, shift, encode = true) {
    // Create a gate that returns false if shift value isn't present, or equal to 0, less than -25 or greater than 25
    // create empty array called output
    // create and object "alphabet" with keys 1-26 and each letter of the alphabet for values
    // create a new array 'words' using input.toLowercase().split(' ');
     // let newWord =[]
    // Loop through each word with forEach
    // Split each word into new constant letters = word.split('')
    // set new constant 'shiftedText' equal to the letters.map 
    // if letters.includes is false, push letter to newWords
    // let index = alphabet.find() to identify the index
    // const newIndex index through indexShift function
    // return alphabet.newIndex
    // set shiftedText.join('') to NewWords
    // set output equal to NewWords.join(" ")
    // return output

    // returns false if conditions are not met
    if (!shift || shift === 0 || shift <= -25 || shift >= 25) return false;
    let output;
    const words = input.toLowerCase().split(' ');
    const newWords = [];
// loop through each word 
    words.forEach((word) => {
      const letters = [...word];
// map each letter to a new shifted index
      const shiftedText = letters.map((letter) => {
// if character is not in aphalet return letter
        if (!Object.values(alphabet).includes(letter)){
         return letter}
// search alphabet obejct for each letter and obtain index with helper function
        const index = Object.keys(alphabet).find((key) => alphabet[key] === letter);
        const newIndex = indexShift(index, shift, encode);
        return alphabet[newIndex];
      })
// push each new word to array
    newWords.push(shiftedText.join(""));
    })
// join words and return
    output = newWords.join(" ");
    return output;
  }
 
  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
