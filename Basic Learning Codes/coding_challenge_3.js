const avgScoreDolphins = (115 + 85 + 110) / 3;
const avgScoreKolas = (115 + 85 + 110) / 3;

console.log(avgScoreDolphins);
console.log(avgScoreKolas);


//MAIN PART

if (avgScoreDolphins > avgScoreKolas) {
    console.log(`The winner of the trophy is Dolphins with the score ${avgScoreDolphins}!!`);
}

else if (avgScoreKolas > avgScoreDolphins) {
    console.log(`The winner of the trophy is Koalas with the score ${avgScoreKolas}!!`);
}

else if (avgScoreKolas === avgScoreDolphins) {
    console.log(`There is draw!!`);
}

else {
    console.log(`There is no winner`);
}

// BONUS #1

if (avgScoreDolphins > avgScoreKolas && avgScoreDolphins >= 100) {
    console.log(`The winner of the trophy is Dolphins with the score ${avgScoreDolphins}!!`);
}

else if (avgScoreKolas > avgScoreDolphins && avgScoreKolas >= 100) {
    console.log(`The winner of the trophy is Koalas with the score ${avgScoreKolas}!!`);
}

else if (avgScoreKolas === avgScoreDolphins) {
    console.log(`There is draw!!`);
}


else {
    console.log(`There is no winner`);
}

//BONUS #2


if (avgScoreDolphins > avgScoreKolas && avgScoreDolphins >= 100) {
    console.log(`The winner of the trophy is Dolphins with the score ${avgScoreDolphins}!!`);
}

else if (avgScoreKolas > avgScoreDolphins && avgScoreKolas >= 100) {
    console.log(`The winner of trophy is Koalas with the score ${avgScoreKolas}!!`);
}

else if (avgScoreKolas === avgScoreDolphins && (avgScoreKolas >= 100 && avgScoreDolphins >= 100)) {
    console.log(`There is draw but both win the trophy!!`);
}

else {
    console.log(`There is no winner`);
}