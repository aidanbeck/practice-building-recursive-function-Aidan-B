function reverseString(string) {

    if (string.length == 1 || string.length == 0) {
        return string; //string's reverse is identical
    }

    let lastLetter = string[string.length-1];
    let remainingLetters = string.slice(0, string.length-1);

    return lastLetter + reverseString(remainingLetters);

}

let test = reverseString("earth");

console.log(test);