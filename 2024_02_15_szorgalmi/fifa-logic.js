// @ts-check
const TeamData = GetTeamDataObject();

function GetTeamDataObject() {
    let data = [];
    for (const line of csapatAdat) {
        let lineData = line.split(";");
        data.push({
            name: lineData[0],
            place: Number(lineData[1]),
            placeChange: Number(lineData[2]),
            points: Number(lineData[3])
        })
    }
    return data;
}

function CountTeams() {
    return TeamData.length;
}

function GetAveragePoints() {
    let sum = 0;
    for (const team of TeamData) {
        sum += team.points;
    }
    return sum / CountTeams();
}

function GetTeamsAboveAverage() {
    let result = [];
    let average = GetAveragePoints();
    for (const team of TeamData) {
        if (team.points > average) {
            result.push(team);
        }
    }
    return result;
}

function GetMostImprovedTeam() {
    let result = TeamData[0];
    for (const team of TeamData) {
        if (team.placeChange > 0 && team.placeChange > result.placeChange) {
            result = team;
        }
    }
    return result;
}

/**
 * @param {string} countryName
 */
function IsTeamPartOfList(countryName) {
    for (const team of TeamData) {
        if (team.name.toLowerCase() === countryName.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function GetTeamChangesStatistics() {
    let result = {};
    for (const team of TeamData) {
        if (result[team.placeChange] === undefined) {
            result[team.placeChange] = [team];
        } else {
            if (!result[team.placeChange].includes(team)) {
                result[team.placeChange].push(team);
            }
        }
    }
    return result;
}