function reverseString(string) {
    
    if (string.length <= 1) {
        return string;
    }

    let lastLetter = string[string.length-1];
    let stringMinusLastLetter = string.slice(0, string.length-1);

    /*
        This function saves the last letter, then removes it from the string.
        Then, it "reverses" the rest of the string by resursively calling this function again.
        Each time the function is called, it pulls a letter from the end of the string to the beginning of the remaining string.
        When it is done, the string has been reversed.
    */

    return lastLetter + reverseString(stringMinusLastLetter);

}

console.log( reverseString("hello")     ); // Outputs: "olleh" 
console.log( reverseString("recursion") ); // Outputs: "noisrucer" 
console.log( reverseString("a")         ); // Outputs: "a" 
console.log( reverseString("")          ); // Outputs: "" 