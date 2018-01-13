function checkCashRegister(price, cash, cid) {
  let change = 0;
  const targetChange = cash - price;

  const totalCid = cid.reduce(function(tempTotalCid, cidType) {
    return tempTotalCid + Number(cidType[1]);
  }, 0);

  const moneyValue = {
    "penny": 0.01,
    "nickel": 0.05,
    "dime": 0.1,
    "quarter": 0.25,
    "one": 1,
    "five": 5,
    "ten": 10,
    "twenty": 20,
    "hundred": 100
  };

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

  function cashCounter(currentChange, history) {
    // console.log(currentChange);

    if (currentChange === targetChange) {

      return history;
    } else if (currentChange > targetChange) {

      return null;
    } else {

      for (let i = cidBase.length - 1; i >= 0; i--) {

        const tempChange = currentChange + cidBase[i][1];

        if (!cashCounter(tempChange, history)) {

          continue;

        } else {

          history.push(cidBase[i]);
          console.log(history);

          return cashCounter(tempChange, history);
        }
      }
    }
  }

  // if cash - price > total cid -> not enough money
  if (totalCid < targetChange) {
    return "Insufficient Funds";
  } else if (Math.abs(totalCid - targetChange) <= 0.001) {
    return "Closed";
  } else {
    // console.log(cashCounter(0, []));
    return cashCounter(0, []);
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

checkCashRegister(10, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
