// Molnár Márk, Team13

function GenerateArray(size, from, to){
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(Math.round(Math.random()*(to-from))+from);
    }
    return result;
}

function Sum(array){
    let sum = 0;
    for (const elem of array) {
        sum += elem;
    }
    return sum;
}

function WriteSum(array){
    console.log(`összege ${Sum(array)}`);
}

function Avg(array){
    return Sum(array) / array.length;
}

function WriteAvg(array){
    console.log(`átlaga ${Avg(array)}`);
}

function Min(array){
    let minValue = array[0];
    for (const elem of array) {
        if (minValue > elem){
            minValue = elem;
        }
    }
    return minValue;
}

function WriteMin(array){
    console.log(`legkisebb értéke: ${Min(array)}`);
}

function Max(array){
    let maxValue = array[0];
    for (const elem of array) {
        if (maxValue < elem){
            maxValue = elem;
        }
    }
    return maxValue;
}

function WriteMax(array){
    console.log(`legnagyobb értéke: ${Max(array)}`);
}

function CountEven(array){
    let count = 0;
    for (const elem of array) {
        if (elem % 2 == 0){
            count++;
        }
    }
    return count;
}

function WriteCountEven(array){
    console.log(`páros számok száma: ${CountEven(array)}`);
}

function SelectEven(array){
    let evenNumbers = [];
    for (const elem of array) {
        if (elem % 2 == 0 && !evenNumbers.includes(elem)){
            evenNumbers.push(elem);
        }
    }
    return evenNumbers;
}

function WriteSelectEven(array){
    console.log(`páros száma(i): [${SelectEven(array)}]`);
}

function CountIsDivisor(array, divisor){
    let count = 0;
    for (const elem of array) {
        if (elem % divisor == 0){
            count++;
        }
    }
    return count;
}

function WriteCountIsDivisor(array, divisor){
    console.log(`számok száma amiknek ${divisor} osztója: ${CountIsDivisor(array, divisor)}`);
}

function SelectIsDivisor(array, divisor){
    let result = [];
    for (const elem of array) {
        if (elem % divisor == 0 && !result.includes(elem)){
            result.push(elem);
        }
    }
    return result;
}

function WriteSelectIsDivisor(array, divisor){
    console.log(`számok amiknek ${divisor} osztója: [${SelectIsDivisor(array, divisor)}]`);
}

let arr = GenerateArray(10, 0, 50);
console.log(`\n[${arr}]`)
WriteSum(arr);
WriteAvg(arr);
WriteMin(arr);
WriteMax(arr);
WriteCountEven(arr);
WriteSelectEven(arr);
WriteCountIsDivisor(arr, 5);
WriteSelectIsDivisor(arr, 5);
