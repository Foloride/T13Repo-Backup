function CreateCharts() {
    CreateChart1();
    let i = 0;
    for (const value of Object.values(Parties)) {
        let newChart = document.createElement("canvas");
        newChart.id = "chart2-" + i;
        newChart.classList.add("chart", "col-12", "col-sm-6");
        document.getElementById("chart-container").appendChild(newChart);
        CreateChart2("chart2-" + i, value.shortName);
        i++;
    }
}

function CreateChart1() {
    new Chart("chart1", {
        type: "doughnut",
        data: {
            labels: Object.keys(Parties),
            datasets: [{
                backgroundColor: ["green", "red", "deepskyblue", "orange", "grey"],
                data: Object.values(GetSumCountOfVotesPerParty())
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Szavazatok mennyisége"
            }
        }
    });
}

function CreateChart2(chartID, party) {
    new Chart(chartID, {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
            datasets: [{
                backgroundColor: [
                    '#FF5733',
                    '#6C5B7B',
                    '#C70039',
                    '#2E8B57',
                    '#FFC300',
                    '#6495ED',
                    '#FF6347',
                    '#8A2BE2'
                ],
                data: Object.values(GetCountOfVotesPerAreaForParty(party))
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: `Szavazatok mennyisége (${party})`
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function GetCountOfVotesPerAreaForParty(party) {
    let result = {};
    let data = GetGrouping("area");
    for (let i = 1; i <= 8; i++) {
        for (const candidate of data[i]) {
            if (candidate.party.shortName === party) {
                if (result[i] === undefined) {
                    result[i] = candidate.voteCount;
                } else {
                    result[i] += candidate.voteCount;
                }
            }
        }
    }

    return result;
}