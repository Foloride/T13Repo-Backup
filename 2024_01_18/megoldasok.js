// 1. Feladat
function PrimEljaras(szam){
    let hasDivisors = false;
    for (let i = 2; i < szam; i++){
        if (szam % i === 0){
            hasDivisors = true;
        }
    }
    console.log(`${szam} ${hasDivisors ? "nem" : ""} prím szám`);
}

// 2. Feladat
function Koordinata(x, y){
    if (x > 0 && y > 0){
        console.log(`(${x}, ${y}): 1. negyed`);
    } else if (x < 0 && y > 0){
        console.log(`(${x}, ${y}): 2. negyed`);
    } else if (x < 0 && y < 0){
        console.log(`(${x}, ${y}): 3. negyed`);
    } else if (x > 0 && y < 0){
        console.log(`(${x}, ${y}): 4. negyed`);
    } else if (x === 0 && y === 0){
        console.log(`(${x}, ${y}): Origo`);
    } else if (x === 0){
        console.log(`(${x}, ${y}): x-Tengely`);
    } else {
        console.log(`(${x}, ${y}); y-Tengely`);
    }
}

// 3. Feladat
function MelyikANagyobb(szamEgy, szamKetto, szamHarom){
    // return Math.max([szamEgy, szamKetto, szamHarom]);
    let nums = [szamEgy, szamKetto, szamHarom];
    let max = nums[0];
    for (let i = 0; i < 3; i++){
        if (nums[i] > max){
            max = nums[i];
        }
    }
    return max;
}

// 4. Feladat
function SzorgalomSzovegesErtekeles(jegy){
    if (jegy === 5){
        console.log(`${jegy} - kitünö`);
    } else if (jegy === 4){
        console.log(`${jegy} - jeles`);
    } else if (jegy === 3){
        console.log(`${jegy} - jó`);
    } else if (jegy === 2){
        console.log(`${jegy} - elégséges`);
    } else if (jegy === 1){
        console.log(`${jegy} - elégtelen`);
    } else{
        console.log(`Hibás adat`);
    }
}

// 5. Feladat
function TizennyolcPlusz(kor){
    return kor > 18;
}

// 6. Feladat
function LNKO(szamEgy, szamKetto){
    let a = szamEgy;
    let b = szamKetto;
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

// 7. Feladat
function SzamtaniSorozatGenerator(elsoElem, kulonbseg, elemSzam){
    let szamtaniSorozat = [];
    for (let i = elsoElem; i < kulonbseg * elemSzam + elsoElem; i+=kulonbseg){
        szamtaniSorozat.push(i);
    }
    console.log(szamtaniSorozat);
}

// 8. Feladat
function PrimFuggveny(vizsgaltSzam){
    for (let i = 2; i < vizsgaltSzam; i++){
        if (vizsgaltSzam % i === 0){
            return false;
        }
    }
    return true;
}

// 9. Feladat
function ParosGenerator(alsoHatar, felsoHatar){
    if (alsoHatar === felsoHatar){
        return NaN;
    }

    let randomNumber = Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
    if (randomNumber % 2 === 0){
        return randomNumber
    } else if (randomNumber === felsoHatar){
        return randomNumber - 1;
    } else {
        return randomNumber + 1
    }
}

// 10. Feladat
function KettoHatvanyai(elemSzam){
    let results = [];
    for (let i = 0; i < elemSzam; i++){
        results.push(2**i);
    }
    console.log(results);
}

// 11. Feladat
function SzerkeszthetoHaromszog(a, b, c){
    return a+b > c 
        && b+c > a
        && a+c > b;
}

// 12. Feladat
function NegyzetKerulet(a){
    return 4*a;
}

function NegyzetTerulet(a){
    return a*a;
}

function EredmenyKiirato(){
    let a = 4;
    console.log(`a = ${a}; t = ${NegyzetTerulet(a)}; k = ${NegyzetKerulet(a)}`);
}