let numberOfVowels = function(data) {
  var vowels = "aeiou";
  var count = 0;
  var i;
  for (i = 0; i < data.length; i++) {
    if (vowels.indexOf(data[i]) !== -1) {
    count += 1;
    }
  }
return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
