//Challenge 1: Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
console.log("Challenge 1");

// Data 1
let markWeight1 = 78; // Mark's weight in kg
let markHeight1 = 1.69; // Mark's height in meters

let johnWeight1 = 92; // John's weight in kg
let johnHeight1 = 1.95; // John's height in meters

// Data 2
let markWeight2 = 95; // Mark's weight in kg
let markHeight2 = 1.88; // Mark's height in meters

let johnWeight2 = 85; // John's weight in kg
let johnHeight2 = 1.76; // John's height in meters

// Calculate BMIs
let markBMI1 = markWeight1 / (markHeight1 * markHeight1);
let johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

let markBMI2 = markWeight2 / (markHeight2 * markHeight2);
let johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

// If Mark has a higher BMI than John for both data sets
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

// Display the results
console.log("Data 1:");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Mark has a higher BMI than John in Data 1: ${markHigherBMI1}`);

console.log("\nData 2:");
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Mark has a higher BMI than John in Data 2: ${markHigherBMI2}`);