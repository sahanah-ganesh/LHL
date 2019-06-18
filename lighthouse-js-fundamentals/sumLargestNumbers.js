let sumLargestNumbers = function(data) {
  var largest;
  var secondLargest;
  var length = data.length;
  var i = 2;
  if (length < 2) {
    return "Error";
  }
  largest = data[0];
  secondLargest = data[1];
  if (largest < secondLargest) {
    largest = data[1];
    secondLargest = data[0];
  }
  for (let i = 2; i < length; i++) {
    if (data[i] > largest) {
      secondLargest = largest;
      largest = data[i];
    }
      else if (data[i] > secondLargest) {
        secondLargest = data[i];
    }
  }
  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

