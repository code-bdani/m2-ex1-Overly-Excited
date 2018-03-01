// This program will loop over an array and gradually build a sentence incremented by one word on each new line.

// Creates a variable containing a sentence in a single string
let sentence = "The walrus danced through the trees in the light of the moon.";
let edgarAllenPoeQuote = "All that we see or seem is but a dream within a dream.";

// Redfines the value of the "sentence" variable with the ".split()" method applied, spliting the string into an array containing the individual words. The " " acts as a deliminator.
sentence = sentence.split(" ");
edgarAllenPoeQuote = edgarAllenPoeQuote.split(" ");

// The addExcitement function should be an impure function, and accept the array as the sole argument.
// It should iterate over the array and output the words to the browser console.
function addExcitement (theWordArray, userInput) {
    let space = "";
    let specialChar = prompt("Please enter a special character or punctuation mark.");
    let singleChar = specialChar;
    for (let i = 0; i < theWordArray.length; i++) {
    let currentWordInArray = theWordArray[i];
    space += " " + currentWordInArray;
    console.log(space);
    if ((i + 1) % 3 === 0) {
        space += specialChar;
        specialChar = specialChar + singleChar;
        } 
    }
}

// // Invoke the function and pass in the array
addExcitement(sentence);
addExcitement(edgarAllenPoeQuote);