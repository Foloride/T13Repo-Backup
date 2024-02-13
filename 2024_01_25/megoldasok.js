function countChar(str, char){
    if (!str.includes(char)){
        return 0;
    }
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

function convertToCamelCase(str) {
    let words = str.split(" ");
    let result = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i];
        let firstChar = currentWord[0].toUpperCase();
        result += firstChar + currentWord.substring(1, currentWord.length);
    }
    return result;
}

console.log(countChar("some teeeeeeext", "e"));
console.log(convertToCamelCase("The quick brown fox jumps over the lazy dog"));