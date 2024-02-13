// @ts-check
const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]

// segédváltozó
const monthNamesAndNumbers = {
    "január": 1,
    "február": 2,
    "március": 3,
    "április": 4,
    "május": 5,
    "június": 6,
    "július": 7,
    "augusztus": 8,
    "szeptember": 9,
    "október": 10,
    "november": 11,
    "december": 12
};

// Megoldások kiíratása
Task1();
Task2();
Task3();
Task4();
Task5();
Task6();

// megoldó függvények meghívása metódusban
function Task1() {
    console.log(`Az EU-nak ${GetMemberCount()} tagja van.\n`);
}

function Task2() {
    let askedYear = 2007;
    console.log(`${askedYear} évben ${GetMembersJoinedInYear(askedYear)} ország csatlakozott.\n`);
}

function Task3() {
    let askedCountry = "Magyarország";
    console.log(`${askedCountry} ${IsCountryMember(askedCountry) ? "" : "nem"} csatlakozott az EU-hoz.\n`);
}

function Task4() {
    let askedMonth = "április";
    console.log(`${askedMonth[0].toUpperCase() + askedMonth.substring(1)} hónapban ${AreJoinsInMonth(askedMonth) ? "" : "nem"} volt csatlakozás.\n`);
}

function Task5() {
    console.log(`${GetLastJoinedCountry().orszag} csatlakozott utoljára.\n`);
}

function Task6() {
    console.log("Éves statisztika országok csatlakozásáról: ");
    let statistics = GetYearlyJoiningStatistics();
    for (const [key, value] of Object.entries(statistics)) {
        console.log(`${key}: ${value.length} (${value.join(",")})`);
    }
}

// megoldó függvények
function GetMemberCount() {
    return EuropaiUnio.length;
}

/**
 * @param {string | number} year
 */
function GetMembersJoinedInYear(year) {
    let result = 0;
    for (const joinInfo of EuropaiUnio) {
        // @ts-ignore
        if (joinInfo.csatlakozas.startsWith(year)) {
            result++;
        }
    }
    return result;
}

/**
 * @param {string} countryName
 */
function IsCountryMember(countryName) {
    for (const joinInfo of EuropaiUnio) {
        if (joinInfo.orszag === countryName) {
            return true;
        }
    }
    return false;
}

/**
 * @param {string | number} month
 */
function AreJoinsInMonth(month) {
    // @ts-ignore
    let monthNumber = isNaN(month) ? monthNamesAndNumbers[month.toLowerCase()] : month;
    for (const joinInfo of EuropaiUnio) {
        if (Number(joinInfo.csatlakozas.split(".")[1]) === monthNumber) {
            return true;
        }
    }
    return false;
}

function GetLastJoinedCountry() {
    let result = EuropaiUnio[0];
    for (const joinInfo of EuropaiUnio) {
        if (joinInfo.csatlakozas > result.csatlakozas) {
            result = joinInfo;
        }
    }
    return result;
}

function GetYearlyJoiningStatistics() {
    let result = {};
    for (const joinInfo of EuropaiUnio) {
        let joiningYear = joinInfo.csatlakozas.split(".")[0];
        if (result[joiningYear] === undefined) {
            result[joiningYear] = [joinInfo.orszag];
        } else {
            result[joiningYear].push(joinInfo.orszag);
        }
    }
    return result;
}