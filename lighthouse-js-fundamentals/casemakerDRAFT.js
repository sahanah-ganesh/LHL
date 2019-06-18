const makeCase = function (input, type) {
let secondType;
let newString;
  if (type.constructor === Array) {
    let typeArray = [];
    for (var u = type.length - 1; u--;) {
      if (type[u] == "upper" || type[u] === "lower" || type[u] === "vowel" || type[u] === "consonant") {
        typeArray.push(type[u]);
        type.splice(u, 1);
        secondType = typeArray.join("");
      }
    type == type[0];
    }
  } else


  let snakeCase = function(input) {
    let snakeString = "";
    for (var k = 0; k < input.length; k++) {
      if (input.charAt(k) == " ") {
        snakeString += "_";
      } else {
        snakeString += input.charAt(k);
      }
    }
    return snakeString;
  };
  if (type.constructor !== Array && type == "snake") {
    console.log(snakeCase(input));
  } else {
    newString = snakeCase(input);
  }

  if (type.constructor === Array && secondType === "upper") {
    console.log(newString.toUpperCase());
  }

};

makeCase("this is a string", ["upper", "snake"]);
makeCase("this is a string", ["vowel", "snake"]);
makeCase("this is a string", "snake");

