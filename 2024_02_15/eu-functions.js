// @ts-check
function GetMemberCount() {
    return EuropaiUnio.length;
}

/**
 * @param {string | number} year
 */
function GetMembersJoinedInYear(year) {
    let result = 0;
    for (const joinInfo of EuropaiUnio) {
        if (joinInfo.csatlakozas.startsWith(year + "")) {
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
        if (joinInfo.orszag.toLowerCase() === countryName.toLowerCase()) {
            return true;
        }
    }
    return false;
}

/**
 * @param {number} month
 */
function AreJoinsInMonth(month) {
    for (const joinInfo of EuropaiUnio) {
        if (Number(joinInfo.csatlakozas.split(".")[1]) === month) {
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