//Csapat
//Helyezes
//Valtozas
//Pontszam

const fifa = [
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
    "Uruguay;6;-1;1639",
];

const MongoClient = require("mongodb").MongoClient;
<<<<<<< HEAD
const url = "mongodb+srv://markmolnar77:@cluster0.l1fv90x.mongodb.net/";
=======
const url = "";
>>>>>>> 400be55ae486af6e6614d590a78ff3a020e7c67f

async function initData() {
    const client = await MongoClient.connect(url);
    const db = client.db("t13");
    const collection = db.collection("fifa");

    try {
        if (await collection.countDocuments() > 0) {
            console.log("Adatok már feltöltve...");
            client.close();
            return;
        }

        const muveletek = await collection.insertMany(
            fifa.map((e) => {
                let rowData = e.split(";");
                return {
                    csapat: rowData[0],
                    helyezes: Number(rowData[1]),
                    valtozas: Number(rowData[2]),
                    pontszam: Number(rowData[3])
                };
            }));

        console.log("Dokumentok feltöltése sikeres: ", muveletek.insertedCount, " adat feltöltésre került!");
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a csatlakozás vagy beszúrás közben.", err);
        client.close();
    }
}

async function getSortedData() {
    const client = await MongoClient.connect(url);
    const db = client.db("t13");
    const collection = db.collection("fifa");

    try {
        let data = await collection.find({}, { projection: { _id: 0, csapat: 1, helyezes: 1 } })
            .sort({ pontszam: -1 })
            .toArray();
        client.close();
        return data;
    } catch (err) {
        console.error("Hiba történt a rendezett adatok lekérésekor...", err);
        client.close();
    }
}

async function getTop3Teams() {
    const client = await MongoClient.connect(url);
    const db = client.db("t13");
    const collection = db.collection("fifa");

    try {
        let data = await collection.find()
            .sort({ pontszam: -1 })
            .limit(3)
            .toArray();
        client.close();
        return data;
    } catch (err) {
        console.error("Hiba történt a top 3 csapat lekérésekor...", err);
        client.close();
    }
}

async function getUnchangedTeams() {
    const client = await MongoClient.connect(url);
    const db = client.db("t13");
    const collection = db.collection("fifa");

    try {
        let data = await collection.find({ valtozas: { $eq: 0 } }).toArray();
        client.close();
        return data;
    } catch (err) {
        console.error("Hiba történt a nem változott csapatok lekérésekor...", err);
        client.close();
    }
}

async function getMoreThan1600Points() {
    const client = await MongoClient.connect(url);
    const db = client.db("t13");
    const collection = db.collection("fifa");

    try {
        let data = await collection.find({ pontszam: { $gt: 1600 } })
            .project({ _id: 0, csapat: 1, pontszam: 1 })
            .toArray();
        client.close();
        return data;
    } catch (err) {
        console.error("Hiba történt a több mint 1600 pontot elért csapatok lekérésekor...", err);
        client.close();
    }
}

async function getMostLosses() {
    const client = await MongoClient.connect(url);
    const db = client.db("t13");
    const collection = db.collection("fifa");

    try {
        let data = await collection.find()
            .sort({ valtozas: 1 })
            .project({ _id: 0, csapat: 1, valtozas: 1 })
            .limit(1)
            .toArray();
        client.close();
        return data;
    } catch (err) {
        console.error("Hiba történt a legtöbbet lecsúszott csapat lekérésekor...", err);
        client.close();
    }
}

async function doActions() {
    console.log("Adatok feltöltése...");
    await initData();
    let data = {};
    console.log("----------------------------------------------------------------");
    data = await getSortedData();
    console.log(`3. Feladat: rendezett adatok lekérése:`, data);
    console.log("----------------------------------------------------------------");
    data = await getTop3Teams();
    console.log(`4. Feladat: 3 legjobb csapat adatai: `, data);
    console.log("----------------------------------------------------------------");
    data = await getUnchangedTeams();
    console.log(`5. Feladat: helyet nem változtatott csapatok: `, data);
    console.log("----------------------------------------------------------------");
    data = await getMoreThan1600Points();
    console.log(`6. Feladat: több mint 1600 ponttal rendelkezö csapatok: `, data);
    console.log("----------------------------------------------------------------");
    data = await getMostLosses();
    console.log(`7. Feladat: legtöbb pozíciót vesztett csapatok: `, data);
}


<<<<<<< HEAD
doActions();
=======
doActions();
>>>>>>> 400be55ae486af6e6614d590a78ff3a020e7c67f
