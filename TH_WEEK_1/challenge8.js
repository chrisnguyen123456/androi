//Challenge 8: Let's improve Steven's tip calculator even more, this time using loops!
console.log("\n-------------------------------------------------");
console.log("\nChallenge 8");


const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals1 = [];

const calcTip1 = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

for (let i = 0; i < bills1.length; i++) {
  const tip = calcTip1(bills1[i]);
  tips2.push(tip);
  totals1.push(bills1[i] + tip);
}

console.log("Bills:", bills1);
console.log("Tips:", tips2);
console.log("Totals:", totals1);

const calcAverage2 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log("Average Total:", calcAverage2(totals));