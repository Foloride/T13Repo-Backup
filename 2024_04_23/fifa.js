var csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];
function SolveAll() {
    F1();
    F2();
    F3();
    F4();
    F5();
    F6();
}
function WriteToId(id, text) {
    document.querySelector("#".concat(id)).innerHTML = text;
}
function F1() {
    WriteToId("f1", "A list\u00E1n \u00F6sszesen <b>".concat(CountTeams(), "</b> csapat szerepel."));
}
function F2() {
    WriteToId("f2", "A csapatok \u00E1tlagpontsz\u00E1ma <b>".concat(GetAveragePoints(), " pont</b>."));
}
function F3() {
    var teams = GetTeamsAboveAverage();
    var table = document.querySelector("#t3");
    for (var _i = 0, teams_1 = teams; _i < teams_1.length; _i++) {
        var team = teams_1[_i];
        var newRow = table.insertRow();
        newRow.insertCell().innerHTML = team.name;
        newRow.insertCell().innerHTML = team.place.toString();
        newRow.insertCell().innerHTML = team.placeChange.toString();
        newRow.insertCell().innerHTML = team.points.toString();
    }
}
function F4() {
    var mostImprovedTeam = GetMostImprovedTeam()[0];
    WriteToId("f4", "A legt\u00F6bbet jav\u00EDt\u00F3 csapat <b>".concat(mostImprovedTeam.name, "</b>. \u00D6sszesen <b>").concat(mostImprovedTeam.points, " pontot</b> \u00E9rtek el \u00E9s \u00EDgy <b>").concat(mostImprovedTeam.place, "</b>. helyez\u00E9st \u00E9rtek el."));
}
function F5() {
    var countryInput = document.querySelector("#country");
    var teamName = countryInput.value;
    WriteToId("f5", "'".concat(teamName, "' <b>").concat(IsTeamPartOfList(teamName) ? "megtalálható" : "nem található meg", "</b> a ranglist\u00E1n."));
}
function F6() {
    var data = GetTeamChangesStatistics();
    var table = document.querySelector("#t6");
    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
        var _b = _a[_i], placeChange = _b[0], teams = _b[1];
        var newrow = table.insertRow();
        var placeChangeCell = newrow.insertCell();
        placeChangeCell.innerHTML = placeChange;
        var teamsCountCell = newrow.insertCell();
        teamsCountCell.innerHTML = teams.length;
        newrow.insertCell().innerHTML = teams[0].name;
        newrow.insertCell().innerHTML = teams[0].place;
        newrow.insertCell().innerHTML = teams[0].points;
        for (var _c = 0, teams_2 = teams; _c < teams_2.length; _c++) {
            var team = teams_2[_c];
            if (team == teams[0])
                continue;
            var nextRowInGroup = table.insertRow();
            nextRowInGroup.insertCell().innerHTML = team.name;
            nextRowInGroup.insertCell().innerHTML = team.place;
            nextRowInGroup.insertCell().innerHTML = team.points;
        }
        placeChangeCell.setAttribute("rowspan", teams.length);
        teamsCountCell.setAttribute("rowspan", teams.length);
    }
}
var Teams = GetTeamDataObject();
function GetTeamDataObject() {
    var data = [];
    for (var _i = 0, csapatAdat_1 = csapatAdat; _i < csapatAdat_1.length; _i++) {
        var line = csapatAdat_1[_i];
        var lineData = line.split(";");
        data.push({
            name: lineData[0],
            place: Number(lineData[1]),
            placeChange: Number(lineData[2]),
            points: Number(lineData[3])
        });
    }
    return data;
}
function CountTeams() {
    return Teams.length;
}
function GetAveragePoints() {
    return Teams.reduce(function (total, next) { return total + next.points; }, 0) / CountTeams();
}
function GetTeamsAboveAverage() {
    return Teams.filter(function (t) { return t.points > GetAveragePoints(); });
}
function GetMostImprovedTeam() {
    return Teams.filter(function (t) {
        return t.placeChange === Math.max.apply(Math, Teams.filter(function (t) {
            return t.placeChange > 0;
        })
            .map(function (t) { return t.placeChange; }));
    });
}
/**
 * @param {string} countryName
 */
function IsTeamPartOfList(countryName) {
    return Teams.some(function (t) { return t.name.toLowerCase() === countryName.toLowerCase(); });
}
function GetTeamChangesStatistics() {
    var result = {};
    for (var _i = 0, Teams_1 = Teams; _i < Teams_1.length; _i++) {
        var team = Teams_1[_i];
        if (result[team.placeChange] === undefined) {
            result[team.placeChange] = [team];
        }
        else {
            if (!result[team.placeChange].includes(team)) {
                result[team.placeChange].push(team);
            }
        }
    }
    return result;
}
//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)
