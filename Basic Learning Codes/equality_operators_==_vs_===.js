//FIRST CASE

const numNeighbours = prompt('How many neighbour countries does your country have?');

if (numNeighbours == 1) {
    console.log(`Only ${numNeighbours} neighbours!`);
}

else if (numNeighbours > 1) {
    console.log(`You have ${numNeighbours} neighbours!`);
}

else {
    console.log(`No borders!✋`);
}

//In this case code works because of loose equality it converts string to number in if/else case



//SECOND CASE
/*
const numNeighbours = prompt('How many neighbour countries does your country have?');

if (numNeighbours === 1) {
    console.log(`Only ${numNeighbours} neighbours!`);
}

else if (numNeighbours > 1) {
    console.log(`You have ${numNeighbours} neighbours!`);
}

else {
    console.log(`No borders!✋`);
}
*/
//In this case strings cannot be equal to number acoording to string equality "==="



//THIRD CASE
/*

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log(`Only ${numNeighbours} neighbours!`);
}

else if (numNeighbours > 1) {
    console.log(`You have ${numNeighbours} neighbours!`);
}

else {
    console.log(`No borders!✋`);
}
*/
//this case also works and its best version of it