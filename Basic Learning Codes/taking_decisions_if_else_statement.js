const country = "Turkey";
const language = "Turkish";
const continent = "Europe and Asia";
let isIsland = "Buyuk Ada";
/*let population = 90000000;
console.log(country);
console.log(population);
//console.log(language);
//console.log(isIsland);

console.log(typeof country);
console.log(typeof population);
console.log(typeof language);
console.log(typeof isIsland);

//isIsland = true;

//console.log(typeof isIsland);

population = 95000000;
console.log("New population is: " + population);

population /= 2;
console.log(population);
population++;
console.log(population);

const populationFinland = 6000000;
population = 95000000;
console.log(population > populationFinland);
*/
const averageCountry = 33000000;
/*console.log(population < averageCountry);

console.log(country + ' is in ' + continent + ', its ' + population + ' people speaks ' + language);

// or 
const description1 = country + ' is in ' + continent + ', its ' + population + ' people speaks ' + language;
console.log(description1); 
*/

population = 22000000;
const populationDifference = averageCountry - population;

if (population > averageCountry) {
    console.log("Turkey's population is greater than average country population");
}
else {
    console.log(`Turkey's population is ${populationDifference} smaller than average country population`);
}