window.onload = () => {
    SetActiveNavElement("home");
    PopulatePartiesSelect();
};

function SetActiveNavElement(id) {
    document.getElementById(id).style.fontWeight = "bold"
    for (const link of document.getElementsByClassName("nav-link")) {
        if (link.id === id) continue;

        link.style.fontWeight = "unset";
    }
    NavigateTo(`${id}-page`);
}

function NavigateTo(pageName) {
    document.getElementById(pageName).style.display = "block";
    for (const elem of document.getElementsByClassName("container")[0].children) {
        if (elem.id === pageName) continue;

        elem.style.display = "none";
    }
    if (pageName === "stats-page") {
        LoadCharts();
    } else {
        DestroyCharts();
    }
}

function PopulatePartiesSelect() {
    let selectElement = document.getElementById("f2-select");
    let dummyElement = document.createElement("option");
    dummyElement.value = -1;
    dummyElement.innerHTML = "-- Kérem válasszon --";
    selectElement.appendChild(dummyElement);
    for (const [shortName, party] of Object.entries(Parties)) {
        let optionElement = document.createElement("option");
        optionElement.value = shortName;
        optionElement.innerHTML = party.fullName;
        selectElement.appendChild(optionElement);
    }
}

function F1() {
    document.getElementById("f1").innerHTML = `Az idei választásokon <b>${GetAllCandidateCount()}</b> képviselőjelölt indult.`
}

function F2() {
    let select = document.getElementById("f2-select")
    let selectedValue = select.value;
    ClearList("f2-list");
    if (selectedValue != -1) {
        let candidatesForSelectedParty = GetGroupedCandidates(selectedValue);
        document.getElementById("f2-text").innerHTML = `A <b>${select.selectedOptions[0].innerHTML}</b> idén <b>${candidatesForSelectedParty.length}</b> jelöltet indított.`;
        FillList("f2-list", GetPropertyValuesFromObjectList(candidatesForSelectedParty, "name"));
    }
}

function ClearList(listID) {
    document.getElementById(listID).innerHTML = "";
}

function FillList(listID, values) {
    let list = document.getElementById(listID);
    let i = 0;
    for (const candidateName of values) {
        setTimeout(() => {
            let listElement = document.createElement("li");
            listElement.innerHTML = candidateName;
            list.appendChild(listElement);
        }, i * 100);
        i++;
    }
}

function F3() {
    let inputValue = document.getElementById("f3-input").value;
    let data = GetFilteredDataForName(inputValue);
    let answer = "lyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
    if (data.length > 0) {
        answer = `${data[0].name} összesen <b>${data[0].voteCount}</b> szavazatot kapott.`;
    }
    document.getElementById("f3-text").innerHTML = answer;
}

function F4() {
    document.getElementById("f4").innerHTML = `A választáson ${CountAllVotes(Votes).toLocaleString()} állampolgár, a jogosultak ${100 * (GetRatioOfVoters().toFixed(4))} %-a vett részt.`;
}

function F5() {
    ClearTable("t5");
    let data = GetSumCountOfVotesPerParty();
    let table = document.getElementById("t5");
    let i = 0;
    for (const [party, voteCount] of Object.entries(data)) {
        setTimeout(() => {
            let newRow = table.insertRow();
            newRow.insertCell().innerHTML = `${Parties[party].fullName} (${party})`;
            newRow.insertCell().innerHTML = voteCount;
        }, i * 100);
        i++;
    }
}

function ClearTable(tableID) {
    let table = document.getElementById(tableID);
    while (table.rows.length > 1) {
        table.deleteRow(table.rows.length - 1);
    }
}

function F6() {
    ClearList("f6");
    let data = GetCandidatesWithMostVotes();
    let listElements = [];
    for (const candidate of data) {
        listElements.push(`${candidate.name}, ${candidate.party.fullName} (${candidate.voteCount} szavazat)`);
    }
    FillList("f6", listElements);
}

function F7() {
    ClearTable("t7");
    let data = GetWinnersForAreas();
    let table = document.getElementById("t7");
    let i = 0;
    for (const [area, candidate] of Object.entries(data)) {
        setTimeout(() => {
            let newRow = table.insertRow();
            newRow.insertCell().innerHTML = area;
            newRow.insertCell().innerHTML = `${candidate.name}, ${candidate.party.fullName}, ${candidate.voteCount} szavazattal`;
            window.scrollTo(0, document.body.scrollHeight);
        }, i * 100);
        i++;
    }
}