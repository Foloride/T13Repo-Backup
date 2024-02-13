function gcd(a, b) {
    while (true) {
        if (a > b) {
            let rest = a % b;
            if (rest === 0) {
                return b;
            } else {
                a = b;
                b = rest;
            }
        } else if (b > a) {
            let rest = b % a;
            if (rest === 0) {
                return a;
            } else {
                b = a;
                a = rest;
            }
        } else {
            return a;
        }
    }
}

function isRelativePrime(a, b) {
    return gcd(a, b) == 1;
}

let num1 = 42;
let num2 = 18;

document.write(`${num1} és ${num2} ${isRelativePrime(num1, num2) ? "" : "nem"} relatív prím.`)