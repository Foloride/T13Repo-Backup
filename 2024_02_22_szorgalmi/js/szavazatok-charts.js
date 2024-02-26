// https://www.w3schools.com/js/js_graphics_chartjs.asp
// https://www.chartjs.org/docs/latest/developers/api.html

let donutChart = null;
let barCharts = [];

function LoadCharts() {
    if (donutChart === null) {
        CreateCharts();
    } else {
        ReloadCharts();
    }
}

function ReloadCharts() {
    donutChart = CreateDonutChart();
    let i = 0;
    for (const value of Object.values(Parties)) {
        barCharts[i] = CreateBarChart("bar-chart-" + i, value.shortName);
        i++;
    }
}

function DestroyCharts() {
    donutChart?.destroy();
    for (const chart of barCharts) {
        chart.destroy();
    }
}

function CreateCharts() {
    let newChart1 = document.createElement("canvas");
    newChart1.id = "donut-chart";
    newChart1.classList.add("chart-big", "col-12");
    document.getElementById("main-chart-container").appendChild(newChart1);
    donutChart = CreateDonutChart();
    let i = 0;
    for (const value of Object.values(Parties)) {
        let newChart = document.createElement("canvas");
        newChart.id = "bar-chart-" + i;
        newChart.classList.add("chart", "col-12", "col-sm-6");
        document.getElementById("barchart-container").appendChild(newChart);
        barCharts.push(CreateBarChart("bar-chart-" + i, value.shortName));
        i++;
    }
}

function CreateDonutChart() {
    return new Chart("donut-chart", {
        type: "doughnut",
        data: {
            labels: Object.keys(Parties),
            datasets: [{
                backgroundColor: ["green", "red", "deepskyblue", "orange", "grey"],
                data: Object.values(GetSumCountOfVotesPerParty())
            }]
        },
        options: {
            legend: { display: true },
            title: { display: false }
        }
    });
}

function CreateBarChart(chartID, party) {
    return new Chart(chartID, {
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
                text: party
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