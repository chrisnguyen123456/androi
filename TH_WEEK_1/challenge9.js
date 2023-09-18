//Challenge 9: Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures
console.log("\n-------------------------------------------------");
console.log("\nChallenge 9");

const printForecast = (arr) => {
    let forecast = "";
    for (let i = 0; i < arr.length; i++) {
      forecast += `... ${arr[i]}°C in ${i + 1} day`;
      if (i !== arr.length - 1) {
        forecast += " ";
      }
    }
    console.log(forecast);
  };
  
  const data1 = [17, 21, 23];
  const data2 = [12, 5, -5, 0, 4];
  
  console.log("Data 1:");
  printForecast(data1);
  
  console.log("Data 2:");
  printForecast(data2);

