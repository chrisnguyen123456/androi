//Challenge 2: Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
console.log("\n-------------------------------------------------");
console.log("\nChallenge 2");

// Who has a higher BMI in Data 1
// Print the result using a template literal
let higherBMI1;
let BMI1higher;
let BMI1lower
if (markBMI1 > johnBMI1) {
    higherBMI1 = "Mark";
    BMI1higher = markBMI1;
    BMI1lower = johnBMI1;
    console.log(`In Data 1, ${higherBMI1}'s BMI (${BMI1higher.toFixed(1)}) is higher than ${higherBMI1 === "Mark" ? "John's" : "Mark's"} (${BMI1lower.toFixed(1)})!`);
} else if (johnBMI1 > markBMI1) {
    higherBMI1 = "John";
    BMI1higher = johnBMI1;
    BMI1lower = markBMI1;
    console.log(`In Data 1, ${higherBMI1}'s BMI (${BMI1higher.toFixed(1)}) is higher than ${higherBMI1 === "Mark" ? "John's" : "Mark's"} (${BMI1lower.toFixed(1)})!`);

} else {
    higherBMI1 = "Mark and John have the same BMI";
    console.log('In Data1, ${higherBMI2}');
}

// Who has a higher BMI in Data 2
// Print the result using a template literal
let higherBMI2;
let BMI2higher;
let BMI2lower;
if (markBMI2 > johnBMI2) {
    higherBMI2 = "Mark";
    BMI2higher = markBMI2;
    BMI2lower = johnBMI2;
    console.log(`In Data 2, ${higherBMI2}'s BMI (${BMI2higher.toFixed(1)}) is higher than ${higherBMI2 === "Mark" ? "John's" : "Mark's"} (${BMI2lower.toFixed(1)})!`);
} else if (johnBMI2 > markBMI2) {
    higherBMI2 = "John";
    BMI2higher = johnBMI2;
    BMI2lower = markBMI2;
    console.log(`In Data 2, ${higherBMI2}'s BMI (${BMI2higher.toFixed(1)}) is higher than ${higherBMI2 === "Mark" ? "John's" : "Mark's"} (${BMI2lower.toFixed(1)})!`);
} else {
    higherBMI2 = "Mark and John have the same BMI";
    console.log('In Data2, ${higherBMI2}');
}