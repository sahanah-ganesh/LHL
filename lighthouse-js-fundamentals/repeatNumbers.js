let repeatNumbers = function(data) {
  var repeatValue;
  var howOften;
  var result = "";
  for (var i = 0; i < data.length; i++) {
    repeatValue = data[i][0];
    howOften = data[i][1];
    for (var j = 0; j < howOften; j++) {
      result += repeatValue;
    }
    if (i !== data.length - 1) {
      result += ", ";
    }
  }
  console.log(result);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
