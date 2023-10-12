const country = "Turkey";
let population = 90000000;
const language = "Turkish";
const continent = "Europe and Asia";
let isIsland = "Buyuk Ada";
console.log(country);
console.log(population);
//console.log(language);
//console.log(isIsland);

/*console.log(typeof country);
console.log(typeof population);
console.log(typeof language);
console.log(typeof isIsland); */

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

const averageCountry = 33000000;
console.log(population < averageCountry);

//console.log(country + ' is in ' + continent + ', its ' + population + ' people speaks ' + language);

// or 
/*const description1 = country + ' is in ' + continent + ', its ' + population + ' people speaks ' + language;
console.log(description1); */

console.log(`${country} is in ${continent} its ${population} people speaks ${language}.`);
