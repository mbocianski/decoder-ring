// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // create array greekAlphabet with a-z
  const greekAlphabet = ["a", "b", "c", "d", "e", "f", "g", 
                         "h", "i", "j", "k", "l", "m", "n", 
                         "o", "p", "q", "r", "s", "t", "u", 
                         "v", "w", "x", "y", "z"];

  //create helper function checkValuesandLength
    //check if alphabet has unique characters by returning .forEach value and using the filter to return each value.
    // Then check the length of the string. Return false if < 26. 
    // checks for both length and unique values
    
    function checkValuesandLength(alphabet) {
      const check = [];
      alphabet.forEach((character) => {
        const match = alphabet.filter((letter) => letter === character);
        if (match.length === 1) {
          check.push(match);
        }
      });
      if (check.length !== 26) {
        return false;
      } else {
        return true;
      }
    }                       
  

  function substitution(input, alphabet, encode = true) {
    //if alphabet is missing return false
    // set alphabet to sring, lowercase, and split into an array
    // run helper function checkValuesAndLength 
    if (!alphabet) return false;
    alphabet = alphabet.toString().toLowerCase().split("");
    if (!checkValuesandLength(alphabet)) return false;
    
  // create object cypher "cypher" using a for loop and setting greekphabet as keys and alphabet as values
    const cypher = {};
    for (let i = 0; i < greekAlphabet.length; i++) {
      cypher[greekAlphabet[i]] = alphabet[i];
    }
  //create constnt splitWords that makes everything lowercase and splits input by spaces
  //use the array map on each word from SplitWords
  // create constant newWord uses the array map on each letter from word
  // use the find function return the value from cypher that matches with the respective object key for each letter
  // when decoding return the key instead

  const splitWords = input.toLowerCase().split(" ");
  const newWords = splitWords.map((word) => {
    const newWord = word.split("").map((letter) => {
      if (encode === true){
      return Object.values(cypher).find((value) => cypher[letter] === value)
      }else{
      return Object.keys(cypher).find((key) => cypher[key] === letter)  
      };
    })
    // join newords since map split into letters
    return newWord.join("");
  })
  return newWords.join(" ");

}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
