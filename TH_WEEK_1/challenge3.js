//Challenge 3: There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
console.log("\n-------------------------------------------------");
console.log("\nChallenge 3");

// Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Calculate average scores
const calcAverage = (scores) => scores.reduce((total, score) => total + score, 0) / scores.length;

const dolphinsAverage1 = calcAverage(dolphinsScores1);
const koalasAverage1 = calcAverage(koalasScores1);

//console.log(dolphinsAverage1);
//console.log(koalasAverage1);

// Compare average scores and determine the winner
if (dolphinsAverage1 > koalasAverage1) {
    console.log(`Data 1: Dolphins win with an average score of ${dolphinsAverage1.toFixed(1)}`);
} else if (koalasAverage1 > dolphinsAverage1) {
    console.log(`Data 1: Koalas win with an average score of ${koalasAverage1.toFixed(1)}`);
} else if (dolphinsAverage1 === koalasAverage1) {
    console.log("Data 1: It's a draw!");
}

// Data Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsAverageBonus1 = calcAverage(dolphinsScoresBonus1);
const koalasAverageBonus1 = calcAverage(koalasScoresBonus1);

//console.log(dolphinsAverageBonus1);
//console.log(koalasAverageBonus1);

// Compare average scores and determine the winner
if (dolphinsAverageBonus1 > koalasAverageBonus1 && dolphinsAverageBonus1 >= 100) {
    console.log(`Data Bonus 1: Dolphins win with an average score of ${dolphinsAverageBonus1}`);
} else if (koalasAverageBonus1 > dolphinsAverageBonus1 && koalasAverageBonus1 >= 100) {
    console.log(`Data Bonus 1: Koalas win with an average score of ${koalasAverageBonus1}`);
} else if (dolphinsAverageBonus1 === koalasAverageBonus1 && dolphinsAverageBonus1 >= 100 && koalasAverageBonus1 >= 100) {
    console.log("Data Bonus 1: It's a draw!");
} else {
    console.log("Data Bonus 1: No one wins the trophy.");
}

// Data Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const dolphinsAverageBonus2 = calcAverage(dolphinsScoresBonus2);
const koalasAverageBonus2 = calcAverage(koalasScoresBonus2);

//console.log(dolphinsAverageBonus2);
//console.log(koalasAverageBonus2);

// Compare average scores and determine the winner
if (dolphinsAverageBonus2 > koalasAverageBonus2 && dolphinsAverageBonus2 >= 100) {
    console.log(`Data Bonus 2: Dolphins win with an average score of ${dolphinsAverageBonus2}`);
} else if (koalasAverageBonus2 > dolphinsAverageBonus2 && koalasAverageBonus2 >= 100) {
    console.log(`Data Bonus 2: Koalas win with an average score of ${koalasAverageBonus2}`);
} else if (dolphinsAverageBonus2 === koalasAverageBonus2 && dolphinsAverageBonus2 >= 100 && koalasAverageBonus2 >= 100) {
    console.log("Data Bonus 2: It's a draw!");
} else {
    console.log("Data Bonus 2: No one wins the trophy.");
}