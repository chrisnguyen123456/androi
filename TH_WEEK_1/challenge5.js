//Challenge 5: Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
console.log("\n-------------------------------------------------");
console.log("\nChallenge 5");

const calcAverage1 = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
};

// Data 1
const dolphinsAverage = calcAverage1(44, 23, 71);
const koalasAverage = calcAverage1(65, 54, 49);
checkWinner(dolphinsAverage, koalasAverage);

// Data 2
const dolphinsAverage2 = calcAverage1(85, 54, 41);
const koalasAverage2 = calcAverage1(23, 34, 27);
checkWinner(dolphinsAverage2, koalasAverage2);
