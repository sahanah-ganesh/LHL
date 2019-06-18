let calculateChange = function(total, cash) {
  var result = cash - total;
  var change = {};

  const types = ["twenty", "ten", "five", "twoDollar", "dollar", "quarter", "dime", "nickel", "penny"];

  const values = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  var amount;

  for (var i = 0; i < values.length; i++) {
    amount = Math.floor(result/values[i]);
    if (amount > 0) {
      change[types[i]] = amount;
      result = result%values[i];
    }
  }

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

