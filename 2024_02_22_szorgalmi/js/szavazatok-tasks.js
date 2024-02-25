// @ts-check
function GetAllCandidateCount() {
    return Votes.length;
}

/**
 * @param {string} propertyName
 */
function GetGrouping(propertyName) {
    let result = {};
    for (const candidate of Votes) {
        if (result[candidate[propertyName]] === undefined) {
            result[candidate[propertyName]] = [candidate];
        } else if (!result[candidate[propertyName]].includes(candidate)) {
            result[candidate[propertyName]].push(candidate);
        }
    }
    return result;
}

/**
 * @param {string} party
 */
function GetGroupedCandidates(party) {
    let test = GetGrouping("party");
    return test[party];
}

/**
 * @param {any} list
 * @param {string} [propertyName]
 */
function GetPropertyValuesFromObjectList(list, propertyName) {
    if (propertyName === undefined) return [];

    let result = [];
    for (const elem of list) {
        result.push(elem[propertyName]);
    }
    return result;
}

/**
 * @param {string} filterValue
 */
function GetFilteredDataForName(filterValue) {
    let result = [];
    for (const candidate of Votes) {
        if (!result.includes(candidate) && candidate.name.toLowerCase().includes(filterValue.toLowerCase())) {
            result.push(candidate);
        }
    }
    return result;
}

/**
 * @param {Array<Candidate>} [candidateList]
 */
function CountAllVotes(candidateList) {
    if (candidateList === undefined) return 0;

    let result = 0;
    for (const candidate of candidateList) {
        result += candidate.voteCount;
    }
    return result;
}

function GetRatioOfVoters() {
    return CountAllVotes(Votes) / VotersCount;
}

function GetSumCountOfVotesPerParty() {
    let groups = GetGrouping("party");
    let result = {};
    for (const [party, candidates] of Object.entries(groups)) {
        result[party] = CountAllVotes(candidates);
    }
    return result;
}

function GetCandidatesWithMostVotes() {
    let candidateWithMostVotes = Votes[0];
    for (const candidate of Votes) {
        if (candidate.voteCount > candidateWithMostVotes.voteCount) {
            candidateWithMostVotes = candidate;
        }
    }
    let result = [];
    for (const candidate of Votes) {
        if (candidate.voteCount === candidateWithMostVotes.voteCount) {
            result.push(candidate);
        }
    }
    return result;
}

function GetWinnersForAreas() {
    let areaVotes = GetGrouping("area");
    let result = {};
    for (const [area, candidates] of Object.entries(areaVotes)) {
        result[area] = candidates[0];
        for (const candidate of candidates) {
            if (result[area].voteCount < candidate.voteCount) {
                result[area] = candidate;
            }
        }
    }
    return result;
}