const multiplicationTable = function(maxValue) {
  var result = "\n";
  for (var i = 1; i <= maxValue; i++) {
    for (var j = 1; j <= maxValue; j++) {
      result += (i * j) + " ";
    }
    result += "\n";
  }
  console.log(result);
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));




