# 6. Feladat megoldásának magyarázata

## Elöszó
A megoldás megértésében segít, ha tudjuk hogyan müködik egy `for-of`-ciklus, mivel az jelentösen egyszerüsíti a kódunkat és megkönnyíti a megértését.  
Alábbiakban amikor `for`-ciklusról van szó, ott `for-of`-ciklus értendö.

## Objektum leírása
Az objektum értékeinek neve a helyváltozásokat írja le, pl. 0, 1, stb...  
Értéknek a bizonyos helyváltozásoknál egy tömböt képezünk az annak megfelelö csapat-objektumokból.  
Például: az objektum 0-nevü értéke egy tömb, ami azokból a csapatokból épül fel, amelyeknek a helyváltozása 0 volt. `"0": [<csapatok>]`  

## Objektum felépítése

```js
// elkészítjük a visszatérö objektumunkat amit a ciklusban feltöltünk
let adatok = {};
// bejárjuk az összes csapatot 
for (const csapat of csapatAdatok) {
    // leellenörizzük hogy létezik e már egy tömb a helyváltozáshoz
    if (adatok[csapat.helyvaltozas] === undefined) {
        // ha nem, akkor adunk értékül egy új tömböt, aminek egy eleme van, az adott csapat.
        adatok[csapat.helyvaltozas] = [csapat];
    } else {
        // ha létezik már egy tömb, megnézzük hogy az adott csapat benne van e, 
        // így kizárva a lehetöségét a többszörös adat hozzáadásnak
        if (!adatok[csapat.helyvaltozas].includes(csapat)) {
            // ha még nincs benne akkor csak egyszerüen pusholjuk a csapatot a meglévö tömbbe
            adatok[csapat.helyvaltozas].push(csapat);
        }
    }
}
return adatok;
```

## Objektum kiértékelése
A hozzáférés az immár kategorizált csapatokhoz nagyon egyszerü:  
- `adatok.0` => `[<0 változással rendelkezö csapatok>]`  
- `adatok.1` => `[<1 változással rendelkezö csapatok>]`  

### Object.entries()
Egy `for`-ciklusban viszont még egyszerübb, mivel az `Object.entries()` egy 2-dimenzionális tömböt ad vissza (*Returns an array of key/values of the enumerable properties of an object*) pl. `[[key1, value1], [key2, value2], [key3, value3] ...]`  
A mi példánknál ez így néz ki:  
```js
[
    ["0", [/*csapatok...*/]],
    ["1", [/*csapatok...*/]],
    ["2", [/*csapatok...*/]],
    ...
]
```
Ezáltal minden egyes ciklusban következö információink vannak meg:  
- mennyi a csapatok helyváltozása
- melyek ezek a csapatok
- mivel tömbben kapjuk az adatokat, ezért azt is tudjuk hogy hány ilyen csapat van a `length` segítségével.

`for`-ciklusunk következöképp néz ki: 
```js
for (const [helyvaltozas, csapatok] of Object.entries(adatok)) {
}
```

