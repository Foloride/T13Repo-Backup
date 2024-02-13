let taskCounter = 0;
function announceNextTask() {
    taskCounter++;
    writeLine(`<br><b>${taskCounter}. Feladat:</b>`);
}

function writeLine(str) {
    document.write(str + "<br>");
}

// 1. Feladat
announceNextTask();
let studentName = "Molnár Márk";
let teamID = 13;
let htmlUnderstanding = 100;
let cssUnderstanding = 80;
let jsUnderstanding = 100;
writeLine("Név: " + studentName);
writeLine("Csoportazonosító: " + teamID);
writeLine("HTML tudás szintje: " + htmlUnderstanding);
writeLine("CSS tudás szintje: " + cssUnderstanding);
writeLine("JS tudás szintje: " + jsUnderstanding);

// 2. Feladat
announceNextTask();
let num1 = Number(prompt("Adj meg egy számot: "));
let num2 = Number(prompt("Adj meg még egy számot: "));
writeLine(`${num1}^${num2} = ${num1 ** num2}`);

// 3. Feladat
announceNextTask();
let startNumber = Number(prompt("Add meg melyik számtól generáljak páros számokat (alsó határ)"));
let endNumber = Number(prompt("Add meg melyik számig generáljak páros számokat (felsö határ)"));
document.write(`Páros számok ${startNumber} és ${endNumber} közt: `);
for (let i = startNumber; i < endNumber; i += 2) {
    if (i % 2 != 0) {
        i++;
    }
    document.write(i + ", ");
}
writeLine("");

// 4. Feladat
announceNextTask();
let age = Number(prompt("Adj meg egy életkort 1 és 120 közt: "));
if (age < 0 || age > 120) {
    writeLine(`Hibás adat (${age})`);
} else if (age < 6) {
    writeLine("Kisgyermekkorban vagy")
} else if (age < 12) {
    writeLine("Gyermekkorban vagy")
} else if (age < 16) {
    writeLine("Serdülökorban vagy")
} else if (age < 20) {
    writeLine("Ifjúkorban vagy")
} else if (age < 30) {
    writeLine("Fiatal felnöttkorban vagy")
} else if (age < 60) {
    writeLine("Felnöttkorban vagy")
} else {
    writeLine("Aggkorban vagy")
}

// 5. Feladat
announceNextTask();
let divident = Number(prompt("Adj meg egy számot: "));
let divisor = Number(prompt("Adj meg egy osztót: "));
writeLine(`${divisor} ${divident % divisor == 0 ? "" : "nem"} osztója ${divident} számnak.`);

// 6. Feladat
announceNextTask();
document.write("Elsö 10 négyzetszám: ")
for (let i = 1; i <= 10; i++) {
    document.write(`${i ** 2}, `);
}
writeLine("");
