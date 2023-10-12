const bill = 300;
let tip;


bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${tip = (bill * 15 / 100)} and total is ${bill + tip}`) : console.log(`The bill was ${bill}, the tip was ${tip = (bill * 20 / 100)} and total is ${bill + tip}`);

/* OR we can count tip as:

const tip = bill <= 300 && bill >=50 ? bill*0.15: bill*0.2;
*/