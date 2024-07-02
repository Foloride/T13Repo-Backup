function TeglaTestFelszin(a, b, c) {
    return 2 * (a * b + b * c + c * a);
}

function TeglaTestTerfogat(a, b, c) {
    return a * b * c;
}

function PhErtek(vizsgaltErtek) {
    if (vizsgaltErtek > 7) {
        return "lugos";
    } else if (vizsgaltErtek < 7) {
        return "savas";
    } else {
        return "semleges";
    }
}

function ElsoNSzamOsszege(szamokMennyisege) {
    let result = 0;
    for (let i = 1; i <= szamokMennyisege; i++) {
        result += i;
    }
    return result;
}

function PrimekSzama(vizsgaltTomb) {
    let result = 0;
    for (const num of vizsgaltTomb) {
        if (IsPrime(num)) {
            result++;
        }
    }
    return result;
}

function IsPrime(number) {
    if (number === 1) {
        // 1 nem prím
        return false;
    } else if (number === 2) {
        // 2 prím
        return true;
    } else if (number % 2 === 0) {
        // minden 2-vel osztható szám nem prím
        return false;
    } else {
        // többit vizsgáljuk, optimalizálva
        for (let i = 3; i < Math.sqrt(number); i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function EkezetesBetukSzama(vizsgaltSzoveg) {
    let hungarianLetters = "áéíóúöőüű"
    let result = 0;
    for (const letter of vizsgaltSzoveg) {
        if (hungarianLetters.includes(letter.toLowerCase())) {
            result++;
        }
    }
    return result;
}

function SzamVisszafele(megforditandoSzam) {
    let numAsText = megforditandoSzam.toString();
    let result = numAsText[numAsText.length - 1];
    for (let i = numAsText.length - 2; i >= 0; i--) {
        result += numAsText[i];
    }
    return result;
}

function SportagHelyezesek(vizsgaltObjektumTomb, sportagNeve, keresettHelyezes) {
    let result = 0;
    for (const team of vizsgaltObjektumTomb) {
        if (team.sportag === sportagNeve && team.helyezes === keresettHelyezes) {
            result++;
        }
    }
    return result;
}