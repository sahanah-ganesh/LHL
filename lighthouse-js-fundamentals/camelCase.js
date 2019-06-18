let camelCase = function(input) {
  let array = input.split(" ");
  let finalString = array[0];
  for (let i = 1; i < array.length; i++) {
    finalString += capitalize(array[i]);
  }
  return finalString;
};
let capitalize = function(input) {
  return input[0].toUpperCase() + input.slice(1);
};


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));