// This program will loop over an array and gradually build a sentence incremented by one word on each new line.

// Creates a variable containing a sentence in a single string
let sentence = "The walrus danced through the trees in the light of the moon.";
// Creates a new variable from the "sentence" variable with the ".split()" method applied, spliting the string into an array containing the individual words. The " " acts as a seperator.
let theWordArray = sentence.split(" ");
console.log(theWordArray);
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

}

// Invoke the function and pass in the array
addExcitement(sentence);