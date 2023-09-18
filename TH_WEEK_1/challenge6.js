//Challenge 6: Steven is still building his tip calculator
console.log("\n-------------------------------------------------");
console.log("\nChallenge 6");

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
    } else {
      return bill * 0.2;
    }
  };
  
  const bills = [125, 555, 44];
  const tips1 = bills.map((bill) => calcTip(bill));
  const totals = bills.map((bill, index) => bill + tips1[index]);
  
  console.log("Bills:", bills);
  console.log("Tips:", tips1);
  console.log("Totals:", totals);