### Kód magyarázata
Immár fel tudjuk építeni soronként a táblázatunkat:
```js
// statisztika-adatok beszerzése
let adatok = GetTeamChangesStatistics();
let table = document.querySelector("#t6");
// táblázatunk következöképp épül fel:
/*
    | Helyváltozás | Csapatok száma | Csapatnév | Csapathelyezés | Csapat pontszáma |
*/

// javítási lehetöség: itt táblázatürítö metódus meghívása

// bejárjuk a statisztikánkat
for (const [helyvaltozas, csapatok] of Object.entries(adatok)) {
    // új sor a táblázatba
    let ujCsoportosSor = table.insertRow();
    // változóba írjuk a helyváltozás celláját és beleírjuk az értéket
    // változóra szükségünk van, hogy késöbb meg tudjuk adni a rowspan-tulajdonságot
    let helyvaltozasCell = ujCsoportosSor.insertCell();
    helyvaltozasCell.innerHTML = helyvaltozas;
    // ugyanígy járunk el a csapatok száma cellájával
    let csapatokSzamaCell = ujCsoportosSor.insertCell();
    csapatokSzamaCell.innerHTML = csapatok.length;
    // beírjuk a sorba a csapatok-tömbben szereplö elsö csapatnak az adatait
    // itt nem szükséges a változó, mivel csak az innerHTML-tulajdonságok változtatjuk
    ujCsoportosSor.insertCell().innerHTML = csapatok[0].nev;
    ujCsoportosSor.insertCell().innerHTML = csapatok[0].helyezes;
    ujCsoportosSor.insertCell().innerHTML = csapatok[0].pontszam;
    // utána bejárjuk a csapatok-tömbböt, hogy az összes csapat adatát beírjuk
    for (const csapat of csapatok) {
        // mivel az elsö csapat már szerepel a táblázatban, átugorjuk a ciklust
        if (csapat == csapatok[0]) continue;

        // létrehozunk még egy sort a táblázatba
        let ujReszletesSor = table.insertRow();
        // itt csak 3 oszlopot adunk meg neki, mivel azt akarjuk,
        // hogy a csapatok száma és a helyváltozás több soron keresztül nyúljon 
        ujReszletesSor.insertCell().innerHTML = csapat.nev;
        ujReszletesSor.insertCell().innerHTML = csapat.helyezes;
        ujReszletesSor.insertCell().innerHTML = csapat.pontszam;
    }
    // miután végeztünk a csapatok részletes felsorolásával, megadjuk a fent létrehozott
    // celláknak a rowspan-tulajdonságát. Ez a csapatok számával, azaz a tömb
    // length-tulajdonságával kell hogy megegyezzen 
    helyvaltozasCell.setAttribute("rowspan", csapatok.length);
    csapatokSzamaCell.setAttribute("rowspan", csapatok.length);
    // ez megismétlödik minden helyváltozásnak, az objektumunk szerkezetének köszönhetöen.
}
```

## Konkrét objektum, amivel visszatérünk a statisztika-funkciónkkal (angol)
```json
    "0": [
        {
            "name": "Anglia",
            "place": 4,
            "placeChange": 0,
            "points": 1662
        },
        {
            "name": "Argentína",
            "place": 10,
            "placeChange": 0,
            "points": 1614
        },
        {
            "name": "Belgium",
            "place": 1,
            "placeChange": 0,
            "points": 1752
        },
        {
            "name": "Mexikó",
            "place": 12,
            "placeChange": 0,
            "points": 1603
        },
        {
            "name": "Peru",
            "place": 19,
            "placeChange": 0,
            "points": 1551
        },
        {
            "name": "Svájc",
            "place": 11,
            "placeChange": 0,
            "points": 1604
        },
        {
            "name": "Svédország",
            "place": 18,
            "placeChange": 0,
            "points": 1560
        },
        {
            "name": "Szenegál",
            "place": 20,
            "placeChange": 0,
            "points": 1546
        }
    ],
    "1": [
        {
            "name": "Franciaország",
            "place": 2,
            "placeChange": 1,
            "points": 1725
        },
        {
            "name": "Olaszország",
            "place": 15,
            "placeChange": 1,
            "points": 1583
        },
        {
            "name": "Portugália",
            "place": 5,
            "placeChange": 1,
            "points": 1643
        }
    ],
    "2": [
        {
            "name": "Spanyolország",
            "place": 7,
            "placeChange": 2,
            "points": 1631
        }
    ],
    "3": [
        {
            "name": "Hollandia",
            "place": 13,
            "placeChange": 3,
            "points": 1586
        }
    ],
    "-1": [
        {
            "name": "Brazília",
            "place": 3,
            "placeChange": -1,
            "points": 1719
        },
        {
            "name": "Dánia",
            "place": 14,
            "placeChange": -1,
            "points": 1584
        },
        {
            "name": "Horvátország",
            "place": 8,
            "placeChange": -1,
            "points": 1625
        },
        {
            "name": "Kolumbia",
            "place": 9,
            "placeChange": -1,
            "points": 1622
        },
        {
            "name": "Németország",
            "place": 16,
            "placeChange": -1,
            "points": 1580
        },
        {
            "name": "Uruguay",
            "place": 6,
            "placeChange": -1,
            "points": 1639
        }
    ],
    "-3": [
        {
            "name": "Chile",
            "place": 17,
            "placeChange": -3,
            "points": 1576
        }
    ]
}
```