function reverse(string) {
    newString = ""
    for (var i = string.length - 1; i >= 0 ; i--){
        newString += string[i]
    }
    return newString
}

console.log(reverse("hey"))
console.log(reverse("hi"))
console.log(reverse("people"))

function numVowels(string) {
    answer = 0
    for (var i = 0; i < string.length; i++){
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u" || string[i] == "A" || string[i] == "E" || string[i] == "I" || string[i] == "O" || string[i] == "U") {
            answer += 1
        }
    }
    return answer
}

console.log(numVowels("aabbcc"));
console.log(numVowels("aaaaaa"));
console.log(numVowels("ccbbUU"));

function numStringsShorterThanLength(strings, length) {
    numbers = 0
    for (var i = 0 ; i < strings.length; i++) {
        if (strings[i].length < length) {
            numbers += 1
        }
    }
    return numbers
}

console.log(numStringsShorterThanLength(["ii", "ggg", "aa", "GGG"], 3));
console.log(numStringsShorterThanLength(["ii", "ggg", "aa", "GGG"], 2));
console.log(numStringsShorterThanLength(["ii", "ggg", "aa", "GGG"], 4));