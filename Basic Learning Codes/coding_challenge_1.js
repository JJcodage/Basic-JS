//For First Data

let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;
let bmiMark = weightMark / (heightMark ** 2);
console.log(bmiMark);
let bmiJohn = weightJohn / (heightJohn ** 2);
console.log(bmiJohn);
let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
console.log('Marks BMI higher than Johns is ' + markHigherBMI + '.' + ' So Marks BMI is higher than Johns.');

//For Second Data

weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;
bmiMark = weightMark / (heightMark ** 2);
console.log(bmiMark);
bmiJohn = weightJohn / (heightJohn ** 2);
console.log(bmiJohn);
markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
console.log('Marks BMI higher than Johns is ' + markHigherBMI + '.' + ' So Marks BMI is smaller than Johns.');
