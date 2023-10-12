/*//TRUE CASE

const population = 25000000;
const language = "English";
const notIsland = true;
let canLive;

if (population < 50000000 && language === "English" && notIsland) {
    canLive = true;
    console.log(canLive);
    console.log("Kübra can live in Sweden!!");
}
else {
    canLive = false;
    console.log(canLive);
    console.log("Kübra can not live in KKTC!");
}
*/

// FALSE CASE

const population = 1000000;
const language = "Turkish";
const notIsland = false;
let canLive;

if (population < 50000000 && language === "English" && notIsland) {
    canLive = true;
    console.log(canLive);
    console.log("Kübra can live in Sweden!!");
}
else {
    canLive = false;
    console.log(canLive);
    console.log("Kübra can not live in KKTC!");
}