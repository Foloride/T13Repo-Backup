const csapatAdat = [
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
    document.querySelector(`#${id}`).innerHTML = text;
}
function F1() {
    WriteToId("f1", `A listán összesen <b>${CountTeams()}</b> csapat szerepel.`);
}
function F2() {
    WriteToId("f2", `A csapatok átlagpontszáma <b>${GetAveragePoints()} pont</b>.`);
}
function F3() {
    let teams = GetTeamsAboveAverage();
    let table = document.querySelector("#t3");
    for (const team of teams) {
        let newRow = table.insertRow();
        newRow.insertCell().innerHTML = team.name;
        newRow.insertCell().innerHTML = team.place.toString();
        newRow.insertCell().innerHTML = team.placeChange.toString();
        newRow.insertCell().innerHTML = team.points.toString();
    }
}
function F4() {
    let mostImprovedTeam = GetMostImprovedTeam()[0];
    WriteToId("f4", `A legtöbbet javító csapat <b>${mostImprovedTeam.name}</b>. Összesen <b>${mostImprovedTeam.points} pontot</b> értek el és így <b>${mostImprovedTeam.place}</b>. helyezést értek el.`);
}
function F5() {
    let countryInput = document.querySelector("#country");
    let teamName = countryInput.value;
    WriteToId("f5", `'${teamName}' <b>${IsTeamPartOfList(teamName) ? "megtalálható" : "nem található meg"}</b> a ranglistán.`);
}
function F6() {
    let data = GetTeamChangesStatistics();
    let table = document.querySelector("#t6");
    for (const [placeChange, teams] of Object.entries(data)) {
        let newrow = table.insertRow();
        let placeChangeCell = newrow.insertCell();
        placeChangeCell.innerHTML = placeChange;
        let teamsCountCell = newrow.insertCell();
        teamsCountCell.innerHTML = teams.length;
        newrow.insertCell().innerHTML = teams[0].name;
        newrow.insertCell().innerHTML = teams[0].place;
        newrow.insertCell().innerHTML = teams[0].points;
        for (const team of teams) {
            if (team == teams[0])
                continue;
            let nextRowInGroup = table.insertRow();
            nextRowInGroup.insertCell().innerHTML = team.name;
            nextRowInGroup.insertCell().innerHTML = team.place;
            nextRowInGroup.insertCell().innerHTML = team.points;
        }
        placeChangeCell.setAttribute("rowspan", teams.length);
        teamsCountCell.setAttribute("rowspan", teams.length);
    }
}
const Teams = GetTeamDataArray();
function GetTeamDataArray() {
    let data = [];
    for (const line of csapatAdat) {
        let lineData = line.split(";");
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
    return Teams.reduce((total, next) => total + next.points, 0) / CountTeams();
}
function GetTeamsAboveAverage() {
    return Teams.filter(t => t.points > GetAveragePoints());
}
function GetMostImprovedTeam() {
    return Teams.filter(t => t.placeChange === Math.max(...Teams.filter(t => t.placeChange > 0)
        .map(t => t.placeChange)));
}
/**
 * @param {string} countryName
 */
function IsTeamPartOfList(countryName) {
    return Teams.some(t => t.name.toLowerCase() === countryName.toLowerCase());
}
function GetTeamChangesStatistics() {
    let result = {};
    for (const team of Teams) {
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
