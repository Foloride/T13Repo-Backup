//Helyezés
//CsapatMeret
//SportAg
//VersenySzam
eredmenyek = [
    "1 1 atletika kalapacsvetes	",
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
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
];


const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "";
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const dbName = "t13";
const collectionName = "Helsinki";

async function initData() {
    const collection = client.db(dbName).collection(collectionName);

    try {
        if (await collection.countDocuments() > 0) {
            console.log("Nem szükséges az adatfeltöltés.");
            return;
        }

        const insertCount = await collection.insertMany(
            eredmenyek.map(e => {
                let rowData = e.split(" ");
                return {
                    position: Number(rowData[0]),
                    teamSize: Number(rowData[1]),
                    category: rowData[2],
                    sport: rowData[3]
                }
            })
        );
        console.log(`${insertCount.insertedCount} adat beillesztve.`);
    } catch (err) {
        console.error("Hiba történt az adatok feltöltése közben", err);
    }
}

async function getSpecificCategories(categories) {
    const collection = client.db(dbName).collection(collectionName);

    try {
        return collection.find({
            $or: categories.map(c => {
                return { category: { $eq: c } }
            })
        }).project({
            _id: 0, category: 1, sport: 1
        }).toArray();

    } catch (error) {
        console.error("Hiba történt az adatok lekérése közben", err);
    }
}

async function getPodiumSports() {
    const collection = client.db(dbName).collection(collectionName);

    try {
        return collection.find({
            $or: [1, 2, 3].map(p => {
                return { position: { $eq: p } }
            })
        }).toArray();

    } catch (error) {
        console.error("Hiba történt az adatok lekérése közben", err);
    }
}

async function getMaxTeamSizeData() {
    const collection = client.db(dbName).collection(collectionName);

    try {
        return collection.find()
            .sort({ teamSize: 1 })
            .limit(1)
            .toArray();

    } catch (error) {
        console.error("Hiba történt az adatok lekérése közben", err);
    }
}

async function getSoloWinnedSports() {
    const collection = client.db(dbName).collection(collectionName);

    try {
        return collection.find({
            $and: [
                { teamSize: 1 },
                { position: 1 }
            ]
        }).project({
            _id: 0, category: 1
        }).toArray();

    } catch (error) {
        console.error("Hiba történt az adatok lekérése közben", err);
    }
}

async function runTasks() {
    let data = {};
    console.log("-------------------------------------------------------");
    console.log("1 / 2. Feladat: Adatbázis létrehozása és adatok feltöltése");
    await initData();
    console.log("-------------------------------------------------------");
    console.log("3. Feladat: torna / úszás versenyszámok");
    data = await getSpecificCategories(["torna", "úszás"]);
    console.log(data);
    console.log("-------------------------------------------------------");
    console.log("4. Feladat: Dobogós helyezések versenyszámai");
    data = await getPodiumSports();
    console.log(data);
    console.log("-------------------------------------------------------");
    console.log("5. Feladat: Legnagyobb csapatméretü versenyszám");
    data = await getMaxTeamSizeData();
    console.log(data);
    console.log("-------------------------------------------------------");
    console.log("6. Feladat: Egyéni aranyérmek");
    data = await getSoloWinnedSports();
    console.log(data);

    client.close();
}

runTasks();
