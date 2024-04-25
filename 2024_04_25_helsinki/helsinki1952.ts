let helsinki = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak-kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak-kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat"
]

interface PlaceData {
    place: number;
    contestantCount: number;
    category: string;
    sport: string;
}

interface MedalData {
    gold: number;
    silver: number;
    bronze: number;
}

const places: PlaceData[] = GenerateData();

function GenerateData(): PlaceData[] {
    return helsinki.map((value, index, array) => {
        let columns: string[] = value.split(" ");
        return {
            place: Number(columns[0]),
            contestantCount: Number(columns[1]),
            category: columns[2],
            sport: columns[3]
        };
    });
}

function CountAllContestants(): number {
    return places.reduce(SumContestants, 0);
}

function SumContestants(total: number, next: PlaceData): number {
    return total + next.contestantCount;
}

function GetMedalsData(data: PlaceData[]): MedalData {
    const firstPlaces: PlaceData[] = GetPlaceDataForPlace(data, 1);
    const secondPlaces: PlaceData[] = GetPlaceDataForPlace(data, 2);
    const thirdPlaces: PlaceData[] = GetPlaceDataForPlace(data, 3);
    return {
        gold: firstPlaces.length,
        silver: secondPlaces.length,
        bronze: thirdPlaces.length
    }
}

function GetPlaceDataForPlace(data: PlaceData[], place: number): PlaceData[] {
    return data.filter((value) => value.place === place);
}

function GetSumOfPoints(): number {
    let sum = 0;
    let pointsReward = 7;
    for (let i = 1; i <= 6; i++) {
        sum += GetPlaceDataForPlace(places, i).length * pointsReward;

        // reduce pointsReward twice for the first iteration
        if (pointsReward === 7) pointsReward--;

        pointsReward--;
    }
    return sum;
}

function GetCategoryMedals(category: string): number {
    let data = GetMedalsData(places.filter((value) => value.category === category));
    return data.gold + data.silver + data.bronze;
}

function CreateNewArrayWithoutTypo(): PlaceData[] {
    let newData: PlaceData[] = [];
    places.forEach(element => {
        if (element.category === "kajakkenu") {
            element.category = "kajak-kenu";
        }
        newData.push(element);
    });
    return newData;
}

function CreateStringDataArray(): string[] {
    let result: string[] = [];
    CreateNewArrayWithoutTypo().forEach(element => {
        result.push(`${element.place} ${element.contestantCount} ${element.category} ${element.sport}`);
    });
    return result;
}

function GetPlaceDataWithMostContestants(): PlaceData {
    return places.filter(value =>
        value.contestantCount === Math.max(...places.map(value => value.contestantCount)))[0];
}

function SolveTasks(): void {
    console.log("3. Feladat:");
    console.log("Pontszerzö helyezések száma: " + places.length);
    console.log("4. Feladat:");
    console.log("Arany: " + GetMedalsData(places).gold);
    console.log("Ezüst: " + GetMedalsData(places).silver);
    console.log("Bronz: " + GetMedalsData(places).bronze);
    console.log("5. Feladat:");
    console.log("Olimpiai pontok száma: " + GetSumOfPoints());
    console.log("6. Feladat:");
    if (GetCategoryMedals("torna") > GetCategoryMedals("uszas")) {
        console.log("Torna sportágban szereztek több érmet");
    } else if (GetCategoryMedals("torna") < GetCategoryMedals("uszas")) {
        console.log("Úszás sportágban szereztek több érmet");
    } else {
        console.log("Egyenlö volt az érmek száma");
    }
    console.log("8. Feladat:");
    console.log("Helyezés: " + GetPlaceDataWithMostContestants().place);
    console.log("Sportág: " + GetPlaceDataWithMostContestants().category);
    console.log("Versenyszám: " + GetPlaceDataWithMostContestants().sport);
    console.log("Sportolók száma: " + GetPlaceDataWithMostContestants().contestantCount);
}

SolveTasks();