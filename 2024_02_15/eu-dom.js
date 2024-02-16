window.onload = () => {
    F1();
}

function WriteInnerHtmlToId(id, text) {
    document.querySelector(id).innerHTML = text;
}

function F1() {
    WriteInnerHtmlToId("#f1", `Az EU tagállamainak száma ${GetMemberCount()}.`);
}

function F2() {
    let selectedYear = document.querySelector("#joining-year").value;
    WriteInnerHtmlToId("#f2", `${selectedYear} évben ${GetMembersJoinedInYear(selectedYear)} ország csatlakozott`);
}

function F3() {
    let country = document.querySelector("#country").value;
    WriteInnerHtmlToId("#f3", `'${country}' ${IsCountryMember(country) ? "" : "nem "}tagja az EU-nak.`);
}

function F4() {
    let monthSelector = document.querySelector("#month");
    let month = Number(monthSelector.value);
    let monthName = monthSelector.options[month - 1].innerHTML;
    WriteInnerHtmlToId("#f4", `${monthName} hónapban ${AreJoinsInMonth(month) ? "" : "nem "}volt csatlakozás.`);
}

function F5() {
    let lastCountryToJoin = GetLastJoinedCountry();
    WriteInnerHtmlToId("#f5", `Legutolsó ország aki csatlakozott: ${lastCountryToJoin.orszag}, csatlakozása: ${lastCountryToJoin.csatlakozas}`);
}

function F6() {
    let yearlyJoins = GetYearlyJoiningStatistics();
    let table = document.querySelector("#f6");
    for (const [key, values] of Object.entries(yearlyJoins)) {
        let tr = table.insertRow(1);
        let tdYear = tr.insertCell(0);
        tdYear.setAttribute("rowSpan", values.length);
        let tdFirstCountry = tr.insertCell(1);
        tdYear.innerHTML = key;
        tdFirstCountry.innerHTML = values[0];
        for (const country of values) {
            if (country == values[0]) continue;
            let newRow = table.insertRow(1);
            newRow.insertCell(0).innerHTML = "";
            newRow.insertCell(1).innerHTML = country;
        }
    }
}