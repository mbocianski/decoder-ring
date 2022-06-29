// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
//create object called 'key' from polybius square  
  const cypher = {
    11:"a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",}


//encode helper function
    // create function 'encodeMessage' that takes in splitWords
    function encodeMessage(splitWords) {
      return splitWords.map((word) => {
        // let const letters = map each letter in word 
        const newWord =  word.split("").map((letter) => {
          // use the find function for the Object keys of key where cypher[key] includes letter
          return newLetter = Object.keys(cypher).find((key) => cypher[key].includes(letter)); 
        });
      // need to join each letter since map returns an array  
      return newWord.join('');
      });
    }

//decode helper function
    // create function 'decodeMessage' that takes in string
    function decodeMessage (splitWords) {
    // split message into array based on spaces and convert to lowercase
     return splitWords.map((word) => {
    // creat constant letters be each each word split every two characters with the match function (/../g)
     // map each letter in letters   
         const letters = word.match(/../g).map((number) => {
            // use the find function for the Object values of key where key includes letter
            return newLetter = Object.values(cypher).find((value) => value === cypher[number]); 
          });
    //return joined numbers since map returns an array
          return letters.join('');
    // let const newWords equal words joined by a space and converted to a string
    // return newWords
        });
    };
  
  function polybius(input, encode = true) {
    // return false if input does not exist
    if (!input) return false;
    // check if encode is false AND if in input string length is odd
    if (encode === false && input.replace(" ", "").length % 2 !== 0) return false;
    // set input to be a string
    const string = input.toString().toLowerCase();
    // split message into array based on spaces and convert to lowercase
    const splitWords = string.split(" ");
    // if encode is true, set newords equal the encodeMessage function
    // if encode is false, set newords equal to the decodeMessage function
    let newWords;
    if (encode === true){
      newWords = encodeMessage(splitWords);
    } else {
      newWords = decodeMessage(splitWords);  
    };
    // set newWords equal words joined by a space and converted to a string
    // return newWords

    const output = newWords.join(" ").toString();
    return output;
    
}

    // check for even amount of characters when encode = false, return false if odd//
    
 

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
