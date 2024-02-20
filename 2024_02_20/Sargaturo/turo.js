const MilkPerPerson = 0.2;
const EggPerPerson = 2;
const SugarPerPerson = 1;

window.onload = () => {
    UpdateRecipe();
}

function UpdateRecipe() {
    let personCount = Number(document.querySelector("#personCount").value);
    let recipe = GetRecipeForPersonCount(personCount);
    document.querySelector("#milk").innerHTML = recipe.milk;
    document.querySelector("#egg").innerHTML = recipe.egg;
    document.querySelector("#sugar").innerHTML = recipe.sugar;
}

function GetRecipeForPersonCount(personCount) {
    return {
        milk: personCount * MilkPerPerson,
        egg: personCount * EggPerPerson,
        sugar: personCount * SugarPerPerson
    };
}