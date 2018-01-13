function checkCashRegister(price, cash, cid) {
  let change = 0;
  const targetChange = Number((cash - price).toFixed(4));

  const totalCid = cid.reduce(function(tempTotalCid, cidType) {
    return tempTotalCid + Number(cidType[1]);
  }, 0);

  const moneyValueArr = [
    0.01,
    0.05,
    0.1,
    0.25,
    1,
    5,
    10,
    20,
    100
  ];

  const cidBase = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  function cashCounter() {

    // initialize 2 new variables
    // 1. totalChange -> answer in Number format
    // 2. totalChangeArr -> answer in array format (string + number like the input)
    let totalChange = 0;
    let totalChangeArr = [];

    // looping backward with 100 goes first and 0.01 goes last
    for (let i = moneyValueArr.length - 1; i >= 0; i--) {

      // for every loop, initialize two new variables.
      // 1. tempChange -> will change outside the while loop and inside for loop
      // the value will depend on totalChange, we can say that the totalChange will
      // get tempChange value on the last part of while loop
      // 2. tempChangeLocal -> will keep generating new values and its value increases
      // only on the while loop below.
      // we need this because the change can be a couple of money type (e.g 3x10)
      let tempChange = Number((totalChange + moneyValueArr[i]).toFixed(4));
      let tempChangeLocal = moneyValueArr[i];

      // while loop below will keep looping until:
      // a. the tempChange is larger than targetChange. that's when we need to 
      // decrease our money type. (e.g targetChange = 6 -> the loop exit with five: 1
      // and change it to one: 1)
      while (tempChange <= targetChange && cid[i][1] > 0) {

        cid[i][1] -= moneyValueArr[i];
        cid[i][1] = Number(cid[i][1].toFixed(4));

        // tempChangeArr below will be a partition to the answer. We will
        // push this to the answer on two conditions below.
        let tempChangeArr = [cidBase[i][0], tempChangeLocal];

        // we need to catch when it actually finish below 
        if (tempChange === targetChange) {
          totalChangeArr.push(tempChangeArr);
          return totalChangeArr;
        }
	
        // this if else if tells us to change the totalChange variable
        // depends whether it will continue or not
        // a bit weird huh
        if (Number((tempChange + moneyValueArr[i]).toFixed(5)) <= targetChange && cid[i][1] !== 0) {
          totalChange = Number((tempChange + moneyValueArr[i]).toFixed(5));
        } else {
          totalChange = tempChange;
        }

        tempChange += moneyValueArr[i];
        tempChange = Number(tempChange.toFixed(4));
       
        tempChangeLocal += moneyValueArr[i];
        tempChangeLocal = Number(tempChangeLocal.toFixed(4));

        // when it will goes outside the while loop, 
        // catch it!
        if (tempChange > targetChange || cid[i][1] === 0) {
	        totalChangeArr.push(tempChangeArr);
	      }
	    }
    }

    if (totalChange !== targetChange) {
      return "Insufficient Funds";
    }
  }

  // if cash - price > total cid -> not enough money
  if (totalCid < targetChange) {
    return "Insufficient Funds";
  } else if (Math.abs(totalCid - targetChange) <= 0.001) {
    return "Closed";
  } else {
    return cashCounter();
  }

  // Here is your change, ma'am.
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

const money = 20.00;
const price = 19.5;
let cid = [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

const change = checkCashRegister(price, money, cid);

console.log(money + " - " + price + " =", change);
// console.log(cid);
