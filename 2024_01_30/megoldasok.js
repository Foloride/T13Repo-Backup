function KarakterTabusito(szoveg, karakter){
    return szoveg.replaceAll(karakter, "");
}

function ToSnakeCase(text){
    let words = text.split(" ");
    let result = words[0].toLowerCase();
    words.shift();
    for (const word of words) {
        result += "_"+word.toLowerCase();
    }
    return result;
}

function Capitalize(text){
    return text[0] + text.substring(1).toLowerCase();
}

function ToPascalCase(text){
    let words = text.split(" ");
    let result = "";
    for (const word of words) {
        result += Capitalize(word);
    }
    return result;
}

function Backwards(text){
    return text.split("").reverse().join("");
}

function L33tSz0v3gG3n3r4t0r(text){
    return text.replaceAll("a", "4").replaceAll("A", "4")
        .replaceAll("e", "3").replaceAll("E", "3")
        .replaceAll("i", "1").replaceAll("I", "1")
        .replaceAll("o", "0").replaceAll("O", "0");
}

let text = "This is a very interesting text";
console.log(`Tabusito (e): ${KarakterTabusito(text, "e")}`);
console.log(`Capitalize: ${Capitalize(text)}`);
console.log(`PascalCase: ${ToPascalCase(text)}`);
console.log(`Backwards: ${Backwards(text)}`);
console.log(`snake_case: ${ToSnakeCase(text)}`);
console.log(`L33t: ${L33tSz0v3gG3n3r4t0r(text)}`);