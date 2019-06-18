const makeCase = function (input, type) {

let secondType;
let newString;

  var vowelCase = function(input) {
    let array4 = [];
    for (var m = 0; m < input.length; m++) {
      var vowel = input.charAt(m);
      if ("aeiou".indexOf(vowel) !== -1) {
        array4.push(vowel.toUpperCase());
      } else {
        array4.push(vowel.toLowerCase());
      }
    }
    return array4.join("");
  };


  var consonantCase = function(input) {
    let array5 = [];
    for (var n = 0; n < input.length; n++) {
      var consonant = input.charAt(n);
      if ("bcdfghjklmnpqrstvwxyz".indexOf(consonant) !== -1) {
        array5.push(consonant.toUpperCase());
      } else {
        array5.push(consonant.toLowerCase());
      }
    }
    return array5.join("");
  };


   let camelCase = function(input) {
    let array1 = input.split(" ");
    let camelString = array1[0];
    for (let i = 1; i < array1.length; i++) {
      camelString += camelCapitalize(array1[i]);
    }
    return camelString;
  };
  let camelCapitalize = function(input) {
    return input[0].toUpperCase() + input.slice(1);
  };


  let pascalCase = function(input) {
    let array2 = input.split(" ");
    let pascalString = "";
    for (let j = 0; j < array2.length; j++) {
      pascalString += pascalCapitalize(array2[j]);
    }
    return pascalString;
  };
  let pascalCapitalize = function(input) {
    return input[0].toUpperCase() + input.slice(1);
  };


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

  let kebabCase = function(input) {
    let kebabString = "";
    for (var l = 0; l < input.length; l++) {
      if (input.charAt(l) == " ") {
        kebabString += "-";
      } else {
        kebabString += input.charAt(l);
      }
    }
    return kebabString;
  };

  let titleCase = function(input) {
    let array3 = input.split(" ");
    for (var p = 0; p < array3.length; p++) {
      array3[p] = array3[p].charAt(0).toUpperCase() + array3[p].slice(1);
    }
    return array3.join(" ");
  };

var type1 = ["camel", "pascal", "snake", "kebab", "title"]

if ( type1.includes(type[0]) ) {
  // use first type first then second type

} else if (type1.includes(type[1])){
  // process secondtype first

}


  if (type.constructor === Array) {
    let typeArray = [];
    for (var u = type.length - 1; u--;) {
      if (type[u] == "upper" || type[u] === "lower" || type[u] === "vowel" || type[u] === "consonant") {
        typeArray.push(type[u]);
        type.splice(u, 1);
        secondType = typeArray.join("");
      }
    type = type[0];
    }
  }

  if (type.constructor === Array && secondType === "vowel") {
    console.log(vowelCase(newString));
  }
  if (type.constructor === Array && secondType === "consonant") {
    console.log(consonantCase(newString));
  }
  if (type.constructor === Array && secondType === "upper") {
    console.log(newString.toUpperCase());
  }
  if (type.constructor === Array && secondType === "lower") {
    console.log(newString.toLowerCase());
  }

  if (type.constructor !== Array && type == "vowel") {
    console.log(vowelCase(input));
  }

  if (type.constructor !== Array && type == "consonant") {
    console.log(consonantCase(input));
  }

  if (type.constructor !== Array && type == "upper") {
    console.log(input.toUpperCase());
  }
  if (type.constructor !== Array && type == "lower") {
    console.log(input.toLowerCase());
  }

  if (type.constructor !== Array && type == "camel") {
    console.log(camelCase(input));
  } else {
    newString = camelCase(input);
  }

  if (type.constructor !== Array && type == "pascal") {
    console.log(pascalCase(input));
  } else {
    newString = pascalCase(input);
  }

  if (type.constructor !== Array && type == "snake") {
    console.log(snakeCase(input));
  } else {
    newString = snakeCase(input);
  }

  if (type.constructor !== Array && type == "kebab") {
    console.log(kebabCase(input));
  } else {
    newString = kebabCase(input);
  }

  if (type.constructor !== Array && type == "title") {
    console.log(titleCase(input));
  } else {
    newString = titleCase(input);
  }

};


makeCase("this is a string", "camel");
makeCase("this is a string", "pascal");
makeCase("this is a string", "snake");
makeCase("this is a string", "kebab");
makeCase("this is a string", "title");
makeCase("this is a string", "vowel");
makeCase("this is a string", "consonant");
makeCase("this is a string", "upper");
makeCase("this is a string", "lower");
makeCase("this is a string", ["upper", "snake"]);