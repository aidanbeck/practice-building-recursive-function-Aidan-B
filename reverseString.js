function reverseString(string) {
    
    if (string.length <= 1) {
        return string;
    }

    let lastLetter = string[string.length-1];
    let stringMinusLastLetter = string.slice(0, string.length-1);

    return lastLetter + reverseString(stringMinusLastLetter);
}

console.log( reverseString("hello")     ); // Outputs: "olleh" 
console.log( reverseString("recursion") ); // Outputs: "noisrucer" 
console.log( reverseString("a")         ); // Outputs: "a" 
console.log( reverseString("")          ); // Outputs: "" 