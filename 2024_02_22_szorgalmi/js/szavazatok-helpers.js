class Party {
    shortName;
    fullName;

    constructor(shortName, fullName) {
        this.shortName = shortName;
        this.fullName = fullName;

        // toString() felülírása hogy ne '[object Object]' legyen a visszatérés
        // => csoportosításnál szükséges
        Party.prototype.toString = function () {
            return this.shortName;
        }
    }
}

class Candidate {
    area;
    voteCount;
    name;
    party;
    constructor(area, voteCount, name, party) {
        this.area = area;
        this.voteCount = voteCount;
        this.name = name;
        this.party = party;

        Candidate.prototype.toString = function () {
            return name;
        }
    }
}

const Parties = {
    "GYEP": new Party("GYEP", "Gyümölcsevők Pártja"),
    "HEP": new Party("HEP", "Húsevők Pártja"),
    "TISZ": new Party("TISZ", "Tejivók Szövetsége"),
    "ZEP": new Party("ZEP", "Zöldségevők Pártja"),
    "-": new Party("-", "Független")
}

const VotersCount = 12345;

const Votes = GetObjectEN();

function GetObjectEN() {
    let result = []
    for (const szavazat of szavazatok) {
        result.push(new Candidate(
            szavazat.korzet,
            szavazat.szavazat,
            szavazat.nev,
            Parties[szavazat.part]
        ));
    }
    return result;
}