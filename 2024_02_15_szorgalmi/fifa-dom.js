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
        newRow.insertCell().innerHTML = team.place;
        newRow.insertCell().innerHTML = team.placeChange;
        newRow.insertCell().innerHTML = team.points;
    }
}

function F4() {
    let mostImprovedTeam = GetMostImprovedTeam();
    WriteToId("f4", `A legtöbbet javító csapat <b>${mostImprovedTeam.name}</b>. Összesen <b>${mostImprovedTeam.points} pontot</b> értek el és így <b>${mostImprovedTeam.place}</b>. helyezést értek el.`);
}

function F5() {
    let teamName = document.querySelector("#country").value;
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
            if (team == teams[0]) continue;

            let nextRowInGroup = table.insertRow();
            nextRowInGroup.insertCell().innerHTML = team.name;
            nextRowInGroup.insertCell().innerHTML = team.place;
            nextRowInGroup.insertCell().innerHTML = team.points;
        }
        placeChangeCell.setAttribute("rowspan", teams.length);
        teamsCountCell.setAttribute("rowspan", teams.length);
    }
}