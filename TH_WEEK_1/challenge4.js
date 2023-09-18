//Challenge 4: Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
console.log("\n-------------------------------------------------");
console.log("\nChallenge 4");

// Test data
const billValues = [275, 40, 430];

// Calculate the tip using a ternary operator
const tips = billValues.map((bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2);

// Calculate the total value (bill + tip)
const totalValues = billValues.map((bill, index) => bill + tips[index]);

// Print the results
totalValues.forEach((total, index) => {
    const bill = billValues[index];
    const tip = tips[index];
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
});